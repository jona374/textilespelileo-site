/* ============================================================
   TEXTILES PELILEO — Partials + Config global
   Edita SOLO este bloque para cambiar datos de contacto/menú.
   El header, menú móvil, footer, botón flotante de WhatsApp y
   la barra CTA móvil se inyectan automáticamente en cada página.
   ============================================================ */

window.TP = window.TP || {};
TP.config = {
    brand: "TEXTILES PELILEO",
    tagline: "Duradero por Naturaleza",
    phoneIntl: "593986634114",                 // para enlaces wa.me / tel
    phoneDisplay: "+593 98 663 4114",
    email: "ventas@textilespelileo.com",
    location: "Pelileo · Barrio El Tambo, Tungurahua, Ecuador",
    site: "https://textilespelileo.com",
    // LOGO: cuando tengas el logo del jinete, coloca el archivo en /img y pon aquí la ruta.
    // Ej: logo: "img/logo.png" (versión oscura para fondos claros) y
    //     logoLight: "img/logo-blanco.png" (versión blanca para el footer oscuro).
    // Si quedan vacíos, se muestra el emblema + wordmark heritage provisional.
    logo: "img/logo-textiles-pelileo.webp",
    logoLight: "img/logo-blanco.webp",
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61580434762683",
        instagram: "https://www.instagram.com/textilespelileo",
        tiktok: "https://www.tiktok.com/@textiles_pelileo"
    },
    // Mensaje WhatsApp por defecto (se puede sobreescribir por página con data-wa-msg)
    defaultMsg: "Hola, me interesa la ropa de trabajo de Textiles Pelileo. ¿Me ayudan con disponibilidad, tallas y cotización?"
};

/* Genera un enlace de WhatsApp con mensaje codificado */
TP.wa = function (msg) {
    var text = encodeURIComponent(msg || TP.config.defaultMsg);
    return "https://wa.me/" + TP.config.phoneIntl + "?text=" + text;
};

/* Menú principal */
TP.nav = [
    { label: "Inicio", href: "index.html" },
    { label: "Productos", href: "productos.html" },
    { label: "Uniformes", href: "uniformes-industriales.html" },
    { label: "Bordados", href: "bordados-corporativos.html" },
    { label: "Nosotros", href: "nosotros.html" },
    { label: "Contacto", href: "contacto.html" }
];

