// Language Toggle
const langToggle = document.querySelector('.lang-toggle');
const isEnglish = false; // Default to Polish

langToggle.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langToggle.textContent = isEnglish ? 'EN' : 'PL';
    updateLanguage();
});

function updateLanguage() {
    // This would update all text content based on language
    // For now, just toggle the button text
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !isExpanded);

        const answer = question.nextElementSibling;
        if (!isExpanded) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Contact Buttons
const emailBtn = document.querySelector('.email-btn');
const copyBtn = document.querySelector('.copy-btn');
const feedback = document.getElementById('contact-feedback');
const email = 'contact.kryxor@proton.me';

emailBtn.addEventListener('click', () => {
    window.location.href = `mailto:${email}`;
});

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(email);
        showFeedback('Adres e-mail skopiowany do schowka!', true);
    } catch (err) {
        // Fallback for browsers that don't support Clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showFeedback('Adres e-mail skopiowany do schowka!', true);
    }
});

function showFeedback(message, success) {
    feedback.textContent = message;
    feedback.style.color = success ? '#4a90e2' : '#ff4444';
    setTimeout(() => {
        feedback.textContent = '';
    }, 3000);
}

// AI Globe Animation
const canvas = document.getElementById('ai-globe');
const ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

// Adjust canvas size on resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth * 0.8;
    height = canvas.height = window.innerHeight * 0.6;
    drawGlobe();
});

// Globe parameters
const centerX = width / 2;
const centerY = height / 2;
const radius = Math.min(width, height) * 0.4;
const fiberCount = 50;
const fiberLength = radius * 0.8;
const rotationSpeed = 0.005;
let rotationAngle = 0;

// Draw the globe
function drawGlobe() {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background gradient
    const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius * 1.2
    );
    gradient.addColorStop(0, 'rgba(10, 10, 10, 0.8)');
    gradient.addColorStop(1, 'rgba(10, 10, 10, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw fibers
    ctx.strokeStyle = 'rgba(74, 144, 226, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';

    for (let i = 0; i < fiberCount; i++) {
        const angle = (i / fiberCount) * Math.PI * 2 + rotationAngle;
        const startX = centerX + Math.cos(angle) * radius * 0.3;
        const startY = centerY + Math.sin(angle) * radius * 0.3;

        const endX = centerX + Math.cos(angle) * fiberLength;
        const endY = centerY + Math.sin(angle) * fiberLength;

        // Draw fiber
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw connection points
        ctx.fillStyle = 'rgba(74, 144, 226, 0.8)';
        ctx.beginPath();
        ctx.arc(endX, endY, 2, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw core
    ctx.fillStyle = 'rgba(74, 144, 226, 0.2)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Draw glow effect
    ctx.fillStyle = 'rgba(74, 144, 226, 0.1)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
    ctx.fill();

    // Update rotation
    rotationAngle += rotationSpeed;
    requestAnimationFrame(drawGlobe);
}

// Start animation
drawGlobe();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Reduce motion preference
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
    rotationSpeed = 0;
}
