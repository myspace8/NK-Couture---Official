
// Mobile navigation toggle

const toggleButton = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', function(e) {
    e.preventDefault();
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('is-clicked');
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


