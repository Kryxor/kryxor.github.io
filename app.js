// Obsługa języka
const translations = {
  pl: {
    heroTitle: "KRYXOR",
    heroSubtitle: "Własna AI. Na własnych zasadach.",
    heroDescription: "Wdrażamy lokalną sztuczną inteligencję na Twoim komputerze. Dobieramy sprzęt, instalujemy modele i konfigurujemy środowisko, aby AI działała lokalnie — zgodnie z Twoimi potrzebami.",
    heroButtons: ["Poznaj nasze usługi", "Skontaktuj się"],
    aboutTitle: "Sztuczna inteligencja. Lokalnie.",
    aboutDesc1: "Pomagamy uruchomić modele sztucznej inteligencji na własnym sprzęcie. Od przygotowania komputera i doboru konfiguracji, po instalację, optymalizację i dopasowanie środowiska do codziennej pracy.",
    aboutDesc2: "Lokalne rozwiązania AI dają większą kontrolę nad środowiskiem, umożliwiają pracę bez konieczności przesyłania każdej interakcji do zewnętrznych usług i pozwalają dobrać rozwiązanie do konkretnych zastosowań.",
    servicesTitle: "Nasze usługi",
    service01Title: "01. Wdrożenie w pracowni KRYXOR",
    service01Desc1: "Klient dostarcza własny komputer. Instalujemy modele AI, konfigurujemy środowisko i dopasowujemy ustawienia do możliwości sprzętu.",
    service01Desc2: "Wybrane wdrożenia mogą zająć około dwóch godzin, zależnie od sprzętu i zakresu prac.",
    service02Title: "02. Odbiór i dostawa sprzętu",
    service02Desc: "Możliwość uzgodnienia odbioru komputera, przeprowadzenia wdrożenia i przekazania przygotowanego sprzętu.",
    service03Title: "03. Wdrożenie u klienta",
    service03Desc: "Instalacja i konfiguracja lokalnych rozwiązań AI w domu lub w firmie.",
    service04Title: "04. Kompletna stacja robocza AI",
    service04Desc1: "Pomagamy dobrać komputer Apple Mac lub konfigurację PC z kartą graficzną NVIDIA.",
    service04Desc2: "Dobór sprzętu zależy od modeli AI, zastosowania, oczekiwanej wydajności i budżetu.",
    service04Desc3: "Usługa obejmuje doradztwo, przygotowanie konfiguracji oraz możliwość konfiguracji środowiska.",
    service05Title: "05. KRYXOR Care",
    service05Desc: "Opcjonalna opieka techniczna, aktualizacje, diagnostyka, optymalizacja, konfiguracja i pomoc w rozwijaniu środowiska AI.",
    hardwareTitle: "AI dopasowana do Twojego sprzętu.",
    hardwareMac: "Apple Mac",
    hardwareMacDesc: "Dobór rozwiązania zależy od modeli AI, pamięci, możliwości sprzętowych, zastosowania i budżetu.",
    hardwarePC: "PC / NVIDIA",
    hardwarePCDesc: "Dobór rozwiązania zależy od modeli AI, pamięci, możliwości sprzętowych, zastosowania i budżetu.",
    processTitle: "Jak to działa",
    processStep1: "Rozmowa",
    processStep1Desc: "Poznajemy potrzeby, zastosowania i oczekiwania.",
    processStep2: "Dobór rozwiązania",
    processStep2Desc: "Dopasowujemy sprzęt, modele AI i środowisko do indywidualnych potrzeb.",
    processStep3: "Instalacja i konfiguracja",
    processStep3Desc: "Instalujemy modele, przygotowujemy środowisko i optymalizujemy konfigurację.",
    processStep4: "Uruchomienie i wsparcie",
    processStep4Desc: "Przekazujemy gotowe rozwiązanie i pomagamy w jego dalszym użytkowaniu.",
    faqTitle: "Często zadawane pytania",
    faqQuestion1: "Czym jest lokalna sztuczna inteligencja?",
    faqAnswer1: "Lokalna sztuczna inteligencja to modele AI działające na Twoim komputerze, bez konieczności przesyłania danych do zewnętrznych serwisów. Dzięki temu masz większą kontrolę nad swoimi danymi i lepszą prywatność.",
    faqQuestion2: "Czy mogę uruchomić AI na swoim obecnym komputerze?",
    faqAnswer2: "Możemy sprawdzić, czy Twój komputer spełnia minimalne wymagania. Wiele modeli AI działa na komputerach z podstawową konfiguracją, ale wydajność zależy od specyfiki sprzętu.",
    faqQuestion3: "Czy potrzebuję komputera Apple Mac, czy PC z NVIDIA?",
    faqAnswer3: "Zależy od modeli AI, które chcesz uruchomić. Niektóre modele działają na różnych systemach, ale do bardziej zaawansowanych zastosowań zaleca się komputery z kartą graficzną NVIDIA.",
    faqQuestion4: "Czy modele AI działają bez internetu?",
    faqAnswer4: "Tak, modele AI działają lokalnie bez konieczności połączenia z internetem. Wszystkie obliczenia są wykonywane na Twoim komputerze.",
    faqQuestion5: "Czy lokalna AI jest odpowiednia dla firmy?",
    faqAnswer5: "Tak, lokalna AI daje firmom większą kontrolę nad danymi i może być idealnym rozwiązaniem dla organizacji, które mają wysokie wymagania dotyczące prywatności i bezpieczeństwa.",
    faqQuestion6: "Ile trwa instalacja i konfiguracja?",
    faqAnswer6: "Proces wdrożenia może zająć od kilku godzin do kilku dni, zależnie od złożoności konfiguracji i potrzeb klienta.",
    faqQuestion7: "Czy oferujecie pomoc po wdrożeniu?",
    faqAnswer7: "Tak, udzielamy wsparcia technicznego i opieki KRYXOR Care po wdrożeniu.",
    faqQuestion8: "Jak wygląda wycena?",
    faqAnswer8: "Wycena zależy od konfiguracji, modeli AI i zakresu usług. Skontaktuj się z nami, aby uzyskać szczegółowe informacje.",
    contactTitle: "Zacznij od rozmowy.",
    contactDesc: "Opowiedz nam, do czego chcesz wykorzystać lokalną AI. Pomożemy dobrać rozwiązanie i przygotować środowisko dopasowane do Twoich potrzeb.",
    contactEmail: "contact.kryxor@proton.me",
    contactButton1: "Napisz wiadomość",
    contactButton2: "Kopiuj adres e-mail",
    contactCopySuccess: "Adres e-mail skopiowany!",
    footerLogo: "KRYXOR",
    footerSubtitle: "Własna AI. Na własnych zasadach.",
    footerInfo: "Województwo zachodniopomorskie. Realizacje w innych regionach Polski po indywidualnym uzgodnieniu.",
    footerCopyright: "© 2026 KRYXOR. Wszelkie prawa zastrzeżone.\nEngineered by KRYXOR."
  },
  en: {
    heroTitle: "KRYXOR",
    heroSubtitle: "Own AI. On your own terms.",
    heroDescription: "We deploy local artificial intelligence on your computer. We select hardware, install models and configure the environment so that AI works locally — according to your needs.",
    heroButtons: ["Discover our services", "Get in touch"],
    aboutTitle: "Artificial Intelligence. Locally.",
    aboutDesc1: "We help you run artificial intelligence models on your own hardware. From preparing the computer and selecting configuration, to installation, optimization and adapting the environment to daily work.",
    aboutDesc2: "Local AI solutions give you greater control over the environment, enable work without the need to send each interaction to external services, and allow you to select a solution for specific applications.",
    servicesTitle: "Our services",
    service01Title: "01. Deployment in KRYXOR Lab",
    service01Desc1: "The client provides their own computer. We install AI models, configure the environment and adjust settings to hardware capabilities.",
    service01Desc2: "Selected deployments may take about two hours, depending on hardware and scope of work.",
    service02Title: "02. Hardware pickup and delivery",
    service02Desc: "Possibility to coordinate pickup of the computer, carry out deployment and hand over the prepared hardware.",
    service03Title: "03. Deployment at client's location",
    service03Desc: "Installation and configuration of local AI solutions in home or company.",
    service04Title: "04. Complete AI workstation",
    service04Desc1: "We help select an Apple Mac computer or PC configuration with an NVIDIA graphics card.",
    service04Desc2: "Hardware selection depends on AI models, application, expected performance and budget.",
    service04Desc3: "The service includes consultation, preparing the configuration and the possibility of configuring the environment.",
    service05Title: "05. KRYXOR Care",
    service05Desc: "Optional technical support, updates, diagnostics, optimization, configuration and help in developing the AI environment.",
    hardwareTitle: "AI tailored to your hardware.",
    hardwareMac: "Apple Mac",
    hardwareMacDesc: "Solution selection depends on AI models, memory, hardware capabilities, application and budget.",
    hardwarePC: "PC / NVIDIA",
    hardwarePCDesc: "Solution selection depends on AI models, memory, hardware capabilities, application and budget.",
    processTitle: "How it works",
    processStep1: "Conversation",
    processStep1Desc: "We get to know your needs, applications and expectations.",
    processStep2: "Solution selection",
    processStep2Desc: "We match the hardware, AI models and environment to individual needs.",
    processStep3: "Installation and configuration",
    processStep3Desc: "We install models, prepare the environment and optimize the configuration.",
    processStep4: "Launch and support",
    processStep4Desc: "We hand over the completed solution and help with its further use.",
    faqTitle: "Frequently asked questions",
    faqQuestion1: "What is local artificial intelligence?",
    faqAnswer1: "Local artificial intelligence refers to AI models that run on your computer without sending data to external services. This gives you greater control over your data and better privacy.",
    faqQuestion2: "Can I run AI on my current computer?",
    faqAnswer2: "We can check if your computer meets the minimum requirements. Many AI models work on computers with basic configuration, but performance depends on the hardware specifics.",
    faqQuestion3: "Do I need an Apple Mac or a PC with NVIDIA?",
    faqAnswer3: "It depends on the AI models you want to run. Some models work on different systems, but for more advanced applications, computers with NVIDIA graphics cards are recommended.",
    faqQuestion4: "Do AI models work without internet?",
    faqAnswer4: "Yes, AI models work locally without needing an internet connection. All computations are performed on your computer.",
    faqQuestion5: "Is local AI suitable for companies?",
    faqAnswer5: "Yes, local AI gives companies greater control over data and can be an ideal solution for organizations with high privacy and security requirements.",
    faqQuestion6: "How long does installation and configuration take?",
    faqAnswer6: "The deployment process may take several hours to a few days, depending on the complexity of the configuration and client needs.",
    faqQuestion7: "Do you offer support after deployment?",
    faqAnswer7: "Yes, we provide technical support and KRYXOR Care after deployment.",
    faqQuestion8: "How does pricing work?",
    faqAnswer8: "Pricing depends on the configuration, AI models and scope of services. Contact us for detailed information.",
    contactTitle: "Start with a conversation.",
    contactDesc: "Tell us what you want to use local AI for. We'll help you select the right solution and prepare an environment tailored to your needs.",
    contactEmail: "contact.kryxor@proton.me",
    contactButton1: "Send message",
    contactButton2: "Copy email address",
    contactCopySuccess: "Email address copied!",
    footerLogo: "KRYXOR",
    footerSubtitle: "Own AI. On your own terms.",
    footerInfo: "West Pomeranian Voivodeship. Projects in other regions of Poland upon individual agreement.",
    footerCopyright: "© 2026 KRYXOR. All rights reserved.\nEngineered by KRYXOR."
  }
};

