// app.js

// Przełącznik języka
const langToggle = document.getElementById('lang-toggle');
const body = document.body;
let currentLang = 'pl';

// Tłumaczenia
const translations = {
  pl: {
    // Menu
    menuHome: 'Start',
    menuAbout: 'O nas',
    menuServices: 'Usługi',
    menuHardware: 'Sprzęt',
    menuProcess: 'Proces',
    menuFAQ: 'FAQ',
    menuContact: 'Kontakt',
    
    // Hero
    heroTitle: 'KRYXOR',
    heroTagline: 'Własna AI. Na własnych zasadach.',
    heroText: 'Wdrażamy lokalną sztuczną inteligencję na Twoim komputerze. Dobieramy sprzęt, instalujemy modele i konfigurujemy środowisko, aby AI działała lokalnie — zgodnie z Twoimi potrzebami.',
    heroButton1: 'Poznaj nasze usługi',
    heroButton2: 'Skontaktuj się',
    
    // About
    aboutTitle: 'Sztuczna inteligencja. Lokalnie.',
    aboutText1: 'Pomagamy uruchomić modele sztucznej inteligencji na własnym sprzęcie. Od przygotowania komputera i doboru konfiguracji, po instalację, optymalizację i dopasowanie środowiska do codziennej pracy.',
    aboutText2: 'Lokalne rozwiązania AI dają większą kontrolę nad środowiskiem, umożliwiają pracę bez konieczności przesyłania każdej interakcji do zewnętrznych usług i pozwalają dobrać rozwiązanie do konkretnych zastosowań.',
    
    // Services
    servicesTitle: 'Usługi',
    service1Title: '01. Wdrożenie w pracowni KRYXOR',
    service1Text1: 'Klient dostarcza własny komputer. Instalujemy modele AI, konfigurujemy środowisko i dopasowujemy ustawienia do możliwości sprzętu.',
    service1Text2: 'Wybrane wdrożenia mogą zająć około dwóch godzin, zależnie od sprzętu i zakresu prac.',
    service2Title: '02. Odbiór i dostawa sprzętu',
    service2Text: 'Możliwość uzgodnienia odbioru komputera, przeprowadzenia wdrożenia i przekazania przygotowanego sprzętu.',
    service3Title: '03. Wdrożenie u klienta',
    service3Text: 'Instalacja i konfiguracja lokalnych rozwiązań AI w domu lub w firmie.',
    service4Title: '04. Kompletna stacja robocza AI',
    service4Text1: 'Pomagamy dobrać komputer Apple Mac lub konfigurację PC z kartą graficzną NVIDIA.',
    service4Text2: 'Dobór zależy od modeli AI, zastosowania, oczekiwanej wydajności i budżetu.',
    service4Text3: 'Usługa obejmuje doradztwo, przygotowanie konfiguracji oraz możliwość konfiguracji środowiska.',
    service5Title: '05. KRYXOR Care',
    service5Text: 'Opcjonalna opieka techniczna, aktualizacje, diagnostyka, optymalizacja, konfiguracja i wsparcie w rozwijaniu środowiska AI.',
    
    // Hardware
    hardwareTitle: 'AI dopasowana do Twojego sprzętu.',
    hardwareMac: 'Apple Mac',
    hardwareMacText: 'Dobór rozwiązania zależy od modeli AI, pamięci, możliwości sprzętowych, zastosowania i budżetu.',
    hardwarePC: 'PC / NVIDIA',
    hardwarePCText: 'Dobór rozwiązania zależy od modeli AI, pamięci, możliwości sprzętowych, zastosowania i budżetu.',
    
    // Process
    processTitle: 'Proces wdrożenia',
    processStep1: '01 — Rozmowa',
    processStep1Text: 'Poznajemy potrzeby, zastosowania i oczekiwania.',
    processStep2: '02 — Dobór rozwiązania',
    processStep2Text: 'Dopasowujemy sprzęt, modele AI i środowisko do indywidualnych potrzeb.',
    processStep3: '03 — Instalacja i konfiguracja',
    processStep3Text: 'Instalujemy modele, przygotowujemy środowisko i optymalizujemy konfigurację.',
    processStep4: '04 — Uruchomienie i wsparcie',
    processStep4Text: 'Przekazujemy gotowe rozwiązanie i pomagamy w jego dalszym użytkowaniu.',
    
    // FAQ
    faqTitle: 'FAQ',
    faqQuestion1: 'Czym jest lokalna sztuczna inteligencja?',
    faqAnswer1: 'Lokalna sztuczna inteligencja to modele AI działające na Twoim komputerze, bez konieczności przesyłania danych do zewnętrznych serwerów. Umożliwia to większą kontrolę nad danymi i ich prywatność.',
    faqQuestion2: 'Czy mogę uruchomić AI na swoim obecnym komputerze?',
    faqAnswer2: 'Możemy ocenić możliwość uruchomienia AI na Twoim komputerze. Wymagania zależą od wybranych modeli i zastosowania.',
    faqQuestion3: 'Czy potrzebuję komputera Apple Mac, czy PC z NVIDIA?',
    faqAnswer3: 'Wybór zależy od modeli AI, zastosowania i oczekiwanej wydajności. Możemy dobrać rozwiązanie dopasowane do Twoich potrzeb.',
    faqQuestion4: 'Czy modele AI działają bez internetu?',
    faqAnswer4: 'Tak, lokalne modele AI działają całkowicie offline po instalacji.',
    faqQuestion5: 'Czy lokalna AI jest odpowiednia dla firmy?',
    faqAnswer5: 'Tak, lokalna AI jest szczególnie odpowiednia dla firm, które chcą zachować kontrolę nad danymi i zapewnić bezpieczeństwo.',
    faqQuestion6: 'Ile trwa instalacja i konfiguracja?',
    faqAnswer6: 'Proces wdrożenia może zająć od kilku godzin do dwóch dni, w zależności od złożoności i potrzeb klienta.',
    faqQuestion7: 'Czy oferujecie pomoc po wdrożeniu?',
    faqAnswer7: 'Tak, oferujemy opcjonalną opiekę techniczną i wsparcie po wdrożeniu przez usługę KRYXOR Care.',
    faqQuestion8: 'Jak wygląda wycena?',
    faqAnswer8: 'Wycena zależy od zakresu usług i potrzeb klienta. Skontaktuj się z nami, aby uzyskać szczegółowe informacje.',
    
    // Contact
    contactTitle: 'Zacznij od rozmowy.',
    contactText: 'Opowiedz nam, do czego chcesz wykorzystać lokalną AI. Pomożemy dobrać rozwiązanie i przygotować środowisko dopasowane do Twoich potrzeb.',
    contactButton1: 'Napisz wiadomość',
    contactButton2: 'Kopiuj adres e-mail',
    
    // Footer
    footerTagline: 'Własna AI. Na własnych zasadach.',
    footerAddress: 'Województwo zachodniopomorskie. Realizacje w innych regionach Polski po indywidualnym uzgodnieniu.',
    footerCopyright: '© 2026 KRYXOR. Wszelkie prawa zastrzeżone.\nEngineered by KRYXOR.'
  },
  en: {
    // Menu
    menuHome: 'Home',
    menuAbout: 'About',
    menuServices: 'Services',
    menuHardware: 'Hardware',
    menuProcess: 'Process',
    menuFAQ: 'FAQ',
    menuContact: 'Contact',
    
    // Hero
    heroTitle: 'KRYXOR',
    heroTagline: 'Own AI. On your own terms.',
    heroText: 'We deploy local artificial intelligence on your computer. We select hardware, install models and configure the environment so that AI works locally — according to your needs.',
    heroButton1: 'Discover our services',
    heroButton2: 'Get in touch',
    
    // About
    aboutTitle: 'Artificial Intelligence. Locally.',
    aboutText1: 'We help you run artificial intelligence models on your own hardware. From preparing the computer and selecting the configuration, to installation, optimization and adapting the environment to daily work.',
    aboutText2: 'Local AI solutions give you greater control over the environment, enable working without having to send each interaction to external services and allow you to choose a solution for specific applications.',
    
    // Services
    servicesTitle: 'Services',
    service1Title: '01. Deployment in KRYXOR Studio',
    service1Text1: 'The client provides their own computer. We install AI models, configure the environment and customize settings according to hardware capabilities.',
    service1Text2: 'Selected deployments may take about two hours, depending on hardware and scope of work.',
    service2Title: '02. Hardware Pickup and Delivery',
    service2Text: 'Possibility to coordinate pickup of the computer, perform deployment and hand over the prepared hardware.',
    service3Title: '03. Deployment at Client Location',
    service3Text: 'Installation and configuration of local AI solutions at home or in a company.',
    service4Title: '04. Complete AI Workstation',
    service4Text1: 'We help select an Apple Mac computer or PC configuration with an NVIDIA graphics card.',
    service4Text2: 'Selection depends on AI models, application, expected performance and budget.',
    service4Text3: 'The service includes advice, preparing the configuration and the possibility of configuring the environment.',
    service5Title: '05. KRYXOR Care',
    service5Text: 'Optional technical care, updates, diagnostics, optimization, configuration and support in developing the AI environment.',
    
    // Hardware
    hardwareTitle: 'AI tailored to your hardware.',
    hardwareMac: 'Apple Mac',
    hardwareMacText: 'The choice of solution depends on AI models, memory, hardware capabilities, application and budget.',
    hardwarePC: 'PC / NVIDIA',
    hardwarePCText: 'The choice of solution depends on AI models, memory, hardware capabilities, application and budget.',
    
    // Process
    processTitle: 'Deployment Process',
    processStep1: '01 — Discussion',
    processStep1Text: 'We get to know your needs, applications and expectations.',
    processStep2: '02 — Solution Selection',
    processStep2Text: 'We match hardware, AI models and environment to your individual needs.',
    processStep3: '03 — Installation and Configuration',
    processStep3Text: 'We install the models, prepare the environment and optimize the configuration.',
    processStep4: '04 — Launch and Support',
    processStep4Text: 'We hand over the ready solution and help you with its further use.',
    
    // FAQ
    faqTitle: 'FAQ',
    faqQuestion1: 'What is local artificial intelligence?',
    faqAnswer1: 'Local artificial intelligence refers to AI models that run on your computer without needing to send data to external servers. This allows for greater control over data and privacy.',
    faqQuestion2: 'Can I run AI on my current computer?',
    faqAnswer2: 'We can assess the possibility of running AI on your computer. Requirements depend on selected models and applications.',
    faqQuestion3: 'Do I need an Apple Mac or a PC with NVIDIA?',
    faqAnswer3: 'The choice depends on AI models, application and expected performance. We can select a solution tailored to your needs.',
    faqQuestion4: 'Do AI models work offline?',
    faqAnswer4: 'Yes, local AI models work completely offline after installation.',
    faqQuestion5: 'Is local AI suitable for businesses?',
    faqAnswer5: 'Yes, local AI is particularly suitable for companies that want to maintain control over data and ensure security.',
    faqQuestion6: 'How long does installation and configuration take?',
    faqAnswer6: 'The deployment process may take from several hours to two days, depending on complexity and client needs.',
    faqQuestion7: 'Do you provide support after deployment?',
    faqAnswer7: 'Yes, we offer optional technical care and support after deployment through the KRYXOR Care service.',
    faqQuestion8: 'How does pricing work?',
    faqAnswer8: 'Pricing depends on the scope of services and client needs. Contact us for detailed information.',
    
    // Contact
    contactTitle: 'Start with a conversation.',
    contactText: 'Tell us what you want to use local AI for. We will help you choose a solution and prepare an environment tailored to your needs.',
    contactButton1: 'Send message',
    contactButton2: 'Copy email address',
    
    // Footer
    footerTagline: 'Own AI. On your own terms.',
    footerAddress: 'West Pomeranian Voivodeship. Realizations in other regions of Poland upon individual agreement.',
    footerCopyright: '© 2026 KRYXOR. All rights reserved.\nEngineered by KRYXOR.'
  }
};

