$('.carousel').each(function(){
  $(this).carousel({
      interval: false
  });
});

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

const arrowUp = document.getElementById('arrowUp');

const navigationsDesktop = [
  aboutMeBtnDesktop, whatIDoBtnDesktop, therapyDesktop, workshopsDesktop, testimonialsDesktop, blogDesktop, contactDesktop, serviciosDesktop
];

const navigationsMobile = [
  aboutMeBtnMobile, whatIDoBtnMobile, therapyMobile, workshopsMobile, testimonialsMobile, blogMobile, contactMobile
];

// Sections
const workshop = document.getElementById('workshop');

const state = {
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
  redirectMobile(aboutMeBtnMobile.getAttribute('id'));
});

whatIDoBtnMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(whatIDoBtnMobile);
  redirectMobile(whatIDoBtnMobile.getAttribute('id'));
});

therapyMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(therapyMobile);
  redirectMobile(therapyMobile.getAttribute('id'));
});

testimonialsMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(testimonialsMobile);
  redirectMobile(testimonialsMobile.getAttribute('id'));
});

blogMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(blogMobile);
  redirectMobile(blogMobile.getAttribute('id'));
});

contactMobile.addEventListener('click', () => { 
  navbarMobile.setAttribute('class', 'nav-bar__content navbar-collapse collapse')
  setFocusNavigationMobile(contactMobile);
  redirectMobile(contactMobile.getAttribute('id'));
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
  state.navigationMobile.push(element);
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
        item.setAttribute('class', 'dropdown-item sub-menu-item');
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

function redirectMobile(navItem) {
  switch (navItem) {
    case 'aboutMeBtnMobile':
      window.scrollTo(0, 0);
      break;

    case 'whatIDoBtnMobile':
      window.scrollTo(0, 1325);
      break;

    case 'therapyMobile':
      window.scrollTo(0, 2656);
      break;

    case 'testimonialsMobile':
      window.scrollTo(0, 6847);
      break;

    case 'blogMobile':
      window.scrollTo(0, 12264);
      break;

    case 'contactMobile':
      window.scrollTo(0, 14302);
      break;

    default:
      break;
  }
}

arrowUp.addEventListener('click', () => {
  console.log(window.scrollY)
  const scrollY = window.scrollY;
  window.scrollTo(0, scrollY - 1000);
})