let currentLanguage = 'pl';
const langToggle = document.getElementById('langToggle');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Inicjalizacja strony
document.addEventListener('DOMContentLoaded', () => {
  // Ustaw język na startowym
  updateLanguage(currentLanguage);
  
  // Obsługa przełącznika języka
  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    updateLanguage(currentLanguage);
    langToggle.textContent = currentLanguage.toUpperCase();
  });
  
  // Obsługa menu hamburgerowego
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Aktualizacja atrybutów ARIA
    const isExpanded = nav.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });
  
  // Zamknięcie menu po kliknięciu w link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Obsługa klawiatury dla menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Obsługa FAQ accordion
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const content = document.getElementById(button.getAttribute('aria-controls'));
      
      // Zamknij wszystkie inne elementy
      accordionButtons.forEach(btn => {
        if (btn !== button) {
          btn.setAttribute('aria-expanded', 'false');
          const otherContent = document.getElementById(btn.getAttribute('aria-controls'));
          if (otherContent) {
            otherContent.classList.remove('show');
          }
        }
      });
      
      // Przełącz bieżący element
      button.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('show');
    });
  });
  
  // Obsługa przycisku kopiowania e-maila
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'contact.kryxor@proton.me';
      
      // Spróbuj użyć Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
          showCopyMessage(copyEmailBtn, translations[currentLanguage].contactCopySuccess);
        }).catch(err => {
          console.error('Błąd kopiowania: ', err);
          fallbackCopyTextToClipboard(email, copyEmailBtn);
        });
      } else {
        // Fallback dla starszych przeglądarek
        fallbackCopyTextToClipboard(email, copyEmailBtn);
      }
    });
  }
  
  // Inicjalizacja animacji kuli AI
  initAISphere();
});

