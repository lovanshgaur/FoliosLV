// Content Data
const content = {
    hero: {
        name: "Aman Kumar",
        roles: ["AI Engineer", "Spatial Dev"],
        tagline: "I build <span>intelligent, immersive systems</span> with precision and code."
    },
    work: [
        {
            title: "3D Room Gen",
            desc: "2D Image to 3D Model Pipeline",
            stack: "Python · DETR · Blender"
        },
        {
            title: "Gesture OS",
            desc: "Real-Time Hand Control Interface",
            stack: "OpenCV · MediaPipe · PyAutoGUI"
        },
        {
            title: "Okomo VR",
            desc: "AI-Powered 360° Video Player",
            stack: "Unity · C# · VR"
        }
    ],
    experience: [
        {
            year: "Aug 2024 — Feb 2025",
            role: "AI R&D Intern",
            company: "@ Qubitnest"
        },
        {
            year: "Dec 2023 — Jun 2024",
            role: "AI / Unity Developer",
            company: "@ Okomo 360"
        },
        {
            year: "2021 — 2025",
            role: "B.Tech (AI & DS)",
            company: "@ Maharshi Dayanand University"
        }
    ],
    stack: [
        { cat: "Engineering", name: "Python" },
        { cat: "Spatial", name: "Unity / C#" },
        { cat: "Intelligence", name: "Computer Vision" },
        { cat: "Intelligence", name: "DETR / GLPN" },
        { cat: "Spatial", name: "Blender 3D" },
        { cat: "Tools", name: "OpenCV" },
        { cat: "Tools", name: "Git / GitHub" },
        { cat: "Libs", name: "NumPy / Pandas" }
    ],
    about: {
        text: "I care about how things feel as much as how they work. I like interfaces that respond quickly, explain themselves, and don’t show off. Most of my work sits at the intersection of <span style='color: white; font-weight: 400;'>AI research</span> and <span style='color: white; font-weight: 400;'>immersive spatial experiences</span>.",
        status: "Currently open to work · Based in NCR, India"
    },
    contact: {
        heading: "Let’s talk.",
        email: "aman.kumar@email.com",
        links: ["GitHub", "LinkedIn", "X / Twitter", "Resume"],
        copyright: "© 2026",
        localTime: "Local time: <span id='time'>00:00</span>"
    }
};

// Render Functions
function renderContent() {
    // Hero
    const heroHTML = `
                <div class="hero-content">
                    <h1 class="hero-name reveal-element">${content.hero.name}</h1>
                    <div class="hero-meta reveal-element">
                        <span>${content.hero.roles[0]}</span>
                        <span class="hero-divider"></span>
                        <span>${content.hero.roles[1]}</span>
                    </div>
                    <div class="hero-tagline reveal-element">${content.hero.tagline}</div>
                </div>
                <div class="scroll-indicator reveal-element">Scroll</div>
            `;
    document.getElementById('hero-section').innerHTML = heroHTML;

    // Work
    const workHTML = content.work.map(project => `
                <a href="#" class="project-item reveal-element">
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                    <div class="project-meta">
                        <span class="project-desc">${project.desc}</span>
                        <span class="project-stack">${project.stack}</span>
                    </div>
                </a>
            `).join('');
    document.getElementById('work-list').innerHTML = workHTML;

    // Experience
    const expHTML = content.experience.map(exp => `
                <div class="log-entry reveal-element">
                    <span class="log-year">${exp.year}</span>
                    <div class="log-details">
                        <span class="log-role">${exp.role}</span>
                        <span class="log-company">${exp.company}</span>
                    </div>
                </div>
            `).join('');
    document.getElementById('experience-log').innerHTML = expHTML;

    // Stack
    const stackHTML = content.stack.map(item => `
                <div class="stack-card">
                    <span class="stack-category">${item.cat}</span>
                    <span class="stack-name">${item.name}</span>
                </div>
            `).join('');
    document.getElementById('stack-grid').innerHTML = stackHTML;

    // About
    const aboutHTML = `
                <div class="reveal-element">
                    <p class="about-text">${content.about.text}</p>
                    <div class="status-badge">
                        <span class="status-dot"></span>
                        <span>${content.about.status}</span>
                    </div>
                </div>
            `;
    document.getElementById('about').innerHTML = aboutHTML;

    // Footer
    const linksHTML = content.contact.links.map(link => `<a href="#">${link}</a>`).join('');
    const footerHTML = `
                <div class="footer-content reveal-element">
                    <h2 class="footer-heading">${content.contact.heading}</h2>
                    <a href="mailto:aman@example.com" class="footer-email">${content.contact.email}</a>
                </div>
                <div class="footer-bottom">
                    <div class="social-links">${linksHTML}</div>
                    <div class="footer-meta">
                        <span>${content.contact.copyright}</span>
                        <span style="margin-left: 2rem;">${content.contact.localTime}</span>
                    </div>
                </div>
            `;
    document.getElementById('contact').innerHTML = footerHTML;
}

// Initialize
renderContent();

// Scripts & Animation
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-blurred');
    } else {
        nav.classList.remove('nav-blurred');
    }
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    const timeEl = document.getElementById('time');
    if (timeEl) timeEl.textContent = timeString + ' IST';
}
setInterval(updateTime, 1000);
updateTime();

const stackGrid = document.querySelector('.stack-grid');
if (stackGrid) {
    stackGrid.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.stack-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.to("nav .reveal-element", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1
})
    .to(".hero .reveal-element", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1
    }, "-=0.5");

const revealElements = document.querySelectorAll("section .reveal-element, footer .footer-content");
revealElements.forEach(element => {
    gsap.fromTo(element,
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }
    );
});