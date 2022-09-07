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

// Scrollto with ofset on links with a class name .scrollto

const scrollto = document.querySelectorAll('.scrollto');
scrollto.forEach(scrollto => {
    scrollto.addEventListener('click', () => {
        if(nav.classList.contains('active')) {
            nav.classList.remove('active');
            navBurger.classList.toggle('is-clicked');
            overlay.classList.remove('active');
        }
    })
});

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const Ghana = { lat: 7.9465, lng: 1.0232 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Ghana,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: Ghana,
      map: map,
    });
}
  
window.initMap = initMap;