// Funkcja aktualizująca język
function updateLanguage(lang) {
  const t = translations[lang];
  
  // Aktualizuj teksty w nagłówku
  document.querySelector('.hero-title').textContent = t.heroTitle;
  document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
  document.querySelector('.hero-description').textContent = t.heroDescription;
  document.querySelectorAll('.hero-buttons .btn')[0].textContent = t.heroButtons[0];
  document.querySelectorAll('.hero-buttons .btn')[1].textContent = t.heroButtons[1];
  
  // Aktualizuj sekcję O nas
  document.querySelector('.about h2').textContent = t.aboutTitle;
  document.querySelector('.about-description').textContent = t.aboutDesc1;
  document.querySelector('.about-description:last-of-type').textContent = t.aboutDesc2;
  
  // Aktualizuj sekcję Usługi
  document.querySelector('.services h2').textContent = t.servicesTitle;
  document.querySelectorAll('.service-card h3')[0].textContent = t.service01Title;
  document.querySelectorAll('.service-card p')[0].textContent = t.service01Desc1;
  document.querySelectorAll('.service-card p')[1].textContent = t.service01Desc2;
  document.querySelectorAll('.service-card h3')[1].textContent = t.service02Title;
  document.querySelectorAll('.service-card p')[2].textContent = t.service02Desc;
  document.querySelectorAll('.service-card h3')[2].textContent = t.service03Title;
  document.querySelectorAll('.service-card p')[3].textContent = t.service03Desc;
  document.querySelectorAll('.service-card h3')[3].textContent = t.service04Title;
  document.querySelectorAll('.service-card p')[4].textContent = t.service04Desc1;
  document.querySelectorAll('.service-card p')[5].textContent = t.service04Desc2;
  document.querySelectorAll('.service-card p')[6].textContent = t.service04Desc3;
  document.querySelectorAll('.service-card h3')[4].textContent = t.service05Title;
  document.querySelectorAll('.service-card p')[7].textContent = t.service05Desc;
  
  // Aktualizuj sekcję Sprzęt
  document.querySelector('.hardware h2').textContent = t.hardwareTitle;
  document.querySelectorAll('.hardware-item h3')[0].textContent = t.hardwareMac;
  document.querySelectorAll('.hardware-item p')[0].textContent = t.hardwareMacDesc;
  document.querySelectorAll('.hardware-item h3')[1].textContent = t.hardwarePC;
  document.querySelectorAll('.hardware-item p')[1].textContent = t.hardwarePCDesc;
  
  // Aktualizuj sekcję Proces
  document.querySelector('.process h2').textContent = t.processTitle;
  document.querySelectorAll('.step h3')[0].textContent = t.processStep1;
  document.querySelectorAll('.step p')[0].textContent = t.processStep1Desc;
  document.querySelectorAll('.step h3')[1].textContent = t.processStep2;
  document.querySelectorAll('.step p')[1].textContent = t.processStep2Desc;
  document.querySelectorAll('.step h3')[2].textContent = t.processStep3;
  document.querySelectorAll('.step p')[2].textContent = t.processStep3Desc;
  document.querySelectorAll('.step h3')[3].textContent = t.processStep4;
  document.querySelectorAll('.step p')[3].textContent = t.processStep4Desc;
  
  // Aktualizuj sekcję FAQ
  document.querySelector('.faq h2').textContent = t.faqTitle;
  const faqItems = document.querySelectorAll('.accordion-item');
  const faqQuestions = [t.faqQuestion1, t.faqQuestion2, t.faqQuestion3, t.faqQuestion4, 
                        t.faqQuestion5, t.faqQuestion6, t.faqQuestion7, t.faqQuestion8];
  const faqAnswers = [t.faqAnswer1, t.faqAnswer2, t.faqAnswer3, t.faqAnswer4, 
                      t.faqAnswer5, t.faqAnswer6, t.faqAnswer7, t.faqAnswer8];
  
  faqItems.forEach((item, index) => {
    const button = item.querySelector('.accordion-button');
    const content = item.querySelector('.accordion-content');
    
    if (button && content) {
      button.textContent = faqQuestions[index];
      content.innerHTML = `<p>${faqAnswers[index]}</p>`;
    }
  });
  
  // Aktualizuj sekcję Kontakt
  document.querySelector('.contact h2').textContent = t.contactTitle;
  document.querySelector('.contact-description').textContent = t.contactDesc;
  const contactEmailLink = document.querySelector('.email-link');
  if (contactEmailLink) {
    contactEmailLink.textContent = t.contactEmail;
    contactEmailLink.href = `mailto:${t.contactEmail}`;
  }
  document.querySelectorAll('.contact-buttons .btn')[0].textContent = t.contactButton1;
  document.querySelectorAll('.contact-buttons .btn')[1].textContent = t.contactButton2;
  
  // Aktualizuj stopkę
  document.querySelector('.footer-logo h2').textContent = t.footerLogo;
  document.querySelector('.footer-subtitle').textContent = t.footerSubtitle;
  document.querySelector('.footer-info').textContent = t.footerInfo;
  document.querySelector('.footer-contact a').textContent = t.contactEmail;
  document.querySelector('.footer-copyright').textContent = t.footerCopyright;
  
  // Aktualizuj atrybut lang
  document.documentElement.lang = lang;
}

