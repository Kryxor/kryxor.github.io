/* ============================================================
   KRYXOR — app.js
   - EN/PL i18n (default EN, persists in localStorage)
   - copy-email + mailto
   - mobile nav, header-on-scroll, reveal-on-scroll
   ============================================================ */

/* ---------- 1. i18n dictionary ---------- */
const I18N = {
  en: {
    "a11y.skip": "Skip to content",
    "nav.services": "Services",
    "nav.business": "For Business",
    "nav.individuals": "For Individuals",
    "nav.process": "Process",
    "nav.privacy": "Privacy",
    "nav.contact": "Contact",

    "hero.eyebrow": "Intelligence. Locally.",
    "hero.title": "Your AI. Your Data. Your Control.",
    "hero.subtitle": "KRYXOR selects, configures and installs artificial intelligence that runs locally on your own hardware. No technical knowledge required — we handle everything and hand you a ready-to-use system.",
    "hero.ctaPrimary": "Get in touch",
    "hero.ctaSecondary": "Explore services",

    "intro.title": "What is local artificial intelligence?",
    "intro.text": "A local AI model runs on a computer or device that you own — in your office, at your desk or on dedicated hardware. Your documents and queries do not have to leave your environment to reach a model hosted on a remote server. That changes three things: how your data is handled, how continuously you can work, and how much control you keep.",

    "services.eyebrow": "What we do",
    "services.title": "Services",
    "services.subtitle": "From choosing the right model to handing you a configured system — and supporting it over time.",
    "svc1.title": "Local AI systems",
    "svc1.desc": "We individually select and deploy AI models that run on your own hardware — matched to your tasks, your data and your capacity.",
    "svc2.title": "Hardware assessment & configuration",
    "svc2.desc": "We evaluate the computer you already have and recommend what it can realistically run. When it is not enough, we suggest a workstation that fits your needs and your budget.",
    "svc3.title": "Complete implementation",
    "svc3.desc": "Professional preparation, installation, configuration and optimisation of the AI environment. You receive a ready-to-use solution tailored to your requirements — not a stack of tools to assemble yourself.",
    "svc4.title": "Privacy & data control",
    "svc4.desc": "Local operation gives you more control over your data and the option to work without sending prompts and documents to external AI services, with configurable privacy measures.",
    "svc5.title": "Support & development",
    "svc5.desc": "Ongoing assistance, system checks, maintenance, optimisation and updates — with the option to adopt newer models when they bring real value to your setup.",

    "business.eyebrow": "For businesses",
    "business.title": "Intelligence that works with your organisation",
    "business.desc": "For small and medium-sized companies, local AI becomes a quiet team member: it works with your internal material and supports everyday tasks, while your data stays on your side.",
    "business.1": "Private AI assistants",
    "business.2": "Working with internal documents",
    "business.3": "Document analysis",
    "business.4": "Knowledge bases",
    "business.5": "Support for everyday business tasks",
    "business.6": "Automation of selected workflows",
    "business.caption": "On your hardware. Under your control.",

    "individuals.eyebrow": "For individuals",
    "individuals.title": "A personal assistant that respects your privacy",
    "individuals.desc": "For private users, local AI is a capable helper that lives on your own machine. No accounts, no cloud dependency, no external exposure of your personal material.",
    "individuals.1": "Personal AI assistant",
    "individuals.2": "Working with personal documents",
    "individuals.3": "Local knowledge & research tools",
    "individuals.4": "Writing and productivity assistance",
    "individuals.5": "AI that runs on your own computer",
    "individuals.caption": "For your work, your research, your projects.",

    "process.eyebrow": "How it works",
    "process.title": "From idea to a working system",
    "process.subtitle": "A clear, five-step path. You stay informed at every stage.",
    "process.s1.title": "Consultation",
    "process.s1.desc": "We talk about your goals, your data and your environment — in plain language, without jargon.",
    "process.s2.title": "Assessment",
    "process.s2.desc": "We assess your existing hardware and define what a local solution can deliver for you.",
    "process.s3.title": "Recommendation",
    "process.s3.desc": "You receive a concrete proposal — model, hardware and scope — matched to your needs and budget.",
    "process.s4.title": "Implementation",
    "process.s4.desc": "We install, configure and optimise the system so that it is ready to use the day you receive it.",
    "process.s5.title": "Handover & support",
    "process.s5.desc": "We hand you a working system and stay with you for maintenance, optimisation and updates.",

    "privacy.eyebrow": "Privacy, security & control",
    "privacy.title": "More control, in practical terms",
    "privacy.text": "Running AI locally can give you more control over your data and the option to work without sending prompts and documents to external AI services. You can keep selected models on your own infrastructure and configure privacy measures to your needs.",
    "privacy.note": "Please note: local operation is not the same as absolute security. No configuration is immune to all risks — we help you make informed choices and reduce real exposures, rather than promise guarantees that no one can honestly make.",

    "support.eyebrow": "Long-term partnership",
    "support.title": "Support & development over time",
    "support.text": "After the handover we stay. We provide ongoing technical assistance, routine system checks, maintenance, optimisation and updates. When newer AI models offer a meaningful improvement for your system and requirements, we help you adopt them — without forcing unnecessary changes.",

    "contact.title": "Let’s talk about your project",
    "contact.desc": "The simplest way to reach us is by email. Write to us and we will get back to you.",
    "contact.emailLabel": "Email",
    "contact.copy": "Copy email",
    "contact.send": "Send email",
    "contact.copied": "Email address copied to clipboard.",

    "footer.tagline": "Your AI. Your Data. Your Control.",
    "footer.copy": "© <span id=\"year\">2026</span> KRYXOR. All rights reserved.",

    "meta.title": "KRYXOR — Your AI. Your Data. Your Control.",
    "meta.description": "KRYXOR deploys locally hosted artificial intelligence for businesses and individuals. Choose, configure, install and maintain AI on your own hardware — privately and under your control."
  },

  pl: {
    "a11y.skip": "Przejdź do treści",
    "nav.services": "Usługi",
    "nav.business": "Dla firm",
    "nav.individuals": "Dla osób prywatnych",
    "nav.process": "Proces",
    "nav.privacy": "Prywatność",
    "nav.contact": "Kontakt",

    "hero.eyebrow": "Inteligencja. Lokalnie.",
    "hero.title": "Twoje AI. Twoje dane. Twoja kontrola.",
    "hero.subtitle": "KRYXOR dobiera, konfiguruje i instaluje sztuczną inteligencję działającą lokalnie na Twoim sprzęcie. Nie potrzebujesz wiedzy technicznej — zajmujemy się wszystkim i przekazujemy gotowy system.",
    "hero.ctaPrimary": "Skontaktuj się",
    "hero.ctaSecondary": "Poznaj usługi",

    "intro.title": "Czym jest lokalna sztuczna inteligencja?",
    "intro.text": "Lokalny model AI działa na komputerze lub urządzeniu, które posiadasz — w biurze, przy biurku lub na dedykowanym sprzęcie. Twoje dokumenty i zapytania nie muszą opuszczać Twojego środowiska, aby dotrzeć do modelu hostowanego na zdalnym serwerze. Zmienia to trzy rzeczy: to, jak obsługiwane są Twoje dane, jak nieprzerwanie możesz pracować oraz jak dużo kontroli zachowujesz.",

    "services.eyebrow": "Co robimy",
    "services.title": "Usługi",
    "services.subtitle": "Od doboru właściwego modelu po przekazanie skonfigurowanego systemu — i jego obsługę w czasie.",
    "svc1.title": "Systemy AI lokalne",
    "svc1.desc": "Indywidualnie dobieramy i wdrażamy modele AI działające na Twoim sprzęcie — dopasowane do Twoich zadań, danych i możliwości.",
    "svc2.title": "Ocena i konfiguracja sprzętu",
    "svc2.desc": "Oceniamy posiadany przez Ciebie komputer i rekomendujemy, co może realnie uruchomić. Gdy go to nie wystarczy, proponujemy stację roboczą dopasowaną do Twoich potrzeb i budżetu.",
    "svc3.title": "Kompleksowa implementacja",
    "svc3.desc": "Profesjonalne przygotowanie, instalacja, konfiguracja i optymalizacja środowiska AI. Otrzymujesz gotowe do użycia rozwiązanie dostosowane do Twoich wymagań — nie stos narzędzi do samodzielnego składania.",
    "svc4.title": "Prywatność i kontrola nad danymi",
    "svc4.desc": "Praca lokalna daje Ci większą kontrolę nad danymi i możliwość pracy bez wysyłania zapytań i dokumentów do zewnętrznych usług AI, z konfigurowalnymi zabezpieczeniami prywatności.",
    "svc5.title": "Obsługa i rozwój",
    "svc5.desc": "Bieżące wsparcie, przeglądy systemów, konserwacja, optymalizacja i aktualizacje — z możliwością wdrożenia nowszych modeli, gdy przynoszą realną wartość dla Twojego zestawienia.",

    "business.eyebrow": "Dla firm",
    "business.title": "Inteligencja pracująca z Twoją organizacją",
    "business.desc": "Dla małych i średnich firm lokalne AI staje się cichym członkiem zespołu: pracuje z Twoim materiałem wewnętrznym i wspiera codzienne zadania, a Twoje dane pozostają po Twojej stronie.",
    "business.1": "Prywatni asystenci AI",
    "business.2": "Praca z dokumentami wewnętrznymi",
    "business.3": "Analiza dokumentów",
    "business.4": "Bazy wiedzy",
    "business.5": "Wspieranie codziennych zadań biznesowych",
    "business.6": "Automatyzacja wybranych procesów",
    "business.caption": "Na Twoim sprzęcie. Pod Twoją kontrolą.",

    "individuals.eyebrow": "Dla osób prywatnych",
    "individuals.title": "Osobisty asystent, który respektuje Twoją prywatność",
    "individuals.desc": "Dla użytkowników indywidualnych lokalne AI to skuteczny pomocnik mieszkający na Twoim własnym komputerze. Bez kont, bez zależności od chmury, bez narażania Twoich danych osobowych na zewnątrz.",
    "individuals.1": "Osobisty asystent AI",
    "individuals.2": "Praca z własnymi dokumentami",
    "individuals.3": "Lokalne narzędzia wiedzy i badań",
    "individuals.4": "Wsparcie pisania i produktywności",
    "individuals.5": "AI działające na Twoim komputerze",
    "individuals.caption": "Dla Twojej pracy, badań i projektów.",

    "process.eyebrow": "Jak to działa",
    "process.title": "Od pomysłu do działającego systemu",
    "process.subtitle": "Jasna ścieżka w pięciu krokach. Na każdym etapie jesteś na bieżąco.",
    "process.s1.title": "Konsultacja",
    "process.s1.desc": "Rozmawiamy o Twoich celach, danych i środowisku — prostym językiem, bez żargonu.",
    "process.s2.title": "Ocena",
    "process.s2.desc": "Oceniamy posiadany przez Ciebie sprzęt i definiujemy, co lokalne rozwiązanie może dla Ciebie dać.",
    "process.s3.title": "Rekomendacja",
    "process.s3.desc": "Otrzymujesz konkretную propozycję — model, sprzęt i zakres — dopasowaną do Twoich potrzeb i budżetu.",
    "process.s4.title": "Implementacja",
    "process.s4.desc": "Instalujemy, konfigurujemy i optymalizujemy system, by był gotowy do użycia w dniu, w którym go otrzymasz.",
    "process.s5.title": "Przekazanie i wsparcie",
    "process.s5.desc": "Przekazujemy Ci działający system i zostajemy z Tobą na czas konserwacji, optymalizacji i aktualizacji.",

    "privacy.eyebrow": "Prywatność, bezpieczeństwo i kontrola",
    "privacy.title": "Więcej kontroli, w praktyce",
    "privacy.text": "Uruchamianie AI lokalnie może dać Ci większą kontrolę nad danymi i możliwość pracy bez wysyłania zapytań i dokumentów do zewnętrznych usług AI. Możesz utrzymywać wybrane modele we własnej infrastrukturze i konfigurować zabezpieczenia prywatności zgodnie z potrzebami.",
    "privacy.note": "Zastrzeżenie: praca lokalna to nie to samo co bezwzględne bezpieczeństwo. Żadna konfiguracja nie jest odporna na wszystkie ryzyka — pomagamy podejmować świadome decyzje i ograniczać realne narażenia, zamiast obiecywać gwarancje, których nikt nie może uczciwie udzielić.",

    "support.eyebrow": "Długofalowa współpraca",
    "support.title": "Wsparcie i rozwój w czasie",
    "support.text": "Po przekazaniu systemu zostajemy z Tobą. Zapewniamy bieżące wsparcie techniczne, rutynowe przeglądy, konserwację, optymalizację i aktualizacje. Gdy nowsze modele AI oferują istotną poprawę dla Twojego systemu i wymagań, pomagamy je wdrożyć — nie narzucając zbędnych zmian.",

    "contact.title": "Porozmawiajmy o Twoim projekcie",
    "contact.desc": "Najprostszy sposób, by nas znaleźć, to wiadomość e-mail. Napisz do nas, a odezwiemy się.",
    "contact.emailLabel": "E-mail",
    "contact.copy": "Kopiuj e-mail",
    "contact.send": "Wyślij e-mail",
    "contact.copied": "Adres e-mail skopiowano do schowka.",

    "footer.tagline": "Twoje AI. Twoje dane. Twoja kontrola.",
    "footer.copy": "© <span id=\"year\">2026</span> KRYXOR. Wszelkie prawa zastrzeżone.",

    "meta.title": "KRYXOR — Twoje AI. Twoje dane. Twoja kontrola.",
    "meta.description": "KRYXOR wdraża lokalnie hostowaną sztuczną inteligencję dla firm i osób prywatnych. Dobór, konfiguracja, instalacja i utrzymanie AI na Twoim sprzęcie — prywatnie i pod Twoją kontrolą."
  }
};

