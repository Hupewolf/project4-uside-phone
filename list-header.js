const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});