// Funkcja kopiowania tekstu (fallback)
function fallbackCopyTextToClipboard(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.top = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopyMessage(button, translations[currentLanguage].contactCopySuccess);
    } else {
      console.error('Nie udało się skopiować tekstu');
    }
  } catch (err) {
    console.error('Błąd kopiowania: ', err);
  }
  
  document.body.removeChild(textArea);
}

// Funkcja pokazująca komunikat po skopiowaniu
function showCopyMessage(button, message) {
  const originalText = button.textContent;
  button.textContent = message;
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

// Inicjalizacja animacji kuli AI
function initAISphere() {
  const canvas = document.getElementById('aiSphere');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(canvas.width, canvas.height) * 0.4;
  
  // Ustawienie rozmiaru canvas w zależności od ekranu
  function resizeCanvas() {
    if (window.innerWidth < 768) {
      canvas.width = 300;
      canvas.height = 300;
    } else {
      canvas.width = 400;
      canvas.height = 400;
    }
    
    // Przeliczanie współrzędnych po zmianie rozmiaru
    const newCenterX = canvas.width / 2;
    const newCenterY = canvas.height / 2;
    const newRadius = Math.min(canvas.width, canvas.height) * 0.4;
    
    centerX = newCenterX;
    centerY = newCenterY;
    radius = newRadius;
  }
  
  // Inicjalizacja rozmiaru canvas
  resizeCanvas();
  
  // Obsługa zmiany rozmiaru okna
  window.addEventListener('resize', resizeCanvas);
  
  // Parametry animacji
  let time = 0;
  const points = [];
  const connections = [];
  
  // Generowanie punktów
  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * radius * 0.8 + radius * 0.1;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    points.push({x, y, angle, radius});
  }
  
  // Generowanie połączeń
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < radius * 0.4) {
        connections.push({a: i, b: j});
      }
    }
  }
  
  // Funkcja rysująca kulę AI
  function drawAISphere() {
    // Czyszczenie canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Rysowanie tła z gradientem
    const bgGradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, radius * 1.5
    );
    bgGradient.addColorStop(0, 'rgba(25, 118, 210, 0.2)');
    bgGradient.addColorStop(1, 'rgba(5, 5, 8, 0)');
    
    ctx.fillStyle = bgGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Rysowanie punktów
    points.forEach(point => {
      const size = 2 + Math.sin(time * 0.01 + point.angle) * 1;
      const intensity = 0.5 + Math.sin(time * 0.01 + point.angle) * 0.5;
      
      ctx.beginPath();
      ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
      
      // Gradient punktu
      const pointGradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, size
      );
      pointGradient.addColorStop(0, `rgba(0, 255, 255, ${intensity})`);
      pointGradient.addColorStop(1, `rgba(156, 39, 176, ${intensity * 0.5})`);
      
      ctx.fillStyle = pointGradient;
      ctx.fill();
    });
    
    // Rysowanie połączeń
    connections.forEach(conn => {
      const pointA = points[conn.a];
      const pointB = points[conn.b];
      
      const dx = pointA.x - pointB.x;
      const dy = pointA.y - pointB.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Obliczenie przejrzystości w zależności od odległości
      const opacity = 1 - (distance / (radius * 0.4));
      
      if (opacity > 0) {
        ctx.beginPath();
        ctx.moveTo(pointA.x, pointA.y);
        ctx.lineTo(pointB.x, pointB.y);
        
        // Gradient linii
        const lineGradient = ctx.createLinearGradient(
          pointA.x, pointA.y,
          pointB.x, pointB.y
        );
        lineGradient.addColorStop(0, `rgba(100, 181, 246, ${opacity * 0.5})`);
        lineGradient.addColorStop(1, `rgba(156, 39, 176, ${opacity * 0.5})`);
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
    
    // Rysowanie glow
    const glowGradient = ctx.createRadialGradient(
      centerX, centerY, radius * 0.8,
      centerX, centerY, radius * 1.2
    );
    glowGradient.addColorStop(0, 'rgba(100, 181, 246, 0.5)');
    glowGradient.addColorStop(1, 'rgba(100, 181, 246, 0)');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
    ctx.fillStyle = glowGradient;
    ctx.fill();
    
    // Aktualizacja czasu dla animacji
    time += 1;
    
    // Animacja z requestAnimationFrame
    requestAnimationFrame(drawAISphere);
  }
  
  // Rozpoczęcie animacji
  drawAISphere();
}
