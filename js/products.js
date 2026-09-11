/* ============================================================
   TEXTILES PELILEO — Catálogo de productos (datos)
   Edita aquí para agregar/quitar productos o cambiar precios.
   Las grillas se generan solas en index.html y productos.html.
   img: ruta de la foto (o "" para mostrar placeholder elegante)
   ============================================================ */
window.TP = window.TP || {};

TP.products = [
    {
        slug: "pantalon-premium-gregori.html",
        name: "Pantalón de Trabajo en Jean 14oz",
        cat: "pantalones",
        badge: "Top ventas", badgeClass: "badge--gold",
        img: "img/galeria/p14-1.webp",
        blurb: "Jean industrial Gregori 14oz, 100% algodón de Textiles Vicuña. Triple costura, herrajes inoxidables y color que no destiñe.",
        meta: "Tallas 28–38 en stock · 26–46 bajo pedido",
        price: "Desde $12", priceNote: "docena · $13 desde 3 · $15 por unidad",
        msg: "Hola, me interesa el Pantalón de Trabajo en Jean 14oz (Gregori Premium). ¿Me ayudan con disponibilidad, tallas y precio por mayor?"
    },
    {
        slug: "pantalon-stretch.html",
        name: "Pantalón Stretch",
        cat: "pantalones",
        badge: "Nueva línea", badgeClass: "badge--navy",
        img: "img/galeria/stretch-1.webp",
        blurb: "Tela stretch de alta calidad: mayor comodidad y movilidad sin perder resistencia para uso laboral intensivo.",
        meta: "Tallas 28–36 · extras 38+",
        price: "Desde $12", priceNote: "por mayor · $15 unitario",
        msg: "Hola, me interesa el Pantalón Stretch. ¿Me ayudan con disponibilidad, tallas y precio?"
    },
    {
        slug: "pantalon-gregori-12oz.html",
        name: "Pantalón Gregori 12oz",
        cat: "pantalones",
        badge: "Bajo pedido", badgeClass: "badge--navy",
        img: "img/galeria/p12-1.webp",
        blurb: "La misma calidad Gregori en una versión más ligera (12oz, 100% algodón). Disponible bajo pedido.",
        meta: "Tallas 28–36 · extras 38+",
        price: "Desde $10", priceNote: "por mayor · $14 unitario",
        msg: "Hola, me interesa el Pantalón Gregori 12oz (bajo pedido). ¿Me ayudan con tallas y cantidades?"
    },
    {
        slug: "pantalon-economico-empresarial.html",
        name: "Pantalón Económico Empresarial",
        cat: "pantalones",
        badge: "Para empresas", badgeClass: "badge--navy",
        img: "",
        blurb: "Pensado para dotación de cuadrillas y equipos grandes con presupuesto ajustado. Solo por mayor, bajo pedido.",
        meta: "Solo por volumen · sin venta unitaria",
        price: "Desde $9", priceNote: "por mayor (volumen)",
        msg: "Hola, necesito cotizar Pantalones Económicos Empresariales por volumen. ¿Me ayudan con cantidades y tallas?"
    },
    {
        slug: "camisa-industrial-mistral.html",
        name: "Camisa Industrial Mistral",
        cat: "camisas",
        badge: "Reflectivo AAA", badgeClass: "badge--gold",
        img: "img/galeria/camisa-1.webp",
        blurb: "Tela Mistral 7.5oz 100% algodón sanforizada (no encoge), proceso stone y cinta reflectiva AAA para seguridad.",
        meta: "Tallas XS–XXXL",
        price: "Desde $13", priceNote: "docena · $14 desde 3 · $15 por unidad",
        msg: "Hola, me interesa la Camisa Industrial Mistral con reflectivo. ¿Me ayudan con tallas y precio por mayor?"
    },
    {
        slug: "camiseta-jersey.html",
        name: "Camiseta Tela Jersey",
        cat: "camisetas",
        badge: "Personalizable", badgeClass: "badge--navy",
        img: "img/galeria/cjersey-1.webp",
        blurb: "Camiseta básica de cuello redondo en tela jersey: cómoda, ligera y de colores duraderos. Ideal para uniformar a tu equipo o bordar tu logo.",
        meta: "Tallas 36–42 · varios colores",
        price: "Desde $6", priceNote: "por prenda · +$1 reflectivo",
        msg: "Hola, me interesa la Camiseta de Tela Jersey. ¿Me ayudan con colores, tallas y precio?"
    },
    {
        slug: "buzo-pique.html",
        name: "Buzo Polo Piqué",
        cat: "camisetas",
        badge: "Tela piqué", badgeClass: "badge--gold",
        img: "img/galeria/buzopique-1.webp",
        blurb: "Buzo polo manga larga en tela piqué premium, cuello polo y costuras reforzadas. Varios colores. Perfecto para dotación empresarial y personalización.",
        meta: "Tallas S · M · L · XL",
        price: "Desde $9", priceNote: "por prenda · +$1 reflectivo",
        msg: "Hola, me interesa el Buzo Polo Piqué. ¿Me ayudan con tallas y precio?"
    },
    {
        slug: "camiseta-polo-pique.html",
        name: "Camiseta Polo Piqué",
        cat: "camisetas",
        badge: "Tela piqué", badgeClass: "badge--gold",
        img: "img/galeria/cpique-1.webp",
        blurb: "Camiseta polo manga corta en tela piqué premium, cuello polo clásico y costuras reforzadas. Estilo formal y duradero. Ideal para personalizar.",
        meta: "Tallas S · M · L · XL",
        price: "Desde $8", priceNote: "por prenda · +$1 reflectivo",
        msg: "Hola, me interesa la Camiseta Polo Piqué. ¿Me ayudan con tallas y precio?"
    },
    {
        slug: "buzo-jersey.html",
        name: "Buzo Tela Jersey",
        cat: "camisetas",
        badge: "Personalizable", badgeClass: "badge--navy",
        img: "img/galeria/buzojersey-1.webp",
        blurb: "Buzo manga larga en tela jersey, cómodo y resistente. Base ideal para personalizar con bordado, capucha o cinta reflectiva.",
        meta: "Tallas 36–42",
        price: "Desde $8", priceNote: "por prenda · +$1 capucha o reflectivo",
        msg: "Hola, me interesa el Buzo en tela jersey. ¿Me ayudan con tallas y precio?"
    },
    {
        slug: "buzo-capucha.html",
        name: "Buzo Jersey con Capucha",
        cat: "camisetas",
        badge: "Con capucha", badgeClass: "badge--navy",
        img: "img/galeria/buzocapucha-1.webp",
        blurb: "Buzo manga larga con capucha en tela jersey. Cómodo y resistente, ideal para clima fresco y personalización con bordado.",
        meta: "Tallas 36–42",
        price: "Desde $9", priceNote: "por prenda · +$1 reflectivo",
        msg: "Hola, me interesa el Buzo con Capucha. ¿Me ayudan con tallas y precio?"
    },
    {
        slug: "chaleco-antifluidos-azul.html",
        name: "Chaleco Antifluidos Reflectivo",
        cat: "chalecos",
        badge: "Repele el agua", badgeClass: "badge--gold",
        img: "img/galeria/chalecoazul-1.webp",
        blurb: "Chaleco azul marino en tela antifluidos que repele el agua, con cinta reflectiva amarilla de alta visibilidad. Ideal para personal de exteriores y seguridad.",
        meta: "Tallas S · M · L · XL",
        price: "Desde $14", priceNote: "por mayor · $15 unitario",
        msg: "Hola, me interesa el Chaleco Antifluidos Reflectivo Azul. ¿Me ayudan con tallas y precio?"
    },
    {
        slug: "chaleco-gabardina-rojo.html",
        name: "Chaleco Gabardina Reflectivo Rojo",
        cat: "chalecos",
        badge: "Alta visibilidad", badgeClass: "badge--gold",
        img: "img/galeria/chalecorojo-1.webp",
        blurb: "Chaleco rojo en tela gabardina resistente, con doble cinta reflectiva amarilla. Diseñado para seguridad industrial y trabajos de alta visibilidad.",
        meta: "Tallas S · M · L · XL",
        price: "Desde $14", priceNote: "por mayor · $15 unitario",
        msg: "Hola, me interesa el Chaleco Gabardina Reflectivo Rojo. ¿Me ayudan con tallas y precio?"
    },
    {
        slug: "overol-enterizo-jean-14oz.html",
        name: "Overol de Trabajo Enterizo en Jean 14oz",
        cat: "overoles",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "",
        blurb: "Overol enterizo con cierre frontal, en jean Gregori 14oz o gabardina. Costuras reforzadas, bolsillos de herramienta y opción de cinta reflectiva. Fabricación bajo pedido.",
        meta: "Bajo pedido · tallas S–XXL · jean o gabardina",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, me interesa el Overol de Trabajo Enterizo en jean 14oz. ¿Me ayudan con tallas, plazo de producción y precio por cantidad?"
    },
    {
        slug: "overol-peto-jean-14oz.html",
        name: "Overol Tipo Peto en Jean 14oz",
        cat: "overoles",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "",
        blurb: "Mameluco tipo peto con tirantes regulables y peto con bolsillo porta herramientas, en jean 14oz o gabardina. Se usa sobre camiseta o camisa de trabajo.",
        meta: "Bajo pedido · tallas S–XXL · jean o gabardina",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, me interesa el Overol Tipo Peto en jean 14oz. ¿Me ayudan con tallas, plazo de producción y precio por cantidad?"
    },
    {
        slug: "chompas-de-trabajo.html",
        name: "Chompa de Trabajo en Jean o Gabardina",
        cat: "overoles",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "",
        blurb: "Casaca de trabajo en jean 14oz o gabardina, con opción de cinta reflectiva y espacio para bordado en el pecho. La tercera prenda de toda dotación.",
        meta: "Bajo pedido · tallas S–XXL",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, me interesa la Chompa de Trabajo (jean o gabardina). ¿Me ayudan con tallas, plazo y precio por cantidad?"
    },
    {
        slug: "ropa-de-trabajo-para-mujer.html",
        name: "Ropa de Trabajo para Mujer",
        cat: "mujer",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "",
        blurb: "Pantalón, camisa y chompa con patronaje femenino real: no son tallas de hombre reducidas. Mismas telas y refuerzos de nuestra línea industrial.",
        meta: "Bajo pedido · tallas 4–16 (equivalencia S–XXL)",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, me interesa la línea de Ropa de Trabajo para Mujer con patronaje femenino. ¿Me ayudan con tallas, prendas disponibles y precio?"
    },
    {
        slug: "ropa-de-trabajo-alta-visibilidad.html",
        name: "Línea de Alta Visibilidad",
        cat: "chalecos",
        badge: "Cinta reflectiva", badgeClass: "badge--gold",
        img: "img/galeria/chalecorojo-1.webp",
        blurb: "Chalecos, camisas y prendas con cinta reflectiva de alta visibilidad para trabajo en vía, exteriores, obra y logística nocturna.",
        meta: "Chalecos en stock · resto bajo pedido",
        price: "Desde $14", priceNote: "chalecos · resto según prenda",
        msg: "Hola, me interesa la línea de Ropa de Trabajo de Alta Visibilidad con cinta reflectiva. ¿Me ayudan con opciones y precios?"
    },
    {
        slug: "ropa-antifluido-y-de-limpieza.html",
        name: "Ropa Antifluido y de Limpieza",
        cat: "antifluido",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "img/galeria/chalecoazul-1.webp",
        blurb: "Mandil, filipina y pantalón antifluido en preparación. El chaleco antifluidos con reflectivo sí está disponible y tiene su propia ficha.",
        meta: "Chaleco disponible · resto en preparación",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, me interesa la línea Antifluido y de Limpieza (mandil, filipina, pantalón). ¿Me ayudan con opciones y precios?"
    },
    {
        slug: "kit-de-ropa-de-trabajo.html",
        name: "Kit de Dotación por Trabajador",
        cat: "servicios",
        badge: "Ahorra tiempo", badgeClass: "badge--gold",
        img: "img/uniforme-completo.webp",
        blurb: "Tres niveles de dotación con precio por trabajador y bordado incluido: básico, completo y premium. Cotizas una vez, no prenda por prenda.",
        meta: "Precio por trabajador · bordado incluido",
        price: "Cotización", priceNote: "por trabajador según nivel",
        msg: "Hola, quiero cotizar un Kit de Dotación por trabajador. ¿Me ayudan con los niveles y el precio por persona?"
    },
    {
        slug: "accesorios-y-complementos.html",
        name: "Accesorios y Complementos",
        cat: "servicios",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "img/bordado-primer-plano.webp",
        blurb: "Gorras bordadas, mandiles, cubremangas y complementos para redondear la dotación de tu equipo en un solo pedido.",
        meta: "Bajo pedido · se suman a cualquier kit",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, me interesan los Accesorios y Complementos (gorras, mandiles, cubremangas). ¿Me ayudan con opciones y precios?"
    },
    {
        slug: "calzado-de-seguridad.html",
        name: "Calzado de Seguridad",
        cat: "servicios",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "",
        blurb: "Botas de seguridad con punta de acero o composite a través de proveedor aliado, para cerrar la dotación completa en una sola cotización.",
        meta: "Bajo pedido · con proveedor aliado",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, necesito Calzado de Seguridad junto con la ropa de trabajo. ¿Me ayudan con modelos, tallas y precio?"
    },
    {
        slug: "ropa-ignifuga.html",
        name: "Ropa Ignífuga (consulta técnica)",
        cat: "servicios",
        badge: "Próximamente", badgeClass: "badge--navy",
        img: "",
        blurb: "Confección bajo pedido con tela ignífuga certificada por el fabricante de la tela. Cada proyecto se evalúa antes de comprometer una entrega.",
        meta: "Solo bajo pedido · con ficha técnica del proveedor",
        price: "Próximamente", priceNote: "todavía no está a la venta",
        soon: true,
        msg: "Hola, necesito ropa de trabajo ignífuga. ¿Me ayudan con la asesoría técnica y disponibilidad de tela certificada?"
    },
    {
        slug: "uniformes-industriales.html",
        name: "Uniformes Industriales",
        cat: "servicios",
        badge: "Dotación", badgeClass: "badge--gold",
        img: "img/uniforme-completo.webp",
        blurb: "Conjunto camisa Mistral + pantalón Gregori 14oz con opción de bordado de logotipo. La solución completa para tu empresa.",
        meta: "Todas las tallas · con bordado",
        price: "Cotización", priceNote: "según volumen",
        msg: "Hola, quiero cotizar uniformes industriales para mi empresa. ¿Me ayudan con un presupuesto por volumen?"
    },
    {
        slug: "bordados-corporativos.html",
        name: "Bordados Corporativos",
        cat: "servicios",
        badge: "Personalización", badgeClass: "badge--navy",
        img: "img/bordado-primer-plano.webp",
        blurb: "Bordado de logotipos, nombres y banderas en prendas adquiridas en Textiles Pelileo. Acabado profesional y duradero.",
        meta: "Precio según tamaño y puntadas",
        price: "Desde $2", priceNote: "por prenda",
        msg: "Hola, quiero bordar el logotipo de mi empresa. ¿Me ayudan con el bordado corporativo?"
    },
    {
        slug: "diseno-logotipo.html",
        name: "Diseño de Logotipo",
        cat: "servicios",
        badge: "Servicio", badgeClass: "badge--navy",
        img: "",
        blurb: "Diseñamos tu logotipo en estilo minimalista, moderno o industrial: 1 propuesta + 2 ajustes, listo para bordar.",
        meta: "1 propuesta + 2 ajustes",
        price: "Desde $10", priceNote: "diseño completo",
        msg: "Hola, quiero el servicio de diseño de logotipo para mi marca/empresa. ¿Cómo es el proceso?"
    }
];

