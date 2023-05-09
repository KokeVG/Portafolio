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
      let header = select('#inicio')
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

      if (this.hash == '#inicio') {
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
        let header = select('#inicio')
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
      nombre: 'Gestión vehicular',
      desc: 'Sistema de gestión vehicular con reconocimiento de patentes vehiculares para recinto, permite ver y registrar datos asociados entre vehiculos, estacionamientos y departamentos ademas de reconocer las patentes vehiculares por medio de visión computacional.',
      github: 'https://github.com/KokeVG/gestion-vehicular',
      imgs: ['assets/img/portafolio/gestion-vehicular/gestion1.png'],
      herramientas: ['django.png', 'python.png', 'mysql.png']
    },
    {
      nombre: 'Gestión vehicular móvil',
      desc: 'Aplicación móvil que permite ver el estado de los estacionamients registrados en el sistema Gestión vehicular por medio de una API.',
      github: 'https://github.com/KokeVG/gestion-vehicular-movil',
      imgs: ['assets/img/portafolio/gestion-vehicular-movil/gestion-movil1.png', 'assets/img/portafolio/gestion-vehicular-movil/gestion-movil2.png'],
      herramientas: ['reactnative.png']
    },
    {
      nombre: 'Promediando',
      desc: 'Aplicación móvil android que permite calcular promedios de notas ponderados para un entorno estudiantil.',
      pagina: { sitio: 'Google Play', link: 'https://play.google.com/store/apps/details?id=koke.promediando'}, 
      github: 'https://github.com/KokeVG/promediando',
      imgs: ['assets/img/portafolio/promediando/promediando1.png', 'assets/img/portafolio/promediando/promediando2.png', 'assets/img/portafolio/promediando/promediando3.png', 'assets/img/portafolio/promediando/promediando4.png'],
      herramientas: ['android-studio.png', 'java.png']
    },
    {
      nombre: 'Organilab móvil',
      desc: 'Aplicación móvil que permite ver la disponibiliad de los dispositivos de un establecimiento.',
      pagina: { sitio: 'Google Play', link: 'https://play.google.com/store/apps/details?id=koke.organilab'},
      github: 'https://github.com/KokeVG/organilab-movil',
      imgs: ['assets/img/portafolio/organilab-movil/organilab1.png', 'assets/img/portafolio/organilab-movil/organilab2.png', 'assets/img/portafolio/organilab-movil/organilab3.png'],
      herramientas: ['ionic.png']
    },
    {
      nombre: 'Agenda telefónica',
      desc: 'Aplicación Java que permite crear, ver, editar y eliminar datos de agenda de contactos.',
      github: 'https://github.com/KokeVG/agenda-telefonica',
      imgs: ['assets/img/portafolio/agenda-telefonica/agenda1.png', 'assets/img/portafolio/agenda-telefonica/agenda2.png', 'assets/img/portafolio/agenda-telefonica/agenda3.png'],
      herramientas: ['java.png']
    }]

  var obtenerProyectos = function() {
    var resultado = document.getElementById('div-proyectos'); 
    var fragment = document.createDocumentFragment();
    
    for(let item of proyectos) {
      var div = document.createElement('div');
      switch(item.id){
        case 1: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch');
        case 2: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0');
        case 3: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0');
        default: div.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4');
      }
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'icon-box');
        div.appendChild(div2);
          var img = document.createElement('img');
          img.setAttribute('src', item.imgs[0]);
          img.setAttribute('alt', item.nombre);
          img.setAttribute('class', 'img-fluid');
          img.setAttribute('width', 800);
          img.setAttribute('height', 600);
          var h4 = document.createElement('h4');
          h4.appendChild(document.createTextNode(item.nombre));
          var p = document.createElement('p');
          p.appendChild(document.createTextNode(item.desc));
          var gh = document.createElement('p');
          var elgh = document.createElement('i');
          elgh.setAttribute('class', 'bx bx-link-external');
          var agh = document.createElement('a');
          agh.setAttribute('href', item.github);
          agh.setAttribute('target', '_blank');
          gh.appendChild(document.createTextNode('Github'));
          gh.appendChild(elgh);
          agh.appendChild(gh);
          div2.appendChild(img);
          div2.appendChild(h4);
          div2.appendChild(p);
          div2.appendChild(agh);
          if(item.pagina != undefined){
            var link = document.createElement('p');
            var alink = document.createElement('a');
            var el = document.createElement('i');
            el.setAttribute('class', 'bx bx-link-external');
            alink.setAttribute('href', item.pagina.link);
            alink.setAttribute('target', '_blank');
            link.appendChild(document.createTextNode(item.pagina.sitio));
            link.appendChild(el);
            alink.appendChild(link);
            div2.appendChild(alink);
          }
          for(var i=0; i<item.herramientas.length; i++){
            var logo = document.createElement('img');
            logo.setAttribute('src', 'assets/img/skills/'+item.herramientas[i]);
            logo.setAttribute('class', 'img-logo-portafolio');
            logo.setAttribute('alt', item.herramientas[i]);
            div2.appendChild(logo);
          }

      fragment.appendChild(div);  
    }
    resultado.appendChild(fragment);
  }
  obtenerProyectos();

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