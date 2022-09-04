// Sticky header
const header = document.querySelector('.header');

window.addEventListener('scroll', stickHeader);
function stickHeader() {
    if(window.scrollY > header.offsetHeight) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Mobile navigation toggle
const navBurger = document.querySelector('.navigation-burger');
const nav = document.querySelector('.nav-container');
const overlay = document.querySelector('.overlay');

navBurger.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('active');
    navBurger.classList.toggle('is-clicked');
    header.classList.toggle('header-active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    navBurger.classList.remove('is-clicked');
    header.classList.remove('header-active');
    overlay.classList.remove('active');
})