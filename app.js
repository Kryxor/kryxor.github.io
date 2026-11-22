/* ===== KRYXOR — app.js (Vanilla JS) ===== */
(function () {
  "use strict";

  /* ---------- PRZEŁOŻENIA ---------- */
  const translations = {
    pl: {
      "meta.title": "KRYXOR — Własna AI. Na własnych zasadach.",
      "meta.desc":
        "KRYXOR wdraża lokalną sztuczną inteligencję na Twoim komputerze. Dobór sprzętu, instalacja modeli i konfiguracja środowiska — lokalnie, zgodnie z Twoimi potrzebami.",
      "a11y.skip": "Przejdź do treści",
      "lang.aria": "Zmiana języka",
      "menu.aria": "Otwórz menu",
      "menu.ariaOpen": "Zamknij menu",

      "nav.start": "Start",
      "nav.about": "O nas",
      "nav.services": "Usługi",
      "nav.hardware": "Sprzęt",
      "nav.process": "Proces",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",

      "hero.badge": "Lokalna AI dla firm i osób prywatnych",
      "hero.slogan": "Własna AI. Na własnych zasadach.",
      "hero.desc":
        "Wdrażamy lokalną sztuczną inteligencję na Twoim komputerze. Dobieramy sprzęt, instalujemy modele i konfigurujemy środowisko, aby AI działała lokalnie — zgodnie z Twoimi potrzebami.",
      "hero.btn.services": "Poznaj nasze usługi",
      "hero.btn.contact": "Skontaktuj się",

      "about.eyebrow": "O KRYXOR",
      "about.title": "Sztuczna inteligencja. Lokalnie.",
      "about.p1":
        "Pomagamy uruchomić modele sztucznej inteligencji na własnym sprzęcie. Od przygotowania komputera i doboru konfiguracji, po instalację, optymalizację i dopasowanie środowiska do codziennej pracy.",
      "about.p2":
        "Lokalne rozwiązania AI dają większą kontrolę nad środowiskiem, umożliwiają pracę bez konieczności przesyłania każdej interakcji do zewnętrznych usług i pozwalają dobrać rozwiązanie do konkretnych zastosowań.",

      "services.eyebrow": "Co robimy",
      "services.title": "Usługi",
      "services.subtitle": "Kompleksowe wsparcie na każdym etapie wdrożenia lokalnej AI.",
      "service.1.title": "Wdrożenie w pracowni KRYXOR",
      "service.1.desc":
        "Dostarcz swój komputer, a przygotujemy go do pracy z lokalną sztuczną inteligencją. Instalujemy modele, konfigurujemy środowisko i dopasowujemy ustawienia do możliwości sprzętu.",
      "service.1.note": "Wybrane wdrożenia mogą zająć około dwóch godzin, zależnie od sprzętu i zakresu prac.",
      "service.2.title": "Odbiór i dostawa sprzętu",
      "service.2.desc":
        "Możliwość uzgodnienia odbioru komputera, przeprowadzenia wdrożenia i przekazania przygotowanego sprzętu.",
      "service.3.title": "Wdrożenie u klienta",
      "service.3.desc":
        "Instalacja i konfiguracja lokalnych rozwiązań AI w domu lub w firmie. Przygotowujemy środowisko do pracy i pomagamy w jego uruchomieniu.",
      "service.4.title": "Kompletna stacja robocza AI",
      "service.4.desc":
        "Pomagamy dobrać komputer Apple Mac lub konfigurację PC z kartą graficzną NVIDIA. Dobór sprzętu zależy od modeli AI, zastosowania, oczekiwanej wydajności i budżetu.",
      "service.4.note": "Usługa obejmuje doradztwo, przygotowanie konfiguracji oraz możliwość konfiguracji środowiska.",
      "service.5.title": "KRYXOR Care",
      "service.5.desc": "Opcjonalna opieka nad lokalnym środowiskiem AI.",
      "service.5.note":
        "Pomoc techniczna, aktualizacje, diagnostyka, optymalizacja, konfiguracja i wsparcie w rozwijaniu środowiska.",

      "hardware.eyebrow": "Sprzęt",
      "hardware.title": "AI dopasowana do Twojego sprzętu.",
      "hardware.subtitle":
        "Dobór rozwiązania zależy od modelu AI, pamięci, możliwości sprzętowych, zastosowania oraz budżetu.",
      "hardware.mac.title": "Apple Mac",
      "hardware.mac.desc":
        "Optymalne dla specyficznych zastosowań i modeli AI. Dobór modelu zależy od zapotrzebowania i budżetu.",
      "hardware.pc.title": "PC / NVIDIA",
      "hardware.pc.desc":
        "Rozwiązanie oparte na karcie graficznej NVIDIA. Dobór konfiguracji zależy od modeli AI, oczekiwanej wydajności i budżetu.",

      "process.eyebrow": "Proces",
      "process.title": "Jak wygląda wdrożenie",
      "process.1.title": "Rozmowa",
      "process.1.desc": "Poznajemy potrzeby, zastosowania i oczekiwania.",
      "process.2.title": "Dobór rozwiązania",
      "process.2.desc": "Dopasowujemy sprzęt, modele AI i środowisko do indywidualnych potrzeb.",
      "process.3.title": "Instalacja i konfiguracja",
      "process.3.desc": "Instalujemy modele, przygotowujemy środowisko i optymalizujemy konfigurację.",
      "process.4.title": "Uruchomienie i wsparcie",
      "process.4.desc": "Przekazujemy gotowe rozwiązanie i pomagamy w jego dalszym użytkowaniu.",

      "faq.eyebrow": "FAQ",
      "faq.title": "Najczęściej zadawane pytania",
      "faq.q1": "Czym jest lokalna sztuczna inteligencja?",
      "faq.a1":
        "Lokalna sztuczna inteligencja to modele AI uruchamiane bezpośrednio na Twoim komputerze zamiast w zewnętrznej chmurze. Dzięki temu masz większą kontrolę nad środowiskiem i nie musisz przesyłać każdej interakcji do zewnętrznych usług.",
      "faq.q2": "Czy mogę uruchomić AI na swoim obecnym komputerze?",
      "faq.a2":
        "W wielu przypadkach tak. Możliwość zależy od modelu AI, dostępnej pamięci i mocy sprzętowej. Po rozmowie ocenimy, czy Twój obecny sprzęt wystarczy, czy potrzebne będą modyfikacje.",
      "faq.q3": "Czy potrzebuję komputera Apple Mac, czy PC z NVIDIA?",
      "faq.a3":
        "Nie ma jednej odpowiedzi. Obie platformy są obsługiwane. Wybór zależy od zastosowania, modeli AI i budżetu. Pomożemy dobrać rozwiązanie do Twoich potrzeb.",
      "faq.q4": "Czy modele AI działają bez internetu?",
      "faq.a4":
        "Sami modele po pobraniu i instalacji zwykle działają lokalnie, bez potrzeby wysyłania danych do zewnętrznych usług. Niektóre modele i etapy konfiguracji mogą jednak wymagać połączenia — zależy to od konkretnego rozwiązania.",
      "faq.q5": "Czy lokalna AI jest odpowiednia dla firmy?",
      "faq.a5":
        "Tak, lokalne rozwiązania AI są często wybierane przez firmy, które chcą większej kontroli nad środowiskiem pracy. Po rozmowie ocenimy, które zastosowania będą odpowiednie dla Twojej organizacji.",
      "faq.q6": "Ile trwa instalacja i konfiguracja?",
      "faq.a6":
        "Zależy od sprzętu i zakresu prac. Wybrane wdrożenia mogą zająć około dwóch godzin. Dokładny czas ustalamy indywidualnie.",
      "faq.q7": "Czy oferujecie pomoc po wdrożeniu?",
      "faq.a7":
        "Tak. Opcjonalna usługa KRYXOR Care obejmuje pomoc techniczną, aktualizacje, diagnostykę, optymalizację i wsparcie w rozwijaniu środowiska.",
      "faq.q8": "Jak wygląda wycena?",
      "faq.a8":
        "Wycenę przygotowujemy indywidualnie po rozmowie. Zależy od zakresu usług, doboru sprzętu oraz wybranego wariantu wdrożenia.",

      "contact.eyebrow": "Kontakt",
      "contact.title": "Zacznij od rozmowy.",
      "contact.desc":
        "Opowiedz nam, do czego chcesz wykorzystać lokalną AI. Pomożemy dobrać rozwiązanie i przygotować środowisko dopasowane do Twoich potrzeb.",
      "contact.btn.write": "Napisz wiadomość",
      "contact.btn.copy": "Kopiuj adres e-mail",
      "contact.copy.success": "Adres skopiowany do schowka.",
      "contact.copy.error": "Nie udało się skopiować. Skopiuj adres ręcznie.",

      "footer.slogan": "Własna AI. Na własnych zasadach.",
      "footer.region":
        "Województwo zachodniopomorskie. Realizacje w innych regionach Polski po indywidualnym uzgodnieniu.",
      "footer.email": "E-mail",
      "footer.rights": "© 2026 KRYXOR. Wszelkie prawa zastrzeżone."
    },

    en: {
      "meta.title": "KRYXOR — Your own AI. On your own terms.",
      "meta.desc":
        "KRYXOR deploys artificial intelligence locally on your computer. Hardware selection, model installation and environment configuration — locally, according to your needs.",
      "a11y.skip": "Skip to content",
      "lang.aria": "Change language",
      "menu.aria": "Open menu",
      "menu.ariaOpen": "Close menu",

      "nav.start": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.hardware": "Hardware",
      "nav.process": "Process",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "hero.badge": "Local AI for businesses and individuals",
      "hero.slogan": "Your own AI. On your own terms.",
      "hero.desc":
        "We deploy artificial intelligence locally on your computer. We select hardware, install models and configure the environment so that AI works locally — according to your needs.",
      "hero.btn.services": "Explore our services",
      "hero.btn.contact": "Get in touch",

      "about.eyebrow": "About KRYXOR",
      "about.title": "Artificial intelligence. Locally.",
      "about.p1":
        "We help you run artificial intelligence models on your own hardware. From preparing the computer and selecting the configuration to installation, optimization and adapting the environment to daily work.",
      "about.p2":
        "Local AI solutions provide greater control over the environment, allow work without the need to send every interaction to external services, and let you choose a solution tailored to specific use cases.",

      "services.eyebrow": "What we do",
      "services.title": "Services",
      "services.subtitle": "Comprehensive support at every stage of local AI deployment.",
      "service.1.title": "Deployment at the KRYXOR workshop",
      "service.1.desc":
        "Bring your computer, and we'll prepare it to work with local artificial intelligence. We install models, configure the environment and adjust settings to your hardware's capabilities.",
      "service.1.note": "Some deployments may take around two hours, depending on the hardware and scope of work.",
      "service.2.title": "Pickup and delivery of hardware",
      "service.2.desc":
        "The option to arrange pickup of the computer, carry out the deployment and hand over the prepared equipment.",
      "service.3.title": "Deployment at the client's site",
      "service.3.desc":
        "Installation and configuration of local AI solutions at home or in a company. We prepare the environment for work and help you start it up.",
      "service.4.title": "Complete AI workstation",
      "service.4.desc":
        "We help you choose an Apple Mac or a PC configuration with an NVIDIA graphics card. Hardware selection depends on the AI models, use case, expected performance and budget.",
      "service.4.note": "The service includes consulting, configuration preparation and the option of environment configuration.",
      "service.5.title": "KRYXOR Care",
      "service.5.desc": "Optional care for your local AI environment.",
      "service.5.note":
        "Technical support, updates, diagnostics, optimization, configuration and support in developing the environment.",

      "hardware.eyebrow": "Hardware",
      "hardware.title": "AI tailored to your hardware.",
      "hardware.subtitle":
        "The choice of solution depends on the AI model, memory, hardware capabilities, use case and budget.",
      "hardware.mac.title": "Apple Mac",
      "hardware.mac.desc":
        "Optimal for specific use cases and AI models. The model choice depends on demand and budget.",
      "hardware.pc.title": "PC / NVIDIA",
      "hardware.pc.desc":
        "A solution based on an NVIDIA graphics card. Configuration depends on the AI models, expected performance and budget.",

      "process.eyebrow": "Process",
      "process.title": "How a deployment works",
      "process.1.title": "Conversation",
      "process.1.desc": "We learn about your needs, use cases and expectations.",
      "process.2.title": "Choosing a solution",
      "process.2.desc": "We match the hardware, AI models and environment to your individual needs.",
      "process.3.title": "Installation and configuration",
      "process.3.desc": "We install models, prepare the environment and optimize the configuration.",
      "process.4.title": "Launch and support",
      "process.4.desc": "We hand over the finished solution and help with its further use.",

      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently asked questions",
      "faq.q1": "What is local artificial intelligence?",
      "faq.a1":
        "Local AI means running AI models directly on your computer instead of in an external cloud. This gives you greater control over the environment and means you don't have to send every interaction to external services.",
      "faq.q2": "Can I run AI on my current computer?",
      "faq.a2":
        "In many cases, yes. It depends on the AI model, available memory and hardware capacity. After a conversation, we'll assess whether your current hardware is sufficient or whether modifications are needed.",
      "faq.q3": "Do I need an Apple Mac or a PC with NVIDIA?",
      "faq.a3":
        "There's no single answer. Both platforms are supported. The choice depends on the use case, AI models and budget. We'll help you pick a solution that fits your needs.",
      "faq.q4": "Do AI models work without internet?",
      "faq.a4":
        "Once downloaded and installed, the models themselves typically run locally, without the need to send data to external services. However, some models and setup steps may require a connection — it depends on the specific solution.",
      "faq.q5": "Is local AI suitable for a business?",
      "faq.a5":
        "Yes, local AI solutions are often chosen by companies that want greater control over their working environment. After a conversation, we'll assess which use cases will suit your organization.",
      "faq.q6": "How long does installation and configuration take?",
      "faq.a6":
        "It depends on the hardware and scope of work. Some deployments can take around two hours. We determine the exact time individually.",
      "faq.q7": "Do you offer help after deployment?",
      "faq.a7":
        "Yes. The optional KRYXOR Care service includes technical support, updates, diagnostics, optimization and support in developing the environment.",
      "faq.q8": "How does pricing work?",
      "faq.a8":
        "We prepare a quote individually after a conversation. It depends on the scope of services, hardware selection and the chosen deployment variant.",

      "contact.eyebrow": "Contact",
      "contact.title": "Start with a conversation.",
      "contact.desc":
        "Tell us what you'd like to use local AI for. We'll help you choose a solution and prepare an environment tailored to your needs.",
      "contact.btn.write": "Write a message",
      "contact.btn.copy": "Copy email address",
      "contact.copy.success": "Email address copied to clipboard.",
      "contact.copy.error": "Couldn't copy. Please copy the address manually.",

      "footer.slogan": "Your own AI. On your own terms.",
      "footer.region":
        "Western Pomeranian Voivodeship. Projects in other regions of Poland by individual arrangement.",
      "footer.email": "Email",
      "footer.rights": "© 2026 KRYXOR. All rights reserved."
    }
  };

  const EMAIL = "contact.kryxor@proton.me";
  const STORAGE_KEY = "kryxor-lang";

  /* ---------- POMOCTNICZE ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- JĘZYK ---------- */
  function applyLang(lang) {
    if (!translations[lang]) lang = "pl";
    const dict = translations[lang];

    document.documentElement.lang = lang;

    // title + meta description
    const title = $("#doc-title");
    if (title) title.textContent = dict["meta.title"];
    const meta = $("#meta-description");
    if (meta) meta.setAttribute("content", dict["meta.desc"]);

    // teksty
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // aria-label / aria-*
    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    // aktywny przycisk języka
    $$(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    let saved = "pl";
    try { saved = localStorage.getItem(STORAGE_KEY) || "pl"; } catch (e) {}
    applyLang(saved);

    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-lang");
        if (next !== document.documentElement.lang) applyLang(next);
      });
    });
  }

  /* ---------- MENU MOBILNE ---------- */
  function initMenu() {
    const toggle = $("#menu-toggle");
    const nav = $(".nav");
    const navList = $("#nav-list");
    if (!toggle || !nav) return;

    function openMenu() {
      nav.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Zamknij menu");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Otwórz menu");
      document.body.style.overflow = "";
    }
    function isMobile() { return window.matchMedia("(max-width: 860px)").matches; }

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      open ? closeMenu() : openMenu();
    });

    // klik linku zamyka menu
    $$(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("open")) closeMenu();
      });
    });

    // Escape zamyka menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) closeMenu();
    });

    // zmiana rozmiaru ekranu — przy dużym ekranie wymuś zamknięty stan mobile
    window.addEventListener("resize", () => {
      if (!isMobile() && nav.classList.contains("open")) closeMenu();
    });

    // po przekroczeniu 861px przywróć płynne przewijanie
    window.addEventListener("resize", () => {
      if (!isMobile()) document.body.style.overflow = "";
    });
  }

  /* ---------- SCROLL HEADER + REVEAL ---------- */
  function initScroll() {
    const header = $("#site-header");
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = $$(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- FAQ (accordion, dostępne) ---------- */
  function initFaq() {
    $$(".faq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const answer = document.getElementById(trigger.getAttribute("aria-controls"));
        if (!answer) return;
        const expanded = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (expanded) {
          answer.hidden = true;
          answer.style.maxHeight = "0px";
        } else {
          answer.hidden = false;
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    // po zmianie języka przelicz wysokość otwartych odpowiedzi
    document.addEventListener("faq-updated", () => {
      $$(".faq-trigger").forEach((trigger) => {
        if (trigger.getAttribute("aria-expanded") === "true") {
          const answer = document.getElementById(trigger.getAttribute("aria-controls"));
          if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- KONTAKT: kopiowanie e-maila ---------- */
  function initContact() {
    const copyBtn = $("#copy-btn");
    const status = $("#copy-status");
    if (!copyBtn || !status) return;

    function showMsg(text, isError) {
      status.textContent = text;
      status.classList.add("show");
      status.classList.toggle("error", !!isError);
      window.clearTimeout(showMsg._t);
      showMsg._t = window.setTimeout(() => status.classList.remove("show"), 3200);
    }

    function fallbackCopy(text) {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch (e) {
        return false;
      }
    }

    copyBtn.addEventListener("click", async () => {
      let ok = false;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(EMAIL);
          ok = true;
        } catch (e) {
          ok = fallbackCopy(EMAIL);
        }
      } else {
        ok = fallbackCopy(EMAIL);
      }
      const dict = translations[document.documentElement.lang] || translations.pl;
      if (ok) showMsg(dict["contact.copy.success"], false);
      else showMsg(dict["contact.copy.error"], true);
    });

    // upewnij się, że link e-mail wskazuje na właściwy adres
    const emailLink = $("#email-link");
    if (emailLink) emailLink.setAttribute("href", "mailto:" + EMAIL);
  }

  /* ---------- HERO: subtelna wizualizacja sieci ---------- */
  function initHeroCanvas() {
    const canvas = $("#hero-canvas");
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], raf, running = false;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function buildNodes() {
      const count = Math.max(14, Math.min(34, Math.floor((w * h) / 38000)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.8
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduce) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150,170,255,0.7)";
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = "rgba(91,140,255," + (0.12 * (1 - dist / 130)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    function start() {
      if (running) return;
      running = true;
      resize();
      buildNodes();
      draw();
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    }

    if (reduce) {
      resize();
      buildNodes();
      draw(); // jeden statyczny kadr
      return;
    }

    window.addEventListener("resize", () => { resize(); buildNodes(); }, { passive: true });

    // pauza gdy karta jest poza ekranem (wydajność)
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => (e.isIntersecting ? start() : stop()));
      }).observe(canvas);
    } else {
      start();
    }
  }

  /* ---------- START ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initMenu();
    initScroll();
    initFaq();
    initContact();
    initHeroCanvas();

    // po każdej zmianie języka: przepisane treści mogą zmienić wysokość FAQ
    window.addEventListener("faq-updated", () => {});
  });

  // nadpisz applyLang, by emitować zdarzenie po translacji
  const _origApply = applyLang;
  applyLang = function (lang) {
    _origApply(lang);
    window.dispatchEvent(new Event("faq-updated"));
  };
})();
