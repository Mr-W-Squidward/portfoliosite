/**
* Template Name: Personal
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  // Combine event listeners for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    var span = document.getElementById('dynamicText');
    var phrases = ["programmer", "dedicated coder", "high school student"];
    var index = 0;

    // Function to change text content dynamically
    function changePhrase() {
      span.textContent = phrases[index];
      index = (index + 1) % phrases.length;
    }

    // Handle click event to change text
    function handleClick() {
      changePhrase();
    }
  
    // Call changePhrase every 3 seconds
    setInterval(changePhrase, 3000); 
  
    // Change text on click
    span.addEventListener('click', handleClick);
  });

  // Helper function for element selection
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  // Helper function for event listener
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  // Scroll to an element with header offset
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Mobile nav toggle
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Scroll to links with a class name .scrollto
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash);
    if (section) {
      e.preventDefault();
      let navbar = select('#navbar');
      let header = select('#header');
      let sections = select('section', true);
      let navlinks = select('#navbar .nav-link', true);

      navlinks.forEach((item) => {
        item.classList.remove('active');
      });

      this.classList.add('active');

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top');
        sections.forEach((item) => {
          item.classList.remove('section-show');
        });
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top');
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show');
          });
          section.classList.add('section-show');
        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show');
        });
        section.classList.add('section-show');
      }

      scrollto(this.hash);
    }
  }, true);

  // Activate/show sections on load with hash links
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash);
      if (initial_nav) {
        let header = select('#header');
        let navlinks = select('#navbar .nav-link', true);

        header.classList.add('header-top');

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });

        setTimeout(function() {
          initial_nav.classList.add('section-show');
        }, 350);

        scrollto(window.location.hash);
      }
    }
  });

  // Skills animation
  let skillsContent = select('.skills-content');
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  // Testimonials slider
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  // Initiate Pure Counter 
  new PureCounter();

})();