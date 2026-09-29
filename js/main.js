(function () {
  "use strict";

  const ETIQUETAS = {
    web: "Web",
    desktop: "Java Desktop",
    cps: "Ciberfísico",
    iot: "IoT / Drones"
  };

  const NOMBRES_METRICA = {
    loc: "líneas",
    tablas: "tablas",
    paginas: "páginas",
    componentes: "componentes",
    diagramas: "diagramas"
  };

  const esPendiente = (v) => !v || v.includes("TU_");

  const el = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  function tarjetaProyecto(p) {
    const metrics = Object.entries(p.metricas || {})
      .map(
        ([k, v]) =>
          `<span class="metric"><span class="metric__v">${v}</span><span class="metric__k">${
            NOMBRES_METRICA[k] || k
          }</span></span>`
      )
      .join("");

    const highlights = (p.highlights || [])
      .map((h) => `<li>${h}</li>`)
      .join("");

    const repo = p.repo
      ? `<a class="card__repo" href="https://github.com/${PERFIL.usuario}/${p.repo}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
          Ver código en GitHub
          <span class="card__repo-name">${p.repo}</span>
        </a>`
      : "";

    const card = el(`
      <article class="card" data-cat="${p.categoria}">
        <div class="card__meta">
          <span class="chip-cat chip-cat--${p.categoria}">${ETIQUETAS[p.categoria] || p.categoria}</span>
          <span class="card__year">${p.anio || ""}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.titulo}</h3>
          <p class="card__summary">${p.resumen}</p>
          <div class="card__metrics">${metrics}</div>
          <div class="card__tags">${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
          <div class="card__detail">
            <div class="card__detail-inner">
              <p class="card__desc">${p.descripcion}</p>
              <ul class="card__hl">${highlights}</ul>
              ${repo}
            </div>
          </div>
          <button class="card__toggle" type="button" aria-expanded="false">
            <span>Ver detalle</span>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </article>
    `);

    const btn = card.querySelector(".card__toggle");
    btn.addEventListener("click", () => {
      const abierto = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(abierto));
      btn.querySelector("span").textContent = abierto ? "Ocultar" : "Ver detalle";
    });

    return card;
  }

  function renderProyectos() {
    const grid = document.getElementById("projectGrid");
    const ordenados = [...PROYECTOS].sort(
      (a, b) => Number(Boolean(b.destacado)) - Number(Boolean(a.destacado))
    );
    ordenados.forEach((p) => grid.appendChild(tarjetaProyecto(p)));
  }

  function renderFiltros() {
    const cont = document.getElementById("filters");
    FILTROS.forEach((f, i) => {
      const btn = el(`<button class="filter${
        i === 0 ? " is-active" : ""
      }" type="button" data-f="${f.id}" aria-pressed="${i === 0}">${
        f.label
      }</button>`);

      btn.addEventListener("click", () => {
        cont
          .querySelectorAll(".filter")
          .forEach((b) => {
            b.classList.remove("is-active");
            b.setAttribute("aria-pressed", "false");
          });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");

        document.querySelectorAll(".card").forEach((card) => {
          const visible = f.id === "todos" || card.dataset.cat === f.id;
          card.classList.toggle("is-hidden", !visible);
          if (!visible) {
            card.classList.remove("is-open");
            const b = card.querySelector(".card__toggle");
            b.setAttribute("aria-expanded", "false");
            b.querySelector("span").textContent = "Ver detalle";
          }
        });
      });

      cont.appendChild(btn);
    });
  }

  function renderStack() {
    const cont = document.getElementById("stackGrid");
    STACK.forEach((g) => {
      cont.appendChild(
        el(`
        <div class="stack__group">
          <h3 class="stack__title">${g.grupo}</h3>
          <div class="stack__list">${g.items
            .map((i) => `<span class="stack__item">${i}</span>`)
            .join("")}</div>
        </div>
      `)
      );
    });
  }  function renderPerfil() {
    const GH = `https://github.com/${PERFIL.usuario}`;

    document.getElementById("navName").textContent = PERFIL.nombreCorto;
    document.getElementById("footName").textContent = PERFIL.nombre;

    const mail = document.getElementById("mailBtn");
    const mailText = document.getElementById("mailText");
    const mailPend = esPendiente(PERFIL.correo);

    mail.href = mailPend ? "#contacto" : `mailto:${PERFIL.correo}`;
    mailText.textContent = mailPend ? "Configura tu correo" : PERFIL.correo;
    if (mailPend) mail.classList.replace("btn--primary", "btn--ghost");

    const tel = PERFIL.telefono
      ? PERFIL.telefono.replace(/[^0-9+]/g, "")
      : "";
    const phone = document.getElementById("phoneBtn");
    const phoneText = document.getElementById("phoneText");
    if (tel) {
      phone.href = "tel:" + tel;
      phoneText.textContent = PERFIL.telefono;
    } else {
      phone.remove();
    }

    const gh = document.getElementById("ghBtn");
    const ghText = document.getElementById("ghText");
    gh.href = GH;
    ghText.textContent = "@" + PERFIL.usuario;

    const socials = document.getElementById("socials");
    const items = [
      { k: "Universidad", v: PERFIL.universidad },
      { k: "Carrera", v: PERFIL.carrera },
      { k: "Ubicación", v: PERFIL.ubicacion }
    ];
    if (tel) {
      items.push({ k: "Teléfono", v: PERFIL.telefono, href: "tel:" + tel });
    }
    if (!mailPend) {
      items.push({ k: "Correo", v: PERFIL.correo, href: "mailto:" + PERFIL.correo });
    }
    items.push({ k: "GitHub", v: "@" + PERFIL.usuario, href: GH });
    if (PERFIL.linkedin) {
      items.push({
        k: "LinkedIn",
        v: PERFIL.linkedin,
        href: PERFIL.linkedin.startsWith("http")
          ? PERFIL.linkedin
          : "https://" + PERFIL.linkedin
      });
    }
    items.forEach((s) => {
      socials.appendChild(
        el(`
        <div class="info">
          <span class="info__k">${s.k}</span>
          ${
            s.href
              ? `<a class="info__v" href="${s.href}"${/^https?:/.test(s.href) ? ' target="_blank" rel="noopener"' : ""}>${s.v}</a>`
              : `<span class="info__v">${s.v}</span>`
          }
        </div>`)
      );
    });
  }

  function initNav() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
      const abierto = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(abierto));
      toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    const sections = Array.from(
      document.querySelectorAll("main section[id]")
    );
    const navLinks = Array.from(document.querySelectorAll(".nav__link"));
    if (!("IntersectionObserver" in window)) {
      navLinks.forEach((l) =>
        l.classList.toggle("is-active", l.getAttribute("href") === "#inicio")
      );
      return;
    }
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          navLinks.forEach((l) => {
            l.classList.toggle(
              "is-active",
              l.getAttribute("href") === "#" + e.target.id
            );
          });
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  renderProyectos();
  renderFiltros();
  renderStack();
  renderPerfil();
  initNav();
})();
