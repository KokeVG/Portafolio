/**
* Template Name: Personal
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
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

  /**
   * Portafolio proyectos
   */

  let proyectos = [{
      id: 1,
      nombre: 'Proyecto 1',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example1.com',
      github: 'github1',
      img1: 'assets/img/portfolio/portfolio-1.jpg',
      img2: 'assets/img/portfolio/portfolio-2.jpg',
      img3: 'assets/img/portfolio/portfolio-3.jpg'
    },
    {
      id: 2,
      nombre: 'Proyecto 2',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example2.com',
      github: 'github2',
      img1: 'assets/img/portfolio/portfolio-1.jpg',
      img2: 'assets/img/portfolio/portfolio-2.jpg',
      img3: ''
    },
    {
      id: 3,
      nombre: 'Proyecto 3',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example3.com',
      github: 'github3',
      img1: 'assets/img/portfolio/portfolio-2.jpg',
      img2: 'assets/img/portfolio/portfolio-1.jpg',
      img3: ''
    },
    {
      id: 4,
      nombre: 'Proyecto 4',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example4.com',
      github: 'github4',
      img1: 'assets/img/portfolio/portfolio-3.jpg',
      img2: 'assets/img/portfolio/portfolio-2.jpg',
      img3: ''
    },
    {
      id: 5,
      nombre: 'Proyecto 5',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example5.com',
      github: 'github5',
      img1: 'assets/img/portfolio/portfolio-1.jpg',
      img2: 'assets/img/portfolio/portfolio-3.jpg',
      img3: ''
    },
    {
      id: 6,
      nombre: 'Proyecto 6',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example6.com',
      github: 'github6',
      img1: 'assets/img/portfolio/portfolio-3.jpg',
      img2: 'assets/img/portfolio/portfolio-2.jpg',
      img3: ''
    },
    {
      id: 7,
      nombre: 'Proyecto 7',
      desc: 'asdasdasd',
      desc_large: 'qweqweqweqweqweqweqwwqeqwe',
      pag: 'www.example7.com',
      github: 'github7',
      img1: 'assets/img/portfolio/portfolio-2.jpg',
      img2: 'assets/img/portfolio/portfolio-1.jpg',
      img3: ''
  }]

  var resultado  = document.getElementById('div-proyectos'); 
  var fragment = document.createDocumentFragment();
    
  for(let item of proyectos) {
    var div = document.createElement('div');
    switch(item.id){
      case 1: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch');
      case 2: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0');
      case 3: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0');
      default: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4');
    }
    var a = document.createElement('a');
    a.setAttribute('href', 'portfolio-details.html');
    a.setAttribute('data-gallery', 'portfolioDetailsGallery');
    a.setAttribute('data-glightbox', 'type: external');
    a.setAttribute('class', 'portfolio-details-lightbox');
    a.setAttribute('title', item.nombre);
    div.appendChild(a);
    var div2 = document.createElement('div');
    div2.setAttribute('class', 'icon-box');
    a.appendChild(div2);
    var img = document.createElement('img');
    img.setAttribute('src', item.img1);
    img.setAttribute('class', 'img-fluid');
    img.setAttribute('alt', '');
    var h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(item.nombre));
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(item.desc));
    div2.appendChild(img);
    div2.appendChild(h4);
    div2.appendChild(p);


    fragment.appendChild(div);
    console.log(div)
    
  }
  /*
    Agregamos el fragmento al elemento del DOM
    al salir del bucle, de modo que el DOM
    se renderizará una sola vez, no N veces
  */
  resultado.appendChild(fragment);
  console.log(resultado)


  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()