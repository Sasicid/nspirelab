/* ============================================================
   app.js — lógica del sitio. No necesitas editar este archivo:
   todo lo personalizable vive en config.js y productos.js
   ============================================================ */

(function () {
  "use strict";

  /* ---------- helpers ---------- */

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const formatPrecio = (n) =>
    n === 0 ? "Gratis" : "$" + n.toLocaleString("es-CL");

  const waLink = (mensaje) =>
    "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensaje);

  const ESTADOS = {
    disponible: "Disponible",
    beta: "Beta",
    proximamente: "Próximamente",
  };

  /* Iconos de producto (trazados estilo heroicons) */
  const ICONOS = {
    integral:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" d="M14.5 3.5c-1.2-.9-3-.4-3.4 1.2L8.9 19.3c-.4 1.6-2.2 2.1-3.4 1.2"/><path stroke-linecap="round" d="M15 13.5 19.5 19M19.5 13.5 15 19"/></svg>',
    matriz:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" d="M7.5 3H5.25A1.25 1.25 0 0 0 4 4.25v15.5C4 20.44 4.56 21 5.25 21H7.5M16.5 3h2.25C19.44 3 20 3.56 20 4.25v15.5c0 .69-.56 1.25-1.25 1.25H16.5"/><path stroke-linecap="round" d="M8.5 8.5h.01M12 8.5h.01M15.5 8.5h.01M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" stroke-width="2.2"/></svg>',
    edo:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" d="M3 17c3-9 6-9 9 0s6 9 9 0"/><path stroke-linecap="round" d="M3 7h4M5 5v4"/></svg>',
    estructura:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 18h18M5 18V8l7-4 7 4v10M12 4v14M5 12h14M5 8l14 10M19 8 5 18"/></svg>',
    fisica:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg>',
    material:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>',
    suelo:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3 2.25 8.25 12 13.5l9.75-5.25L12 3ZM2.25 12.75 12 18l9.75-5.25M2.25 17.25 12 22.5l9.75-5.25"/></svg>',
    pack:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.31M21 7.5v2.25m0-2.25-2.25 1.31M3 7.5l2.25-1.31M3 7.5l2.25 1.31M3 7.5v2.25m9 3 2.25-1.31M12 12.75l-2.25-1.31M12 12.75V15m0 6.75 2.25-1.31M12 21.75V19.5m0 2.25-2.25-1.31m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/></svg>',
  };

  const iconoDe = (p) => ICONOS[p.icono] || ICONOS.pack;

  /* Mensaje de compra prellenado para WhatsApp */
  const msgCompra = (p) =>
    "Hola! Quiero comprar *" + p.nombre + "* (" + formatPrecio(p.precio) +
    " " + CONFIG.moneda + ") para mi TI-Nspire. ¿Cómo pago? 🙌";

  const msgAviso = (p) =>
    "Hola! Avísame cuando *" + p.nombre + "* esté disponible para la TI-Nspire 👀";

  /* ---------- aplicar configuración ---------- */

  function aplicarConfig() {
    document.title = CONFIG.marca + " — Códigos para TI-Nspire CX CAS";
    $$("[data-config='marca']").forEach((el) => (el.textContent = CONFIG.marca));
    $("#hero-badge").textContent = CONFIG.heroBadge;
    $("#year").textContent = new Date().getFullYear();

    // links de WhatsApp con mensaje prellenado
    $$("[data-whatsapp]").forEach((el) => {
      el.href = waLink(el.dataset.whatsapp);
    });

    // instagram y correo
    const ig = $("#link-instagram");
    if (CONFIG.instagram) ig.href = "https://instagram.com/" + CONFIG.instagram;
    else ig.style.display = "none";
    $("#link-email").href = "mailto:" + CONFIG.email;

    // video destacado en el hero (reemplaza el mockup de calculadora)
    if (CONFIG.videoDestacado) {
      $("#hero-visual").innerHTML =
        '<div class="video-frame"><iframe src="https://www.youtube.com/embed/' +
        CONFIG.videoDestacado +
        '" title="Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    }

    // estadísticas del hero calculadas desde el catálogo
    const visibles = PRODUCTOS.filter((p) => p.estado !== "proximamente");
    $("#stat-programas").textContent = visibles.length;
    const ramos = new Set();
    PRODUCTOS.forEach((p) => p.ramos.forEach((r) => ramos.add(r)));
    $("#stat-ramos").textContent = ramos.size + "+";
  }

  /* ---------- catálogo ---------- */

  let filtroActivo = "Todos";

  function renderFiltros() {
    const cats = ["Todos", ...new Set(PRODUCTOS.map((p) => p.categoria))];
    $("#filters").innerHTML = cats
      .map(
        (c) =>
          '<button class="filter-chip' + (c === filtroActivo ? " active" : "") +
          '" data-cat="' + c + '">' + c + "</button>"
      )
      .join("");
    $$(".filter-chip").forEach((btn) =>
      btn.addEventListener("click", () => {
        filtroActivo = btn.dataset.cat;
        renderFiltros();
        renderProductos();
      })
    );
  }

  function cardProducto(p) {
    const feats = p.caracteristicas.slice(0, 3)
      .map((f) => "<li>" + f + "</li>").join("");
    const masFeats = p.caracteristicas.length > 3
      ? '<li class="more">y ' + (p.caracteristicas.length - 3) + " funciones más…</li>"
      : "";

    const precioAntes = p.precioAntes
      ? '<span class="price-before">' + formatPrecio(p.precioAntes) + "</span>"
      : "";

    let acciones;
    if (p.estado === "proximamente") {
      acciones =
        '<a class="btn btn-ghost full" target="_blank" rel="noopener" href="' +
        waLink(msgAviso(p)) + '">🔔 Avísame cuando esté listo</a>';
    } else {
      const linkCompra = p.linkPago || waLink(msgCompra(p));
      acciones =
        '<button class="btn btn-ghost" data-detalle="' + p.id + '">Ver detalle</button>' +
        '<a class="btn btn-buy" target="_blank" rel="noopener" href="' + linkCompra + '">Comprar</a>';
    }

    return (
      '<article class="card product' + (p.destacado ? " destacado" : "") + '" data-id="' + p.id + '">' +
      '<div class="product-top">' +
      '<div class="product-icon">' + iconoDe(p) + "</div>" +
      '<span class="estado ' + p.estado + '">' + ESTADOS[p.estado] + "</span>" +
      "</div>" +
      '<span class="mono-tag product-cat">' + p.categoria + "</span>" +
      "<h3>" + p.nombre + "</h3>" +
      '<p class="product-desc">' + p.descripcionCorta + "</p>" +
      '<ul class="product-feats">' + feats + masFeats + "</ul>" +
      '<div class="product-bottom">' +
      '<div class="price-row"><span class="price">' + formatPrecio(p.precio) + "</span>" +
      precioAntes +
      '<span class="price-note">' + CONFIG.moneda + " · pago único</span></div>" +
      '<div class="product-actions">' + acciones + "</div>" +
      "</div></article>"
    );
  }

  function renderProductos() {
    const lista = PRODUCTOS.filter(
      (p) => filtroActivo === "Todos" || p.categoria === filtroActivo
    );
    $("#productos-grid").innerHTML = lista.map(cardProducto).join("");
    $$("[data-detalle]").forEach((btn) =>
      btn.addEventListener("click", () => abrirModal(btn.dataset.detalle))
    );
  }

  /* ---------- modal de detalle ---------- */

  function abrirModal(id) {
    const p = PRODUCTOS.find((x) => x.id === id);
    if (!p) return;

    const video = p.video
      ? '<div class="modal-video"><div class="video-frame"><iframe src="https://www.youtube.com/embed/' +
        p.video + '" title="Demo de ' + p.nombre +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>'
      : "";

    const precioAntes = p.precioAntes
      ? '<span class="price-before">' + formatPrecio(p.precioAntes) + "</span>"
      : "";

    const linkCompra = p.linkPago || waLink(msgCompra(p));

    $("#modal-body").innerHTML =
      '<div class="modal-head">' +
      '<div class="product-icon">' + iconoDe(p) + "</div>" +
      "<div><h2 id='modal-title'>" + p.nombre + "</h2>" +
      '<div class="modal-tags"><span class="mono-tag accent">' + p.categoria +
      '</span><span class="estado ' + p.estado + '">' + ESTADOS[p.estado] + "</span></div>" +
      "</div></div>" +
      '<p class="modal-desc">' + p.descripcionLarga + "</p>" +
      video +
      '<p class="modal-section-title">// Qué incluye</p>' +
      '<ul class="modal-feats">' +
      p.caracteristicas.map((f) => "<li>" + f + "</li>").join("") +
      "</ul>" +
      '<p class="modal-section-title">// Te sirve para</p>' +
      '<div class="modal-ramos">' +
      p.ramos.map((r) => '<span class="ramo-chip">' + r + "</span>").join("") +
      "</div>" +
      '<div class="modal-buy">' +
      '<div><div class="price-row"><span class="price">' + formatPrecio(p.precio) + "</span>" +
      precioAntes + "</div>" +
      '<span class="price-note">' + CONFIG.moneda + " · pago único · entrega el mismo día</span></div>" +
      '<a class="btn btn-buy btn-lg" target="_blank" rel="noopener" href="' + linkCompra + '">Comprar ahora</a>' +
      "</div>";

    $("#modal").hidden = false;
    document.body.style.overflow = "hidden";
  }

  function cerrarModal() {
    $("#modal").hidden = true;
    $("#modal-body").innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ---------- FAQ ---------- */

  function renderFaq() {
    $("#faq-list").innerHTML = FAQ.map(
      (item, i) =>
        '<div class="faq-item reveal">' +
        '<button class="faq-q" data-faq="' + i + '" aria-expanded="false">' +
        "<span>" + item.q + '</span><span class="icon">+</span></button>' +
        '<div class="faq-a"><div class="faq-a-inner">' + item.a + "</div></div></div>"
    ).join("");

    $$(".faq-q").forEach((btn) =>
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const abierto = item.classList.contains("open");
        $$(".faq-item.open").forEach((el) => {
          el.classList.remove("open");
          $(".faq-a", el).style.maxHeight = "0";
          $(".faq-q", el).setAttribute("aria-expanded", "false");
        });
        if (!abierto) {
          item.classList.add("open");
          const a = $(".faq-a", item);
          a.style.maxHeight = a.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      })
    );
  }

  /* ---------- efectos ---------- */

  function efectos() {
    // sombra del header al hacer scroll
    const header = $("#header");
    window.addEventListener("scroll", () =>
      header.classList.toggle("scrolled", window.scrollY > 30)
    );

    // animación de entrada
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    $$(".reveal").forEach((el) => obs.observe(el));

    // cerrar modal
    $("#modal-close").addEventListener("click", cerrarModal);
    $("#modal").addEventListener("click", (e) => {
      if (e.target.id === "modal") cerrarModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#modal").hidden) cerrarModal();
    });
  }

  /* ---------- init ---------- */

  aplicarConfig();
  renderFiltros();
  renderProductos();
  renderFaq();
  efectos();
})();
