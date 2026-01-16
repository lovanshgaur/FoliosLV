// Scripts & Animation
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-blurred');
    } else {
        nav.classList.remove('nav-blurred');
    }
});



// Navigation Active State on Scroll
const sections = document.querySelectorAll(".tab");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// 2. Simple Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});


fetch('text.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let content = data.content;
        loadData(content);
    });

function loadData(content) {

    // Header
    const hero = document.getElementById('hero');
    let heroContent = content.hero;
    const heroHtml = `
            <h1>${heroContent.name}</h1>
            <div class="roles">
                <h4>${heroContent.roles.join(' | ')}</h4>
            </div>
            <p>${heroContent.tagline}</p>
    `;
    hero.innerHTML = heroHtml;

    // Project List
    const projectList = document.getElementById('project-list');
    const projectHTML = content.projects.map(item => `
        <a href="${item.link}" class="project-item">
           <div class="project-year">${item.year}</div>
                    <div class="project-info">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
            ${item.tags
            ? `<div class="project-tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>`
            : ''} 
         </a> 
        `).join('');
    projectList.innerHTML = projectHTML;

    // Tools 
    const toolsList = document.getElementById('tools-grid')

    const toolsHTML = content.tools.map(item => `
        <div class="tool-card">
        <span class="tool-category">${item.cat}</span>
        <span class="tool-name">${item.name}</span>
        </div>
        `).join('');

    toolsList.innerHTML = toolsHTML;

    // Experience
    const experienceList = document.getElementById("experienceList");

    const experienceHTML = content.experience.map(
        (item) => `
      <div class="exp-card">
        <div class="exp-meta">
          <span class="exp-date">${item.year}</span>
        </div>
        <div class="exp-content">
          <h3 class="exp-role">${item.role}</h3>
          <div class="exp-company">@ ${item.company}</div>
          ${item.description
                ? `<p class="exp-desc">${item.description}</p>`
                : ""
            }
        </div>
      </div>
    `
    )
        .join("");

    experienceList.innerHTML = experienceHTML;


    // Footer
    const linksHTML = content.contact.links.map(link => `<a href="#">${link}</a>`).join('');
    const footerHTML = `
                <div class="footer-content">
                    <h2 class="footer-heading">${content.contact.heading}</h2>
                    <a href="mailto:aman@example.com" class="footer-email">${content.contact.email}</a>
                </div>
                <div class="footer-bottom">
                    <div class="social-links">${linksHTML}</div>
                    <div class="footer-meta">
                        <span>${content.contact.copyright}</span>
                    </div>
                </div>
            `;
    document.getElementById('footer').innerHTML = footerHTML;

}


const toolsGrid = document.querySelector('.tools-grid');
if (toolsGrid) {
    toolsGrid.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}