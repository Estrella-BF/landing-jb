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

const navigationsDesktop = [
  aboutMeBtnDesktop, whatIDoBtnDesktop, therapyDesktop, workshopsDesktop, testimonialsDesktop, blogDesktop, contactDesktop, serviciosDesktop
];

// Sections
const workshop = document.getElementById('workshop');

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
  redirect(4454);
});

contactDesktop.addEventListener('click', () => { 
  setFocusNavigation(contactDesktop);
  redirect(5270);
});

function setFocusNavigation(element) {
  navigationsDesktop.forEach(item => {
    if (item === element) {
      item.setAttribute('class', 'active');
    } else { console.log(item)
      if (item === serviciosDesktop) {
        console.log(item)
        item.setAttribute('class', 'nav-link dropdown-link menu-nav pb-0');
        document.getElementById('navigationDesktop-submenu').setAttribute('class', 'dropdown-menu');
        console.log(document.getElementById('navigationDesktop-submenu'))
      } else {
        item.removeAttribute('class')
      }

    }
  })

}

function redirect(scrolly) {
  window.scrollTo(0, scrolly);
}