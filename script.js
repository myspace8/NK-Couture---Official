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


// Gallery carousel
const imageCarousel = document.querySelector('.image-container');
const next = document.getElementById('right');
const prev = document.getElementById('left');
const carouselImage = document.querySelectorAll('.carousel img');

const img = document.querySelectorAll('#imgs img');

let idx = 3;

let interval = setInterval(run, 5000);

function run() {
    idx++;
    if(idx == img.length - 1) {
        idx = 1;
    }
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 1;
    } else if (idx < 0) {
        idx = img.length - 2;
    }

    imageCarousel.style.transform = `translateX(${-idx * 315}px)`;
}

changeImage()

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 5000);
}

next.addEventListener('click', () => {
    idx++;
    if(idx == img.length -1) {
        idx = 1;
    }
    changeImage();
    resetInterval();
})

prev.addEventListener('click', () => {
    idx--;
    if(idx == 0) {
        idx = -1;
    }
    changeImage();
    resetInterval();
})