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
const body = document.querySelector('body');
navBurger.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('active');
    navBurger.classList.toggle('is-clicked');
    header.classList.toggle('header-active');
    body.classList.toggle('stop-scroll');
});

// Scrollto with ofset on links with a class name .scrollto
const scrollto = document.querySelectorAll('.scrollto');
scrollto.forEach(scrollto => {
    scrollto.addEventListener('click', () => {
        if(nav.classList.contains('active')) {
            nav.classList.remove('active');
            navBurger.classList.toggle('is-clicked');
            body.classList.toggle('stop-scroll');
        }
    })
});


const alertEvent = document.querySelectorAll('.alert-on-click');
alertEvent.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('You are on the official NK Couture website, which is CURRENTLY UNDER DEVELOPMENT. Please reach out in any of the contacts provided at the bottom of the page. Thank you!')
    })
})