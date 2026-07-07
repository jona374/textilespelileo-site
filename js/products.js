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
        name: "Pantalón Premium Gregori 14oz",
        cat: "pantalones",
        badge: "Top ventas", badgeClass: "badge--gold",
        img: "img/galeria/p14-1.webp",
        blurb: "Tela Gregori 14oz 100% algodón de Textiles Vicuña. Triple costura, herrajes inoxidables y color que no destiñe.",
        meta: "Tallas 28–38 en stock · 26–46 bajo pedido",
        price: "Desde $12", priceNote: "por mayor · $15 unitario",
        msg: "Hola, me interesa el Pantalón Premium Gregori 14oz. ¿Me ayudan con disponibilidad, tallas y precio por mayor?"
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
        price: "Desde $13", priceNote: "por mayor · $15 unitario",
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
                '<a class="btn btn--wa btn--block" href="' + TP.wa(p.msg) + '" target="_blank" rel="noopener">Cotizar por WhatsApp</a>' +
                '<a class="btn btn--outline btn--block mt-1" href="' + p.slug + '">Ver detalles</a>' +
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
