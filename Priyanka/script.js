// init JavaScript

// 1. Lenis Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

// 2. Navbar 
const navBtn = document.querySelector('.nav-btn')
const navbar = document.querySelector('.navbar')

navBtn.addEventListener('click', () => {
    navbar.classList.toggle('in-view')
    navBtn.classList.toggle('open')
})