const LANGS = ["en", "pl"];

/* ---------- 2. Apply language ---------- */
function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // html nodes (footer copyright with <span>)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // meta + lang
  document.documentElement.setAttribute("lang", lang);
  document.title = dict["meta.title"];
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict["meta.description"]);

  // switcher active state
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  // keep the dynamic year after innerHTML swap
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  try { localStorage.setItem("kryxor-lang", lang); } catch (e) {}
}

function initLanguage() {
  // Default EN regardless of browser language; only use saved explicit choice.
  let saved = null;
  try { saved = localStorage.getItem("kryxor-lang"); } catch (e) {}
  const lang = (saved && LANGS.includes(saved)) ? saved : "en";
  applyLanguage(lang);

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

/* ---------- 3. Copy email ---------- */
const EMAIL = "contact.kryxor@proton.me";
function initCopyEmail() {
  const btn = document.getElementById("copyEmail");
  const status = document.getElementById("copyStatus");
  if (!btn || !status) return;

  btn.addEventListener("click", async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(EMAIL);
      ok = true;
    } catch (e) {
      // Fallback for non-secure contexts (e.g. file://)
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
      ta.remove();
    }

    const t = I18N[document.documentElement.lang] || I18N.en;
    status.textContent = ok
      ? t["contact.copied"]
      : EMAIL;   // if clipboard blocked, show the address as fallback
    status.style.color = ok ? "var(--accent)" : "var(--text-dim)";
    setTimeout(() => { status.textContent = ""; }, 2600);
  });
}

/* ---------- 4. Mobile nav ---------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close after clicking a link
  nav.querySelectorAll(".nav__link").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- 5. Header on scroll ---------- */
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- 6. Reveal on scroll ---------- */
function initReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".hero__inner > *, .card, .split__text, .visual-panel, .step, .section__inner > *, .contact__inner > *"
  );
  if (prefersReduced) return; // CSS already shows everything

  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => io.observe(el));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCopyEmail();
  initNav();
  initHeader();
  initReveal();
});
