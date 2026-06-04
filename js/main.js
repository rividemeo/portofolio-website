/* =====================================================================
   PORTFOLIO — BEHAVIOR
   Theme toggle · typing effect · scroll reveal · skill bars · counters
   navbar · mobile menu · render data · contact form · preloader
   ===================================================================== */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const D = window.PORTFOLIO || {};
  const I18N = window.I18N || { en: {}, id: {} };

  /* ------------------------------------------------------------------ */
  /*  Language helpers                                                  */
  /* ------------------------------------------------------------------ */
  let LANG = "en";

  // Resolve a possibly-bilingual value: { en, id } -> string/array for LANG.
  function L(v) {
    if (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "id" in v)) {
      return v[LANG] != null ? v[LANG] : v.en;
    }
    return v;
  }

  // Translate a static UI key.
  function t(key) {
    const dict = I18N[LANG] || I18N.en || {};
    return dict[key] != null ? dict[key] : (I18N.en && I18N.en[key]) != null ? I18N.en[key] : key;
  }

  /* ------------------------------------------------------------------ */
  /*  1. Bind simple data into the DOM                                  */
  /* ------------------------------------------------------------------ */
  function bindData() {
    document.title = `${D.fullName} — Senior QA & Automation Engineer`;

    $$("[data-bind]").forEach((el) => {
      const key = el.getAttribute("data-bind");
      if (D[key] != null) el.textContent = L(D[key]);
    });

    const hrefMap = {
      emailLink: `mailto:${D.email}`,
      whatsappLink: `https://wa.me/${D.whatsappNumber}`,
      linkedin: D.linkedin,
      github: D.github,
    };
    $$("[data-bind-href]").forEach((el) => {
      const key = el.getAttribute("data-bind-href");
      if (hrefMap[key]) el.href = hrefMap[key];
    });

    $("#year").textContent = "2026";
  }

  /* ------------------------------------------------------------------ */
  /*  2. Render skills                                                  */
  /* ------------------------------------------------------------------ */
  function renderSkills() {
    const grid = $("#skillsGrid");
    if (!grid || !D.skills) return;
    grid.innerHTML = D.skills
      .map(
        (cat) => `
      <article class="skill-card reveal">
        <div class="skill-card__head">
          <span class="skill-card__icon">${cat.icon}</span>
          <h3>${L(cat.category)}</h3>
        </div>
        <ul class="skill-tags">
          ${cat.items.map((s) => `<li class="skill-tag">${s}</li>`).join("")}
        </ul>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------ */
  /*  3. Render experience timeline                                     */
  /* ------------------------------------------------------------------ */
  function renderExperience() {
    const tl = $("#timeline");
    if (!tl || !D.experience) return;
    tl.innerHTML = D.experience
      .map(
        (e) => `
      <div class="tl-item reveal">
        <span class="tl-item__period">${e.period}</span>
        <h3 class="tl-item__role">${e.role}</h3>
        <p class="tl-item__company">${e.company}</p>
        <ul class="tl-item__list">
          ${L(e.achievements).map((a) => `<li>${a}</li>`).join("")}
        </ul>
      </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------ */
  /*  4. Render projects                                                */
  /* ------------------------------------------------------------------ */
  function renderProjects() {
    const grid = $("#projectsGrid");
    if (!grid || !D.projects) return;
    grid.innerHTML = D.projects
      .map(
        (p) => `
      <article class="project reveal">
        <div class="project__tags">
          ${(p.tags || []).map((t) => `<span class="project__tag">${t}</span>`).join("")}
        </div>
        <h3 class="project__name">${p.name}</h3>
        <p class="project__tagline">${L(p.tagline) || ""}</p>
        <div class="project__block"><h5>${t("proj.challenge")}</h5><p>${L(p.challenge)}</p></div>
        <div class="project__block"><h5>${t("proj.solution")}</h5><p>${L(p.solution)}</p></div>
        <div class="project__block"><h5>${t("proj.result")}</h5><p>${L(p.result)}</p></div>
        <div class="project__stack">
          ${p.stack.map((s) => `<span>${s}</span>`).join("")}
        </div>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------ */
  /*  5. Render services                                                */
  /* ------------------------------------------------------------------ */
  function renderServices() {
    const grid = $("#servicesGrid");
    if (!grid || !D.services) return;
    grid.innerHTML = D.services
      .map(
        (s) => `
      <article class="service reveal ${s.featured ? "service--featured" : ""}">
        ${s.featured ? `<span class="service__flag">${t("serv.popular")}</span>` : ""}
        <h3 class="service__title">${L(s.title)}</h3>
        <p class="service__price">${L(s.price)}</p>
        <p class="service__desc">${L(s.desc)}</p>
        <ul class="service__features">
          ${L(s.features).map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <a href="#contact" class="btn ${s.featured ? "btn--primary" : "btn--ghost"} btn--block">${t("serv.cta")}</a>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------ */
  /*  5b. Render private IT tutoring                                    */
  /* ------------------------------------------------------------------ */
  function renderTutoring() {
    const tut = D.tutoring;
    if (!tut) return;

    const tagline = $("#tutoringTagline");
    if (tagline) tagline.textContent = L(tut.tagline) || "";

    const topics = $("#tutoringTopics");
    if (topics) {
      topics.innerHTML = (L(tut.topics) || [])
        .map((x) => `<li>${x}</li>`)
        .join("");
    }

    const info = $("#tutoringInfo");
    if (info) {
      info.innerHTML = (L(tut.info) || [])
        .map((x) => `<li>${x}</li>`)
        .join("");
    }

    const pkgs = $("#tutoringPackages");
    if (pkgs) {
      pkgs.innerHTML = (tut.packages || [])
        .map(
          (p) => `
        <article class="tutor-pkg reveal ${p.featured ? "tutor-pkg--featured" : ""}">
          ${p.featured ? `<span class="service__flag">${t("tut.best")}</span>` : ""}
          <h4 class="tutor-pkg__sessions">${L(p.sessions)}</h4>
          <p class="tutor-pkg__price">${p.price}</p>
          <p class="tutor-pkg__duration">${L(p.duration)}</p>
        </article>`
        )
        .join("");
    }

    const cur = $("#curriculum");
    if (cur) {
      cur.innerHTML = (tut.curriculum || [])
        .map(
          (lvl) => `
        <div class="cur-level">
          <h4 class="cur-level__title">
            <span class="cur-level__badge">${lvl.level}</span>
            ${lvl.levelNote ? `<span class="cur-level__note">${L(lvl.levelNote)}</span>` : ""}
          </h4>
          <div class="cur-modules">
            ${lvl.modules
              .map(
                (m) => `
              <article class="cur-module reveal">
                <div class="cur-module__head">
                  <h5 class="cur-module__name">${L(m.name)}</h5>
                  <span class="cur-module__sessions">${m.sessions} ${t("tut.sessionsWord")}</span>
                </div>
                <ul class="cur-module__topics">
                  ${L(m.topics)
                    .map(
                      (top) =>
                        `<li class="${/^mini project/i.test(top) ? "is-project" : ""}">${top}</li>`
                    )
                    .join("")}
                </ul>
              </article>`
              )
              .join("")}
          </div>
        </div>`
        )
        .join("");
    }
  }

  /* ------------------------------------------------------------------ */
  /*  6. Render footer social                                           */
  /* ------------------------------------------------------------------ */
  function renderSocial() {
    const wrap = $("#footerSocial");
    if (!wrap) return;
    const links = [
      { label: "in", href: D.linkedin, title: "LinkedIn" },
      { label: "⌨", href: D.github, title: "GitHub" },
      { label: "✉", href: `mailto:${D.email}`, title: "Email" },
      { label: "💬", href: `https://wa.me/${D.whatsappNumber}`, title: "WhatsApp" },
    ];
    wrap.innerHTML = links
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener" title="${l.title}" aria-label="${l.title}">${l.label}</a>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------ */
  /*  7. Theme toggle (persisted)                                       */
  /* ------------------------------------------------------------------ */
  // localStorage can throw (file://, private mode, blocked storage) — guard it.
  const safeStore = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* ignore */ } },
  };

  function initTheme() {
    const root = document.documentElement;
    const saved = safeStore.get("theme");
    let prefersDark = false;
    try { prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; } catch (e) {}
    root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

    $("#themeToggle")?.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      safeStore.set("theme", next);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  7b. Language (EN / ID), persisted                                 */
  /* ------------------------------------------------------------------ */
  function applyI18n() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n"));
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
      else el.textContent = val;
    });
    $$("[data-i18n-ph]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
  }

  function updateLangToggle() {
    $$(".lang-toggle__opt").forEach((o) =>
      o.classList.toggle("is-active", o.dataset.lang === LANG)
    );
  }

  function renderDynamic() {
    run("bindData", bindData);
    run("renderSkills", renderSkills);
    run("renderExperience", renderExperience);
    run("renderProjects", renderProjects);
    run("renderServices", renderServices);
    run("renderTutoring", renderTutoring);
  }

  function setLang(lang) {
    LANG = lang === "id" ? "id" : "en";
    safeStore.set("lang", LANG);
    applyI18n();
    updateLangToggle();
    renderDynamic();
    $$(".reveal").forEach(reveal); // show freshly re-rendered nodes immediately
    run("initTyping", initTyping); // picks up translated roles
  }

  function initLang() {
    const saved = safeStore.get("lang");
    LANG = saved === "id" ? "id" : "en";
    applyI18n();
    updateLangToggle();
    $("#langToggle")?.addEventListener("click", () =>
      setLang(LANG === "en" ? "id" : "en")
    );
  }

  /* ------------------------------------------------------------------ */
  /*  8. Typing effect for roles                                        */
  /* ------------------------------------------------------------------ */
  let typingStarted = false;
  function initTyping() {
    const el = $("#typed");
    const roles = () => L(D.roles) || [];
    if (!el || !roles().length) return;

    let reduced = false;
    try { reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    if (reduced) {
      el.textContent = roles()[0];
      return;
    }

    // Only run one loop; it reads roles() each tick so a language switch
    // is picked up at the next word boundary.
    if (typingStarted) return;
    typingStarted = true;

    let i = 0, char = 0, deleting = false;
    function tick() {
      const list = roles();
      const word = list[i % list.length] || "";
      el.textContent = word.slice(0, char);
      if (!deleting && char < word.length) {
        char++;
      } else if (deleting && char > 0) {
        char--;
      } else if (!deleting && char === word.length) {
        deleting = true;
        return setTimeout(tick, 1600);
      } else {
        deleting = false;
        i = (i + 1) % list.length;
      }
      setTimeout(tick, deleting ? 45 : 95);
    }
    tick();
  }

  /* ------------------------------------------------------------------ */
  /*  9. Scroll reveal + skill bars + counters via IntersectionObserver */
  /* ------------------------------------------------------------------ */
  function reveal(el) {
    el.classList.add("is-visible");
    $$(".skill__fill", el).forEach((fill) => {
      fill.style.width = fill.dataset.level + "%";
    });
  }

  function initReveal() {
    const items = $$(".reveal");

    // Fallback: if IntersectionObserver is unavailable, just show everything.
    if (!("IntersectionObserver" in window)) {
      items.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));

    // Safety net: nothing should stay invisible. Reveal any leftovers.
    setTimeout(() => {
      $$(".reveal:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) reveal(el);
      });
    }, 1800);
  }

  function initCounters() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = +el.dataset.count;
          const dur = 1400;
          const start = performance.now();
          function step(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    $$("[data-count]").forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* 10. Navbar: scroll state, active link, scroll progress, to-top     */
  /* ------------------------------------------------------------------ */
  function initNavbar() {
    const nav = $("#navbar");
    const progress = $("#scrollProgress");
    const toTop = $("#toTop");
    const sections = $$("main section[id]");
    const links = $$(".nav__link");

    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 20);
      toTop.classList.toggle("is-visible", y > 500);

      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

      // active section
      let current = "";
      sections.forEach((sec) => {
        if (y >= sec.offsetTop - 120) current = sec.id;
      });
      links.forEach((l) =>
        l.classList.toggle("is-active", l.getAttribute("href") === "#" + current)
      );
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ------------------------------------------------------------------ */
  /* 11. Mobile menu                                                    */
  /* ------------------------------------------------------------------ */
  function initMenu() {
    const burger = $("#navBurger");
    const links = $("#navLinks");
    if (!burger || !links) return;
    const close = () => {
      burger.classList.remove("is-open");
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    $$(".nav__link", links).forEach((l) => l.addEventListener("click", close));
  }

  /* ------------------------------------------------------------------ */
  /* 12. Contact form (client-side validation + graceful submit)        */
  /* ------------------------------------------------------------------ */
  function initForm() {
    const form = $("#contactForm");
    if (!form) return;
    const status = $("#formStatus");
    const submitBtn = $("#submitBtn");

    const setError = (name, msg) => {
      const field = form.querySelector(`[name="${name}"]`)?.closest(".field");
      const err = form.querySelector(`[data-error="${name}"]`);
      if (field) field.classList.toggle("is-invalid", !!msg);
      if (err) err.textContent = msg || "";
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      let ok = true;

      if (!data.name?.trim()) { setError("name", t("contact.errName")); ok = false; }
      else setError("name", "");

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) { setError("email", t("contact.errEmail")); ok = false; }
      else setError("email", "");

      if (!data.message?.trim() || data.message.trim().length < 10) { setError("message", t("contact.errMsg")); ok = false; }
      else setError("message", "");

      if (!ok) return;

      // No backend on a static site: open the user's email client pre-filled.
      // To use a real backend, swap this for a fetch() to Formspree/EmailJS/etc.
      submitBtn.disabled = true;
      submitBtn.textContent = t("contact.opening");
      const subject = encodeURIComponent(data.subject || `Portfolio inquiry from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;

      status.textContent = t("contact.success");
      status.className = "contact__note is-success";
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = t("contact.send");
        form.reset();
      }, 1200);
    });

    // clear error as the user types
    $$("input, textarea", form).forEach((input) =>
      input.addEventListener("input", () => setError(input.name, ""))
    );
  }

  /* ------------------------------------------------------------------ */
  /* 13. Preloader                                                      */
  /* ------------------------------------------------------------------ */
  function initPreloader() {
    const pre = $("#preloader");
    if (!pre) return;
    window.addEventListener("load", () =>
      setTimeout(() => pre.classList.add("is-done"), 500)
    );
    // safety: never let it linger
    setTimeout(() => pre.classList.add("is-done"), 3000);
  }

  /* ------------------------------------------------------------------ */
  /*  Init                                                              */
  /* ------------------------------------------------------------------ */
  // Run each step in isolation so one failure can never break the rest.
  function run(label, fn) {
    try { fn(); } catch (e) { console.error("[portfolio] " + label + " failed:", e); }
  }

  function init() {
    run("initLang", initLang);
    run("bindData", bindData);
    run("renderSkills", renderSkills);
    run("renderExperience", renderExperience);
    run("renderProjects", renderProjects);
    run("renderServices", renderServices);
    run("renderTutoring", renderTutoring);
    run("renderSocial", renderSocial);
    run("initTheme", initTheme);
    run("initTyping", initTyping);
    run("initReveal", initReveal);
    run("initCounters", initCounters);
    run("initNavbar", initNavbar);
    run("initMenu", initMenu);
    run("initForm", initForm);
    run("initPreloader", initPreloader);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
