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

navBurger.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('active');
    navBurger.classList.toggle('is-clicked');
    header.classList.toggle('header-active');
});









































// document.addEventListener('DOMContentLoaded', () => {
//     "use strict";
  
//     /**
//      * Sticky header on scroll
//      */
//     const selectHeader = document.querySelector('#header');
//     if (selectHeader) {
//       document.addEventListener('scroll', () => {
//         window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
//       });
//     }
  
//     /**
//      * Navbar links active state on scroll
//      */
//     let navbarlinks = document.querySelectorAll('#navbar a');
  
//     function navbarlinksActive() {
//       navbarlinks.forEach(navbarlink => {
  
//         if (!navbarlink.hash) return;
  
//         let section = document.querySelector(navbarlink.hash);
//         if (!section) return;
  
//         let position = window.scrollY + 200;
  
//         if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//           navbarlink.classList.add('active');
//         } else {
//           navbarlink.classList.remove('active');
//         }
//       })
//     }
//     window.addEventListener('load', navbarlinksActive);
//     document.addEventListener('scroll', navbarlinksActive);
  
//     /**
//      * Mobile nav toggle
//      */
//     const mobileNavShow = document.querySelector('.mobile-nav-show');
//     const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
//     document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
//       el.addEventListener('click', function(event) {
//         event.preventDefault();
//         mobileNavToogle();
//       })
//     });
  
//     function mobileNavToogle() {
//       document.querySelector('body').classList.toggle('mobile-nav-active');
//       mobileNavShow.classList.toggle('d-none');
//       mobileNavHide.classList.toggle('d-none');
//     }
  
// });


