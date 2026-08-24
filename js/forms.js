/* ============================================================
   TEXTILES PELILEO — Formulario de cotización + medición
   ------------------------------------------------------------
   1) TP.track(): envía un evento a GA4 (si está instalado),
      Meta Pixel y TikTok Pixel, con la página de origen.
   2) Formulario calificador: valida, arma el mensaje de
      WhatsApp y redirige a /gracias.html.

   ⚠️ GA4: este sitio todavía NO tiene GA4 instalado. Cuando
   crees la propiedad, pega el snippet de gtag.js en el <head>
   (o en js/pixels.js) con tu ID G-XXXXXXX. Los eventos de aquí
   ya quedan preparados y empezarán a registrarse solos:
     generate_lead      → envío del formulario de cotización
     file_download      → descarga del catálogo PDF
     whatsapp_click     → clic a WhatsApp (con page_origin)
   En GA4 márcalos como conversiones (Administrar → Eventos).
   ============================================================ */

window.TP = window.TP || {};

TP.track = function (eventName, params) {
    params = params || {};
    params.page_origin = location.pathname;
    try {
        if (typeof window.gtag === "function") {
            window.gtag("event", eventName, params);
        } else if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push(Object.assign({ event: eventName }, params));
        }
    } catch (e) { /* la medición nunca debe romper la página */ }
    try {
        if (window.fbq) {
            var fbMap = { generate_lead: "Lead", file_download: "ViewContent", whatsapp_click: "Contact" };
            if (fbMap[eventName]) window.fbq("track", fbMap[eventName]);
        }
        if (window.ttq) {
            var ttMap = { generate_lead: "SubmitForm", file_download: "Download", whatsapp_click: "Contact" };
            if (ttMap[eventName]) window.ttq.track(ttMap[eventName]);
        }
    } catch (e) { /* idem */ }
};

/* Clics a WhatsApp con la página de origen (pixels.js ya cuenta
   el Contact genérico; esto añade el detalle para GA4). */
document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me"]');
    if (!a) return;
    TP.track("whatsapp_click", { link_text: (a.textContent || "").trim().slice(0, 60) });
});

/* ------------------------------------------------------------
   Formulario calificador de cotización
   ------------------------------------------------------------ */
TP.initQuoteForm = function (formId) {
    var form = document.getElementById(formId || "quoteFormB2B");
    if (!form) return;

    var val = function (name) {
        var el = form.querySelector('[name="' + name + '"]');
        return el ? (el.value || "").trim() : "";
    };
    var checked = function (name) {
        return Array.prototype.map.call(
            form.querySelectorAll('[name="' + name + '"]:checked'),
            function (c) { return c.value; }
        );
    };
    var setError = function (el, msg) {
        var field = el.closest(".field") || el.parentNode;
        var old = field.querySelector(".field__err");
        if (old) old.remove();
        if (!msg) { el.removeAttribute("aria-invalid"); return; }
        var s = document.createElement("span");
        s.className = "field__err";
        s.textContent = msg;
        field.appendChild(s);
        el.setAttribute("aria-invalid", "true");
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        /* --- Validación: 5 obligatorios + consentimiento --- */
        var ok = true, firstBad = null;
        [["nombre", "Escribe tu nombre"],
         ["empresa", "Escribe el nombre de tu empresa"],
         ["whatsapp", "Necesitamos un WhatsApp para responderte"],
         ["trabajadores", "Selecciona cuántas personas vas a vestir"]
        ].forEach(function (pair) {
            var el = form.querySelector('[name="' + pair[0] + '"]');
            if (!el) return;
            if (!el.value.trim()) { setError(el, pair[1]); ok = false; firstBad = firstBad || el; }
            else setError(el, "");
        });

        var prendas = checked("prendas");
        var prendasBox = form.querySelector('[name="prendas"]');
        if (!prendas.length && prendasBox) {
            setError(prendasBox, "Marca al menos una prenda");
            ok = false; firstBad = firstBad || prendasBox;
        } else if (prendasBox) { setError(prendasBox, ""); }

        var consent = form.querySelector('[name="consentimiento"]');
        if (consent && !consent.checked) {
            setError(consent, "Necesitamos tu autorización para contactarte");
            ok = false; firstBad = firstBad || consent;
        } else if (consent) { setError(consent, ""); }

        if (!ok) {
            if (firstBad) firstBad.focus();
            return;
        }

        /* --- Mensaje de WhatsApp --- */
        var linea = function (etiqueta, valor) { return valor ? "• " + etiqueta + ": " + valor + "\n" : ""; };
        var msg = "Hola Textiles Pelileo, quiero cotizar dotación:\n" +
            linea("Nombre", val("nombre")) +
            linea("Empresa", val("empresa")) +
            linea("Ciudad", val("ciudad")) +
            linea("Sector", val("sector")) +
            linea("Trabajadores a vestir", val("trabajadores")) +
            linea("Prendas", prendas.join(", ")) +
            linea("Bordado de logo", val("bordado")) +
            linea("La necesito para", val("fecha")) +
            linea("Correo", val("correo")) +
            linea("Comentarios", val("comentarios")) +
            "¿Me ayudan con la cotización?";

        TP.track("generate_lead", {
            form_id: form.id,
            company_size: val("trabajadores"),
            sector: val("sector") || "no indicado",
            city: val("ciudad") || "no indicada"
        });

        window.open(TP.wa(msg), "_blank", "noopener");

        /* Página de gracias: da tranquilidad y permite medir conversiones */
        var root = document.body.getAttribute("data-root") || "";
        setTimeout(function () { location.href = root + "gracias.html"; }, 400);
    });
};

/* ------------------------------------------------------------
   Descarga del catálogo PDF (deja el dato de contacto por WhatsApp)
   ------------------------------------------------------------ */
TP.initCatalogForm = function (formId) {
    var form = document.getElementById(formId || "catalogForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var get = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ""; };
        var correo = get("correo");
        var emailEl = form.querySelector('[name="correo"]');
        if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            if (emailEl) { emailEl.setAttribute("aria-invalid", "true"); emailEl.focus(); }
            return;
        }
        if (emailEl) emailEl.removeAttribute("aria-invalid");

        var root = document.body.getAttribute("data-root") || "";
        TP.track("file_download", { file_name: "catalogo-textiles-pelileo.pdf" });

        /* El PDF se descarga y, en paralelo, nos llega el contacto por
           WhatsApp (el sitio es estático: no hay servidor que guarde correos). */
        var a = document.createElement("a");
        a.href = root + "descargas/catalogo-textiles-pelileo.pdf";
        a.download = "catalogo-textiles-pelileo.pdf";
        document.body.appendChild(a); a.click(); a.remove();

        var msg = "Hola, descargué el catálogo de Textiles Pelileo.\n" +
            (get("nombre") ? "• Nombre: " + get("nombre") + "\n" : "") +
            (get("empresa") ? "• Empresa: " + get("empresa") + "\n" : "") +
            "• Correo: " + correo + "\n" +
            "Me gustaría recibir información de precios por volumen.";
        window.open(TP.wa(msg), "_blank", "noopener");

        var done = form.querySelector("[data-catalog-done]");
        if (done) done.hidden = false;
    });
};
