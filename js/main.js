(function () {
  "use strict";

  const ICONOS = {
    web: "&#127760;",
    desktop: "&#128421;",
    creativo: "&#10024;"
  };

  const ETIQUETAS = {
    web: "Web",
    desktop: "Java Desktop",
    creativo: "Creativo"
  };

  const NOMBRES_METRICA = {
    loc: "líneas",
    tablas: "tablas",
    paginas: "páginas",
    archivos: "archivos"
  };

  const esPendiente = (v) =>
    !v ||
    v.includes("TU_") ||
    v.includes("TU_USUARIO") ||
    v.includes("TU_CORREO");

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
        <div class="card__top">
          <span class="card__icon">${ICONOS[p.categoria] || "&#128187;"}</span>
          <div class="card__flags">
            <span class="chip-cat chip-cat--${p.categoria}">${
      ETIQUETAS[p.categoria] || p.categoria
    }</span>
            <span class="card__year">${p.anio}</span>
          </div>
        </div>
        <h3 class="card__title">${p.titulo}</h3>
        <p class="card__summary">${p.resumen}</p>
        <div class="card__metrics">${metrics}</div>
        <div class="card__tags">${p.stack
          .map((s) => `<span class="tag">${s}</span>`)
          .join("")}</div>
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
      (a, b) => Number(b.destacado) - Number(a.destacado) || b.anio - a.anio
    );
    ordenados.forEach((p) => grid.appendChild(tarjetaProyecto(p)));
  }

  function renderFiltros() {
    const cont = document.getElementById("filters");
    FILTROS.forEach((f, i) => {
      const btn = el(`<button class="filter${
        i === 0 ? " is-active" : ""
      }" type="button" data-f="${f.id}" role="tab" aria-selected="${i === 0}">${
        f.label
      }</button>`);

      btn.addEventListener("click", () => {
        cont
          .querySelectorAll(".filter")
          .forEach((b) => {
            b.classList.remove("is-active");
            b.setAttribute("aria-selected", "false");
          });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");

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
  }

  function renderPerfil() {
    const GH = `https://github.com/${PERFIL.usuario}`;

    const mail = document.getElementById("mailBtn");
    const mailText = document.getElementById("mailText");
    const mailPend = esPendiente(PERFIL.correo);

    mail.href = mailPend ? "#contacto" : `mailto:${PERFIL.correo}`;
    mailText.textContent = mailPend ? "Configura tu correo" : PERFIL.correo;
    if (mailPend) mail.classList.replace("btn--primary", "btn--ghost");

    const gh = document.getElementById("ghBtn");
    const ghText = document.getElementById("ghText");
    gh.href = GH;
    ghText.textContent = "@" + PERFIL.usuario;

    const socials = document.getElementById("socials");
    const items = [
      { k: "Universidad", v: PERFIL.universidad, href: null },
      { k: "GitHub", v: "@" + PERFIL.usuario, href: GH },
      {
        k: "LinkedIn",
        v: PERFIL.linkedin,
        href: PERFIL.linkedin ? (PERFIL.linkedin.startsWith("http") ? PERFIL.linkedin : "https://" + PERFIL.linkedin) : null
      }
    ];
    items.forEach((s) => {
      if (s.href) {
        socials.appendChild(
          el(`<a class="social" href="${s.href}" target="_blank" rel="noopener">${s.v}</a>`)
        );
      } else if (s.v) {
        socials.appendChild(el(`<span class="social">${s.v}</span>`));
      } else {
        socials.appendChild(
          el(
            `<span class="social social--pending" title="Edita PERFIL.linkedin en js/data.js">LinkedIn: pendiente</span>`
          )
        );
      }
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const siblings = Array.from(e.target.parentElement.children).filter(
            (c) => c.classList.contains("reveal")
          );
          const i = siblings.indexOf(e.target);
          e.target.style.transitionDelay = Math.min(i * 70, 420) + "ms";
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((i) => obs.observe(i));
  }

  function initStats() {
    const nums = document.querySelectorAll(".stat__num");
    const suffix = (el_) => el_.dataset.suffix || "";
    const dur = 1600;

    const run = (node) => {
      const target = parseInt(node.dataset.count, 10);
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        node.textContent = val.toLocaleString("es-ES") + suffix(node);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      nums.forEach(run);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          run(e.target);
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((n) => obs.observe(n));
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
  initReveal();
  initStats();
  initNav();
})();
