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

  const precioDesde = (p) => Math.min.apply(null, p.niveles.map((n) => n.precio));

  /* Iconos de producto (trazados estilo heroicons) */
  const ICONOS = {
    matricial:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" d="M7.5 3H5.25A1.25 1.25 0 0 0 4 4.25v15.5C4 20.44 4.56 21 5.25 21H7.5M16.5 3h2.25C19.44 3 20 3.56 20 4.25v15.5c0 .69-.56 1.25-1.25 1.25H16.5"/><path stroke-linecap="round" d="M8.5 8.5h.01M12 8.5h.01M15.5 8.5h.01M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" stroke-width="2.2"/></svg>',
    hormigon:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M6 21V7l6-4 6 4v14M9 21v-5h6v5M9.5 9.5h.01M14.5 9.5h.01M12 12.5h.01"/></svg>',
    dinamica:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M2 12c2-7 4-7 6 0s4 7 6 0 4-7 6 0"/></svg>',
    geotecnia:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8h18M3 13h18M3 18h18M3 4.5h18"/><path stroke-linecap="round" d="M7 6.2v.01M14 6.2v.01M10 10.5v.01M17 10.5v.01M6 15.5v.01M13 15.5v.01"/></svg>',
    hidraulica:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.7s6 6.6 6 10.8a6 6 0 0 1-12 0C6 9.3 12 2.7 12 2.7Z"/></svg>',
    numerico:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" d="M14.5 3.5c-1.2-.9-3-.4-3.4 1.2L8.9 19.3c-.4 1.6-2.2 2.1-3.4 1.2"/><path stroke-linecap="round" d="M15 13.5 19.5 19M19.5 13.5 15 19"/></svg>',
    estructura:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 18h18M5 18V8l7-4 7 4v10M12 4v14M5 12h14M5 8l14 10M19 8 5 18"/></svg>',
    material:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>',
  };

  const iconoDe = (p) => ICONOS[p.icono] || ICONOS.estructura;

  /* Mensaje de compra prellenado para WhatsApp */
  const msgCompra = (p, nivel) => {
    let m =
      "Hola! Quiero comprar *" + p.nombre + "* — plan *" + nivel.nombre +
      "* (" + formatPrecio(nivel.precio) + " " + CONFIG.moneda + ").";
    if (CONFIG.licenciaPorSerie)
      m += " El número de serie de mi TI-Nspire CX CAS es: ____";
    return m + " 🙌";
  };

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

    // bloque de descuento grupal
    const dg = CONFIG.descuentoGrupal;
    const bloque = $("#grupal-bloque");
    if (dg && dg.activo) {
      $("#grupal-texto").textContent = dg.texto;
      $("#grupal-cta").href = waLink(
        "Hola! Somos un grupo del mismo ramo y queremos el mismo programa. ¿Cómo es el precio grupal?"
      );
    } else if (bloque) {
      bloque.style.display = "none";
    }
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

  function nivelMini(n) {
    const precioAntes = n.precioAntes
      ? '<span class="price-before">' + formatPrecio(n.precioAntes) + "</span>"
      : "";
    return (
      '<div class="nivel-mini">' +
      '<div class="nivel-mini-head"><span class="nivel-name">' + n.nombre + "</span>" +
      '<span class="nivel-price">' + precioAntes + formatPrecio(n.precio) + "</span></div>" +
      '<p class="nivel-tag">' + n.tagline + "</p></div>"
    );
  }

  function cardProducto(p) {
    let acciones;
    if (p.estado === "proximamente") {
      acciones =
        '<a class="btn btn-ghost full" target="_blank" rel="noopener" href="' +
        waLink(msgAviso(p)) + '">🔔 Avísame cuando esté listo</a>';
    } else {
      acciones =
        '<button class="btn btn-buy full" data-detalle="' + p.id + '">Ver planes y comprar</button>';
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
      '<div class="niveles-mini">' + p.niveles.map(nivelMini).join("") + "</div>" +
      '<div class="product-bottom">' +
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

  function planCard(p, n) {
    const precioAntes = n.precioAntes
      ? '<span class="price-before">' + formatPrecio(n.precioAntes) + "</span>"
      : "";
    const linkCompra = n.linkPago || waLink(msgCompra(p, n));
    const feats = n.caracteristicas
      .map((f) => "<li>" + f + "</li>")
      .join("");
    return (
      '<div class="plan-card' + (n.tipo === "completo" ? " plan-premium" : "") + '">' +
      '<div class="plan-head"><span class="plan-name">' + n.nombre + "</span>" +
      '<span class="plan-tag">' + n.tagline + "</span></div>" +
      '<div class="plan-price">' + precioAntes +
      '<span class="price">' + formatPrecio(n.precio) + "</span>" +
      '<span class="price-note">' + CONFIG.moneda + " · pago único</span></div>" +
      '<ul class="plan-feats">' + feats + "</ul>" +
      '<a class="btn btn-buy full" target="_blank" rel="noopener" href="' + linkCompra + '">Comprar ' + n.nombre + "</a>" +
      "</div>"
    );
  }

  function abrirModal(id) {
    const p = PRODUCTOS.find((x) => x.id === id);
    if (!p) return;

    const video = p.video
      ? '<div class="modal-video"><div class="video-frame"><iframe src="https://www.youtube.com/embed/' +
        p.video + '" title="Demo de ' + p.nombre +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>'
      : "";

    const aviso = CONFIG.licenciaPorSerie
      ? '<div class="serie-note"><span class="serie-ico">🔒</span><div><strong>Licencia por número de serie.</strong> El programa se activa solo para tu calculadora. Al comprar nos das el número de serie de tu TI-Nspire CX CAS (Ajustes → Estado).</div></div>'
      : "";

    const dg = CONFIG.descuentoGrupal;
    const grupal = dg && dg.activo
      ? '<p class="modal-grupal">👥 ' + dg.texto + "</p>"
      : "";

    $("#modal-body").innerHTML =
      '<div class="modal-head">' +
      '<div class="product-icon">' + iconoDe(p) + "</div>" +
      "<div><h2 id='modal-title'>" + p.nombre + "</h2>" +
      '<div class="modal-tags"><span class="mono-tag accent">' + p.categoria +
      '</span><span class="estado ' + p.estado + '">' + ESTADOS[p.estado] + "</span></div>" +
      "</div></div>" +
      '<p class="modal-desc">' + p.descripcionLarga + "</p>" +
      video +
      aviso +
      '<p class="modal-section-title">// Elige tu plan</p>' +
      '<div class="plan-grid">' + p.niveles.map((n) => planCard(p, n)).join("") + "</div>" +
      grupal +
      '<p class="modal-section-title">// Te sirve para</p>' +
      '<div class="modal-ramos">' +
      p.ramos.map((r) => '<span class="ramo-chip">' + r + "</span>").join("") +
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