TP.cardHTML = function (p, i) {
    // Sin botón de WhatsApp cuando la prenda todavía no se vende (p.soon)
    // ni en las páginas de líneas en preparación (<body data-wa-off>).
    var waOff = p.soon || document.body.hasAttribute("data-wa-off");
    var media = p.img
        ? '<img src="' + p.img + '" alt="' + p.name + ' — Textiles Pelileo" loading="lazy" width="600" height="450">'
        : '<div class="ph-img"><div><div class="ph-mono">TP</div><div class="ph-txt">Foto próximamente</div></div></div>';
    var delay = ["", "d1", "d2"][i % 3];
    return '' +
    '<article class="card reveal ' + delay + '">' +
        '<a class="card__media" href="' + p.slug + '" aria-label="' + p.name + '">' +
            '<span class="badge ' + (p.badgeClass || "") + '">' + p.badge + '</span>' + media +
        '</a>' +
        '<div class="card__body">' +
            '<h3><a href="' + p.slug + '">' + p.name + '</a></h3>' +
            '<div class="card__meta">' + p.meta + '</div>' +
            '<p>' + p.blurb + '</p>' +
            '<div class="card__price">' + p.price + ' <small>' + p.priceNote + '</small></div>' +
            '<div class="card__foot">' +
                (waOff ? '' : '<a class="btn btn--wa btn--block" href="' + TP.wa(p.msg) + '" target="_blank" rel="noopener">Cotizar por WhatsApp</a>') +
                '<a class="btn btn--outline btn--block' + (waOff ? '' : ' mt-1') + '" href="' + p.slug + '">Ver detalles</a>' +
            '</div>' +
        '</div>' +
    '</article>';
};

TP.renderProducts = function (selector, opts) {
    opts = opts || {};
    var host = document.querySelector(selector);
    if (!host) return;
    var list = TP.products.slice();
    if (opts.only) list = list.filter(function (p) { return opts.only.indexOf(p.slug) > -1; });
    if (opts.cat && opts.cat !== "all") list = list.filter(function (p) { return p.cat === opts.cat; });
    if (opts.limit) list = list.slice(0, opts.limit);
    host.innerHTML = list.map(TP.cardHTML).join("");
    // re-observa para animaciones si main.js ya corrió
    if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (en) {
            en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
        }, { threshold: 0.1 });
        host.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
        host.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }
};

/* Filtros en productos.html */
TP.initFilters = function () {
    var btns = document.querySelectorAll("[data-filter]");
    if (!btns.length) return;
    btns.forEach(function (b) {
        b.addEventListener("click", function () {
            btns.forEach(function (x) { x.classList.remove("active"); });
            b.classList.add("active");
            TP.renderProducts("#product-grid", { cat: b.getAttribute("data-filter") });
        });
    });
};
