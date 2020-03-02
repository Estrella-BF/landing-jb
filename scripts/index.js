$('.carousel').each(function(){
  $(this).carousel({
      interval: false
  });
});

const regresar = document.getElementById('regresar');

const aboutMeBtnDesktop = document.getElementById('aboutMeBtnDesktop');
const whatIDoBtnDesktop = document.getElementById('whatIDoBtnDesktop');
const serviciosDesktop = document.getElementById('serviciosDesktop');
const therapyDesktop = document.getElementById('therapyDesktop');
const workshopsDesktop = document.getElementById('workshopsDesktop');
const testimonialsDesktop = document.getElementById('testimonialsDesktop');
const blogDesktop = document.getElementById('blogDesktop');
const contactDesktop = document.getElementById('contactDesktop');

const aboutMeBtnMobile = document.getElementById('aboutMeBtnMobile');
const whatIDoBtnMobile = document.getElementById('whatIDoBtnMobile');
const serviciosMobile = document.getElementById('serviciosMobile');
const therapyMobile = document.getElementById('therapyMobile');
const workshopsMobile = document.getElementById('workshopsMobile');
const testimonialsMobile = document.getElementById('testimonialsMobile');
const blogMobile = document.getElementById('blogMobile');
const contactMobile = document.getElementById('contactMobile');

const navbarMobile = document.getElementById('navbarNav');

const navigationsDesktop = [
  aboutMeBtnDesktop, whatIDoBtnDesktop, therapyDesktop, workshopsDesktop, testimonialsDesktop, blogDesktop, contactDesktop, serviciosDesktop
];

const navigationsMobile = [
  aboutMeBtnMobile, whatIDoBtnMobile, therapyMobile, workshopsMobile, testimonialsMobile, blogMobile, contactMobile
];

// Sections
const workshop = document.getElementById('workshop');

const state = {
  navigationDesktop: [],
  navigationMobile: []
};


// Navigations desktop

aboutMeBtnDesktop.addEventListener('click', () => { 
  setFocusNavigation(aboutMeBtnDesktop);
  redirect(122);
});

whatIDoBtnDesktop.addEventListener('click', () => { 
  setFocusNavigation(whatIDoBtnDesktop);
  redirect(1060);
});

therapyDesktop.addEventListener('click', () => { 
  setFocusNavigation(serviciosDesktop);
  serviciosDesktop.setAttribute('class', 'active pb-0');
  document.getElementById('navigationDesktop-submenu').setAttribute('class', 'dropdown-menu');
  redirect(2050);
});

testimonialsDesktop.addEventListener('click', () => { 
  setFocusNavigation(testimonialsDesktop);
  redirect(3494);
});

blogDesktop.addEventListener('click', () => { 
  setFocusNavigation(blogDesktop);
  redirect(4458);
});

contactDesktop.addEventListener('click', () => { 
  setFocusNavigation(contactDesktop);
  redirect(5270);
});

// Navigation mobile

aboutMeBtnMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(aboutMeBtnMobile);
  redirect(0);
});

whatIDoBtnMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(whatIDoBtnMobile);
  redirect(1325);
});

therapyMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(therapyMobile);
  redirect(2656);
});

testimonialsMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(testimonialsMobile);
  redirect(6847);
});

blogMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(blogMobile);
  redirect(12264);
});

contactMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(contactMobile);
  redirect(14302);
});


function setFocusNavigation(element) {
  navigationsDesktop.forEach(item => {
    if (item === element) {
      item.setAttribute('class', 'active');
    } else { console.log(item)
      if (item === serviciosDesktop) {
        item.setAttribute('class', 'nav-link dropdown-link menu-nav pb-0');
        document.getElementById('navigationDesktop-submenu').setAttribute('class', 'dropdown-menu');
      } else {
        item.removeAttribute('class')
      }
    }
  })
}

function setFocusNavigationMobile(element) {    
  navigationsMobile.forEach(item => {
    if (item === element) {
      if (item.getAttribute('id') === therapyMobile.getAttribute('id')) {
        therapyMobile.setAttribute('class', 'dropdown-item sub-menu-item active');
        document.getElementById('navbarDropdownMenuLinkMobile').setAttribute('class', 'nav-link active');
      } else {
      document.getElementById('navbarDropdownMenuLinkMobile').setAttribute('class', 'nav-link');
        item.firstElementChild.setAttribute('class', 'nav-link active');
      }
    } else { 
      if (item.getAttribute('id') === therapyMobile.getAttribute('id')) {
        item.setAttribute('class', 'dropdown-item sub-menu-item active');
      } else if (item.getAttribute('id') === workshopsMobile.getAttribute('id')) {
        item.setAttribute('class', 'dropdown-item sub-menu-item');
      } else {
        item.firstElementChild.setAttribute('class', 'nav-link');
      }
    }
  })
}

function redirect(scrolly) {
  window.scrollTo(0, scrolly);
}