// Funkcja tłumaczenia
function translatePage(lang) {
  currentLang = lang;
  body.setAttribute('lang', lang);
  
  // Aktualizacja menu
  document.querySelectorAll('#main-nav ul li a').forEach((link, index) => {
    const sectionId = link.getAttribute('href').substring(1);
    if (sectionId === 'hero') {
      link.textContent = translations[lang].menuHome;
    } else if (sectionId === 'about') {
      link.textContent = translations[lang].menuAbout;
    } else if (sectionId === 'services') {
      link.textContent = translations[lang].menuServices;
    } else if (sectionId === 'hardware') {
      link.textContent = translations[lang].menuHardware;
    } else if (sectionId === 'process') {
      link.textContent = translations[lang].menuProcess;
    } else if (sectionId === 'faq') {
      link.textContent = translations[lang].menuFAQ;
    } else if (sectionId === 'contact') {
      link.textContent = translations[lang].menuContact;
    }
  });
  
  // Aktualizacja hero
  document.querySelector('#hero h1').textContent = translations[lang].heroTitle;
  document.querySelector('.tagline').textContent = translations[lang].heroTagline;
  document.querySelector('.hero-text').textContent = translations[lang].heroText;
  document.querySelectorAll('.hero-buttons .btn')[0].textContent = translations[lang].heroButton1;
  document.querySelectorAll('.hero-buttons .btn')[1].textContent = translations[lang].heroButton2;
  
  // Aktualizacja About
  document.querySelector('#about h2').textContent = translations[lang].aboutTitle;
  document.querySelector('#about p').innerHTML = `<p>${translations[lang].aboutText1}</p><p>${translations[lang].aboutText2}</p>`;
  
  // Aktualizacja Services
  document.querySelector('#services h2').textContent = translations[lang].servicesTitle;
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards[0].querySelector('h3').textContent = translations[lang].service1Title;
  serviceCards[0].querySelector('p').innerHTML = `<p>${translations[lang].service1Text1}</p><p>${translations[lang].service1Text2}</p>`;
  serviceCards[1].querySelector('h3').textContent = translations[lang].service2Title;
  serviceCards[1].querySelector('p').textContent = translations[lang].service2Text;
  serviceCards[2].querySelector('h3').textContent = translations[lang].service3Title;
  serviceCards[2].querySelector('p').textContent = translations[lang].service3Text;
  serviceCards[3].querySelector('h3').textContent = translations[lang].service4Title;
  serviceCards[3].querySelector('p').innerHTML = `<p>${translations[lang].service4Text1}</p><p>${translations[lang].service4Text2}</p><p>${translations[lang].service4Text3}</p>`;
  serviceCards[4].querySelector('h3').textContent = translations[lang].service5Title;
  serviceCards[4].querySelector('p').textContent = translations[lang].service5Text;
  
  // Aktualizacja Hardware
  document.querySelector('#hardware h2').textContent = translations[lang].hardwareTitle;
  document.querySelectorAll('.hardware-item')[0].querySelector('h3').textContent = translations[lang].hardwareMac;
  document.querySelectorAll('.hardware-item')[0].querySelector('p').textContent = translations[lang].hardwareMacText;
  document.querySelectorAll('.hardware-item')[1].querySelector('h3').textContent = translations[lang].hardwarePC;
  document.querySelectorAll('.hardware-item')[1].querySelector('p').textContent = translations[lang].hardwarePCText;
  
  // Aktualizacja Process
  document.querySelector('#process h2').textContent = translations[lang].processTitle;
  const processSteps = document.querySelectorAll('.step');
  processSteps[0].querySelector('h3').textContent = translations[lang].processStep1;
  processSteps[0].querySelector('p').textContent = translations[lang].processStep1Text;
  processSteps[1].querySelector('h3').textContent = translations[lang].processStep2;
  processSteps[1].querySelector('p').textContent = translations[lang].processStep2Text;
  processSteps[2].querySelector('h3').textContent = translations[lang].processStep3;
  processSteps[2].querySelector('p').textContent = translations[lang].processStep3Text;
  processSteps[3].querySelector('h3').textContent = translations[lang].processStep4;
  processSteps[3].querySelector('p').textContent = translations[lang].processStep4Text;
  
  // Aktualizacja FAQ
  document.querySelector('#faq h2').textContent = translations[lang].faqTitle;
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems[0].querySelector('.faq-question').textContent = translations[lang].faqQuestion1;
  faqItems[0].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer1}</p>`;
  faqItems[1].querySelector('.faq-question').textContent = translations[lang].faqQuestion2;
  faqItems[1].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer2}</p>`;
  faqItems[2].querySelector('.faq-question').textContent = translations[lang].faqQuestion3;
  faqItems[2].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer3}</p>`;
  faqItems[3].querySelector('.faq-question').textContent = translations[lang].faqQuestion4;
  faqItems[3].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer4}</p>`;
  faqItems[4].querySelector('.faq-question').textContent = translations[lang].faqQuestion5;
  faqItems[4].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer5}</p>`;
  faqItems[5].querySelector('.faq-question').textContent = translations[lang].faqQuestion6;
  faqItems[5].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer6}</p>`;
  faqItems[6].querySelector('.faq-question').textContent = translations[lang].faqQuestion7;
  faqItems[6].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer7}</p>`;
  faqItems[7].querySelector('.faq-question').textContent = translations[lang].faqQuestion8;
  faqItems[7].querySelector('.faq-answer').innerHTML = `<p>${translations[lang].faqAnswer8}</p>`;
  
  // Aktualizacja Contact
  document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
  document.querySelector('#contact p').textContent = translations[lang].contactText;
  document.querySelectorAll('#contact .btn')[0].textContent = translations[lang].contactButton1;
  document.querySelectorAll('#contact .btn')[1].textContent = translations[lang].contactButton2;
  
  // Aktualizacja Footer
  document.querySelector('#footer .tagline').textContent = translations[lang].footerTagline;
  document.querySelector('#footer .footer-address').textContent = translations[lang].footerAddress;
  document.querySelector('#footer .copyright').textContent = translations[lang].footerCopyright;
}

// Inicjalizacja tłumaczenia
translatePage('pl');

// Obsługa przełącznika języka
langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'pl' ? 'en' : 'pl';
  translatePage(newLang);
});

// Obsługa menu mobilnego
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Aktualizacja atrybutów aria-expanded
  const isExpanded = navMenu.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// Zamknięcie menu po kliknięciu w link
document.querySelectorAll('#main-nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Zamknięcie menu po naciśnięciu Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// Obsługa FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    // Zamknij wszystkie odpowiedzi
    document.querySelectorAll('.faq-answer').forEach(a => {
      a.classList.remove('show');
    });
    
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', false);
    });
    
    // Otwórz aktualną odpowiedź, jeśli była zamknięta
    if (!isExpanded) {
      answer.classList.add('show');
      button.setAttribute('aria-expanded', true);
    }
  });
});

// Animacja kuli AI
function initAICanvas() {
  const canvas = document.getElementById('ai-canvas');
  const ctx = canvas.getContext('2d');
  
  // Ustaw rozmiar canvasa
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Właściwości kuli
  const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: Math.min(canvas.width, canvas.height) * 0.15,
    rotationX: 0,
    rotationY: 0,
    speed: 0.005
  };
  
  // Kolorystyka
  const colors = {
    core: '#00f0ff',
    glow: '#87ceff',
    wireframe: '#c0c0c0',
    background: '#000000'
  };
  
  // Generowanie punktów
  const points = [];
  const pointCount = 200;
  
  for (let i = 0; i < pointCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / pointCount);
    const theta = Math.sqrt(pointCount * Math.PI) * phi;
    
    points.push({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi)
    });
  }
  
  // Rysowanie kuli
  function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ball.rotationX += ball.speed;
    ball.rotationY += ball.speed * 0.5;
    
    const centerX = ball.x;
    const centerY = ball.y;
    const radius = ball.radius;
    
    // Rysowanie wnętrza kuli
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fill();
    
    // Rysowanie punktów
    points.forEach(point => {
      // Rotacja punktu
      const x1 = point.x;
      const y1 = point.y;
      const z1 = point.z;
      
      // Rotacja X
      const y2 = y1 * Math.cos(ball.rotationX) - z1 * Math.sin(ball.rotationX);
      const z2 = y1 * Math.sin(ball.rotationX) + z1 * Math.cos(ball.rotationX);
      
      // Rotacja Y
      const x3 = x1 * Math.cos(ball.rotationY) + z2 * Math.sin(ball.rotationY);
      const z3 = -x1 * Math.sin(ball.rotationY) + z2 * Math.cos(ball.rotationY);
      
      // Projektowanie 3D na 2D
      const scale = 200 / (200 + z3);
      const x4 = centerX + x3 * scale;
      const y4 = centerY + y2 * scale;
      
      // Wyznacz kolor punktu
      let pointColor;
      if (z3 > 0.8) {
        pointColor = colors.core;
      } else if (z3 > 0.5) {
        pointColor = colors.glow;
      } else {
        pointColor = colors.wireframe;
      }
      
      // Rysowanie punktu
      ctx.beginPath();
      ctx.arc(x4, y4, 1 * scale, 0, Math.PI * 2);
      ctx.fillStyle = pointColor;
      ctx.fill();
    });
    
    // Rysowanie linii połączeń
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const p1 = points[i];
        const p2 = points[j];
        
        // Rotacja punktów
        let x1 = p1.x, y1 = p1.y, z1 = p1.z;
        let x2 = p2.x, y2 = p2.y, z2 = p2.z;
        
        // Rotacja X
        const y1_rot = y1 * Math.cos(ball.rotationX) - z1 * Math.sin(ball.rotationX);
        const z1_rot = y1 * Math.sin(ball.rotationX) + z1 * Math.cos(ball.rotationX);
        const y2_rot = y2 * Math.cos(ball.rotationX) - z2 * Math.sin(ball.rotationX);
        const z2_rot = y2 * Math.sin(ball.rotationX) + z2 * Math.cos(ball.rotationX);
        
        // Rotacja Y
        const x1_rot = x1 * Math.cos(ball.rotationY) + z1_rot * Math.sin(ball.rotationY);
        const z1_rot2 = -x1 * Math.sin(ball.rotationY) + z1_rot * Math.cos(ball.rotationY);
        const x2_rot = x2 * Math.cos(ball.rotationY) + z2_rot * Math.sin(ball.rotationY);
        const z2_rot2 = -x2 * Math.sin(ball.rotationY) + z2_rot * Math.cos(ball.rotationY);
        
        // Projektowanie 3D na 2D
        const scale1 = 200 / (200 + z1_rot2);
        const scale2 = 200 / (200 + z2_rot2);
        const x1_proj = centerX + x1_rot * scale1;
        const y1_proj = centerY + y1_rot * scale1;
        const x2_proj = centerX + x2_rot * scale2;
        const y2_proj = centerY + y2_rot * scale2;
        
        // Oblicz odległość
        const distance = Math.sqrt(
          Math.pow(x2_proj - x1_proj, 2) +
          Math.pow(y2_proj - y1_proj, 2)
        );
        
        // Rysowanie linii tylko dla bliskich punktów
        if (distance < 30 * scale1 && distance < 30 * scale2) {
          ctx.beginPath();
          ctx.moveTo(x1_proj, y1_proj);
          ctx.lineTo(x2_proj, y2_proj);
          
          // Ustaw kolor linii
          let lineColor;
          if (z1_rot2 > 0.8 || z2_rot2 > 0.8) {
            lineColor = colors.core;
          } else if (z1_rot2 > 0.5 || z2_rot2 > 0.5) {
            lineColor = colors.glow;
          } else {
            lineColor = 'rgba(192, 192, 192, 0.3)';
          }
          
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.5 * scale1;
          ctx.stroke();
        }
      }
    }
    
    // Pulsowanie światła
    const pulse = Math.sin(Date.now() * 0.002) * 0.1 + 0.9;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * pulse, 0, Math.PI * 2);
    const gradient = ctx.createRadialGradient(
      centerX, centerY, radius * 0.8,
      centerX, centerY, radius
    );
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    requestAnimationFrame(drawBall);
  }
  
  // Uruchom animację
  drawBall();
}

// Inicjalizacja po załadowaniu strony
window.addEventListener('load', () => {
  initAICanvas();
});

// Obsługa płynnego przewijania
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Kopiowanie e-maila
const copyEmailButton = document.getElementById('copy-email');
if (copyEmailButton) {
  copyEmailButton.addEventListener('click', () => {
    const email = 'contact.kryxor@proton.me';
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailButton.textContent;
        copyEmailButton.textContent = 'Skopiowano!';
        setTimeout(() => {
          copyEmailButton.textContent = originalText;
        }, 2000);
      });
    } else {
      // Fallback do starszego sposobu
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        const originalText = copyEmailButton.textContent;
        copyEmailButton.textContent = 'Skopiowano!';
        setTimeout(() => {
          copyEmailButton.textContent = originalText;
        }, 2000);
      } catch (err) {
        console.error('Nie udało się skopiować tekstu: ', err);
      }
      
      document.body.removeChild(textArea);
    }
  });
}