(function () {
    var c = TP.config;
    var current = (location.pathname.split("/").pop() || "index.html") || "index.html";
    var pageMsg = (document.body.getAttribute("data-wa-msg")) || c.defaultMsg;

    /* ---------- PRELOADER (oculto al cargar imágenes/fuentes) ---------- */
    var pre = document.createElement("div");
    pre.className = "preloader";
    pre.setAttribute("aria-hidden", "true");
    pre.innerHTML =
        '<div style="text-align:center">' +
            (c.logo
                ? '<img class="preloader__logo" src="' + c.logo + '" alt="">'
                : '<div style="font-family:var(--font-head);font-weight:800;font-size:1.6rem;color:var(--navy-900);letter-spacing:.02em">TEXTILES PELILEO</div>') +
            '<div class="preloader__bar"></div>' +
        '</div>';
    document.body.insertBefore(pre, document.body.firstChild);
    function hidePre() { pre.classList.add("hide"); setTimeout(function () { pre.remove(); }, 600); }
    if (document.readyState === "complete") setTimeout(hidePre, 350);
    else window.addEventListener("load", function () { setTimeout(hidePre, 250); });
    setTimeout(hidePre, 2500); // failsafe: nunca bloquea más de 2.5s
    var waSvg = '<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.5z"/></svg>';

    // Productos destacados para el mega menú (8 items)
    var megaItems = [
        { href: "pantalon-premium-gregori.html", name: "Pantalón Premium 14oz", price: "Desde $12", img: "img/pantalon-doblado.webp" },
        { href: "pantalon-stretch.html", name: "Pantalón Stretch", price: "Desde $12", img: "img/galeria/stretch-1.webp" },
        { href: "camisa-industrial-mistral.html", name: "Camisa Mistral", price: "Desde $12", img: "img/galeria/camisa-1.webp" },
        { href: "chaleco-antifluidos-azul.html", name: "Chaleco Antifluidos", price: "Cotización", img: "img/galeria/chalecoazul-1.webp" },
        { href: "chaleco-gabardina-rojo.html", name: "Chaleco Gabardina Rojo", price: "Cotización", img: "img/galeria/chalecorojo-1.webp" },
        { href: "camiseta-jersey.html", name: "Camiseta Jersey", price: "Desde $6", img: "img/galeria/cjersey-1.webp" },
        { href: "buzo-pique.html", name: "Buzo Polo Piqué", price: "Desde $9", img: "img/galeria/buzopique-1.webp" },
        { href: "uniformes-industriales.html", name: "Uniformes Industriales", price: "Cotización", img: "img/uniforme-completo.webp" }
    ];
    function buildMega() {
        var grid = megaItems.map(function (p) {
            return '<a class="mega__item" href="' + p.href + '">' +
                '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
                '<span class="nm">' + p.name + '</span>' +
                '<span class="pr">' + p.price + '</span>' +
            '</a>';
        }).join("");
        return '<div class="mega" role="menu">' +
            '<div class="mega__grid">' + grid + '</div>' +
            '<div class="mega__foot">' +
                '<a class="lk" href="productos.html">→ Ver todo el catálogo</a>' +
                '<a class="btn btn--wa" href="' + TP.wa(pageMsg) + '" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Cotizar</a>' +
            '</div>' +
        '</div>';
    }

    var navLinks = TP.nav.map(function (n) {
        var active = (n.href === current) ? ' aria-current="page"' : '';
        if (n.href === "productos.html") {
            return '<span class="has-mega"><a href="' + n.href + '"' + active + '>' + n.label + ' ▾</a>' + buildMega() + '</span>';
        }
        return '<a href="' + n.href + '"' + active + '>' + n.label + '</a>';
    }).join("");

    /* Marca: logo real si está configurado; si no, emblema heritage + wordmark */
    function brandHTML(light) {
        var src = light ? c.logoLight : c.logo;
        if (src) {
            return '<a class="brand" href="index.html" aria-label="Textiles Pelileo - Inicio">' +
                '<img class="brand__logo" src="' + src + '" alt="Textiles Pelileo" width="240" height="118"></a>';
        }
        return '<a class="brand" href="index.html" aria-label="Textiles Pelileo - Inicio">' +
            '<span class="brand__emblem"><i class="fas fa-horse-head"></i></span>' +
            '<span><span class="brand__name">TEXTILES PELILEO</span><br>' +
            '<span class="brand__tag">Desde 2010 · Duradero por Naturaleza</span></span></a>';
    }

    var ecBadge = '<span class="ec-badge"><span class="ec-flag"><i class="y"></i><i class="b"></i><i class="r"></i></span> Hecho en Ecuador</span>';

    /* ---------- TOPBAR ---------- */
    var topbar = document.createElement("div");
    topbar.className = "topbar";
    topbar.innerHTML =
        '<div class="container">' +
            '<span class="topbar__tag"><span class="flag">🇪🇨</span> Hecho en Ecuador <span class="sep">·</span> Desde 2010</span>' +
            '<span class="topbar__right">' +
                '<a href="tel:+' + c.phoneIntl + '"><i class="fas fa-phone"></i> ' + c.phoneDisplay + '</a>' +
                '<a class="wa" href="' + TP.wa(pageMsg) + '" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Cotiza ahora</a>' +
            '</span>' +
        '</div>';

    /* ---------- HEADER ---------- */
    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
        '<div class="container nav">' +
            brandHTML(false) +
            '<nav class="nav__links" aria-label="Principal">' + navLinks + '</nav>' +
            '<div class="nav__cta">' +
                '<a class="nav__phone" href="tel:+' + c.phoneIntl + '">📞 ' + c.phoneDisplay + '</a>' +
                '<a class="btn btn--wa" href="' + TP.wa(pageMsg) + '" target="_blank" rel="noopener">Cotizar</a>' +
                '<button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>' +
            '</div>' +
        '</div>';

    /* ---------- MOBILE MENU ---------- */
    var mm = document.createElement("div");
    mm.className = "mobile-menu";
    mm.id = "mobileMenu";
    mm.innerHTML =
        TP.nav.map(function (n) { return '<a href="' + n.href + '">' + n.label + '</a>'; }).join("") +
        '<a class="btn btn--wa btn--block" href="' + TP.wa(pageMsg) + '" target="_blank" rel="noopener">Escríbenos al WhatsApp</a>' +
        '<div class="mobile-menu__contact">📍 ' + c.location + '<br>📞 ' + c.phoneDisplay + '</div>';

    document.body.insertBefore(mm, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);
    document.body.insertBefore(topbar, document.body.firstChild);

    /* ---------- FOOTER ---------- */
    var year = new Date().getFullYear();
    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
        '<div class="container">' +
            '<div class="footer-grid">' +
                '<div class="footer-brand">' +
                    brandHTML(true) +
                    '<p>Fabricamos ropa de trabajo industrial directo del taller en Pelileo desde 2010. Telas Gregori y Mistral de Textiles Vicuña, tallas completas y envíos a todo Ecuador.</p>' +
                    '<div class="mb-2">' + ecBadge + '</div>' +
                    '<div class="footer-social">' +
                        '<a href="' + c.social.facebook + '" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
                        '<a href="' + c.social.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
                        '<a href="' + c.social.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>' +
                    '</div>' +
                '</div>' +
                '<div><h4>Productos</h4><ul>' +
                    '<li><a href="pantalon-premium-gregori.html">Pantalón Premium Gregori 14oz</a></li>' +
                    '<li><a href="pantalon-stretch.html">Pantalón Stretch</a></li>' +
                    '<li><a href="camisa-industrial-mistral.html">Camisa Industrial Mistral</a></li>' +
                    '<li><a href="chaleco-antifluidos-azul.html">Chaleco Antifluidos Azul</a></li>' +
                    '<li><a href="chaleco-gabardina-rojo.html">Chaleco Gabardina Rojo</a></li>' +
                    '<li><a href="camiseta-jersey.html">Camisetas y Buzos Jersey</a></li>' +
                    '<li><a href="uniformes-industriales.html">Uniformes Industriales</a></li>' +
                '</ul></div>' +
                '<div><h4>Empresa</h4><ul>' +
                    '<li><a href="nosotros.html">Sobre Nosotros</a></li>' +
                    '<li><a href="bordados-corporativos.html">Bordados Corporativos</a></li>' +
                    '<li><a href="diseno-logotipo.html">Diseño de Logotipo</a></li>' +
                    '<li><a href="envios.html">Envíos a Ecuador</a></li>' +
                    '<li><a href="contacto.html">Contacto</a></li>' +
                '</ul></div>' +
                '<div><h4>Contacto</h4><ul>' +
                    '<li>📍 ' + c.location + '</li>' +
                    '<li>📞 <a href="tel:+' + c.phoneIntl + '">' + c.phoneDisplay + '</a></li>' +
                    '<li>✉️ <a href="mailto:' + c.email + '">' + c.email + '</a></li>' +
                    '<li>🚚 Envíos Servientrega · todo Ecuador</li>' +
                    '<li><a class="btn btn--wa mt-1" href="' + TP.wa(pageMsg) + '" target="_blank" rel="noopener">Escríbenos al WhatsApp</a></li>' +
                '</ul></div>' +
            '</div>' +
            '<div class="footer-bottom">' +
                '<span>© ' + year + ' Textiles Pelileo · Duradero por Naturaleza · Todos los derechos reservados.</span>' +
                '<span class="made-badge">🇪🇨 Ecuadorian Made. Built to Work.</span>' +
            '</div>' +
        '</div>';

    /* ---------- BANDA DE CONFIANZA (global) ---------- */
    var trust = document.createElement("section");
    trust.className = "trust-band";
    trust.setAttribute("aria-label", "Garantías Textiles Pelileo");
    trust.innerHTML =
        '<div class="container">' +
            '<span class="ti"><i class="fas fa-industry"></i> Directo del taller</span>' +
            '<span class="ti"><i class="fas fa-award"></i> Telas Gregori & Mistral</span>' +
            '<span class="ti"><i class="fas fa-truck-fast"></i> Envíos a todo Ecuador (1–3 días)</span>' +
            '<span class="ti"><i class="fas fa-shield-halved"></i> Envío asegurado</span>' +
            '<span class="ti"><i class="fab fa-whatsapp"></i> Cotización inmediata</span>' +
        '</div>';
    document.body.appendChild(trust);
    document.body.appendChild(footer);

    /* ---------- GANCHO DE URGENCIA en heroes de producto ---------- */
    var pheroActions = document.querySelector(".phero .hero__actions");
    if (pheroActions && !pheroActions.parentNode.querySelector(".urgency")) {
        var urg = document.createElement("p");
        urg.className = "urgency";
        urg.style.margin = "0 0 18px";
        urg.innerHTML = '<i class="fas fa-bolt"></i> Respuesta inmediata por WhatsApp · cotización el mismo día';
        pheroActions.parentNode.insertBefore(urg, pheroActions);
    }

    /* ---------- FLOATING WHATSAPP ---------- */
    var waFloat = document.createElement("a");
    waFloat.className = "wa-float";
    waFloat.href = TP.wa(pageMsg);
    waFloat.target = "_blank";
    waFloat.rel = "noopener";
    waFloat.setAttribute("aria-label", "Contactar por WhatsApp");
    waFloat.innerHTML = '<span class="tip">¡Cotiza ahora!</span>' + waSvg;
    document.body.appendChild(waFloat);

    /* ---------- STICKY MOBILE CTA ---------- */
    var sticky = document.createElement("div");
    sticky.className = "sticky-cta";
    sticky.innerHTML =
        '<a class="btn btn--call" href="tel:+' + c.phoneIntl + '">📞 Llamar</a>' +
        '<a class="btn btn--wa" href="' + TP.wa(pageMsg) + '" target="_blank" rel="noopener">' + waSvg + ' WhatsApp</a>';
    document.body.appendChild(sticky);
})();
