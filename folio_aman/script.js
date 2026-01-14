// 1. Navigation Blur on Scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-blurred');
    } else {
        nav.classList.remove('nav-blurred');
    }
});

// 2. Time Widget
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = timeString + ' IST';
}
setInterval(updateTime, 1000);
updateTime();

// 3. GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Initial Load (Hero)
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
