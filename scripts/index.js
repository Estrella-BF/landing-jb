$('.carousel').each(function(){
  $(this).carousel({
      interval: false
  });
});

const aboutMeBtnDesktop = document.getElementById('aboutMeBtnDesktop');
const whatIDoBtnDesktop = document.getElementById('whatIDoBtnDesktop');
const therapyDesktop = document.getElementById('therapyDesktop');
const workshopsDesktop = document.getElementById('workshopsDesktop');
const testimonialsDesktop = document.getElementById('testimonialsDesktop');
const blogDesktop = document.getElementById('blogDesktop');
const contactDesktop = document.getElementById('contactDesktop');

// Sections
const workshop = document.getElementById('workshop');

aboutMeBtnDesktop.addEventListener('click', () => { 
  redirect(122);
});

whatIDoBtnDesktop.addEventListener('click', () => { 
  redirect(1060);
});

therapyDesktop.addEventListener('click', () => { 
  redirect(2050);
});

testimonialsDesktop.addEventListener('click', () => { 
  redirect(3494);
});

blogDesktop.addEventListener('click', () => { 
  redirect(4454);
});

contactDesktop.addEventListener('click', () => { 
  redirect(5270);
});

function redirect(scrolly) {/*
  console.log(window.location.href)
  window.location.href = url;
  console.log(window.location.href)
  console.log(window.screenY)
  const screenY = window.screenY;*/
  //window.scrollTo(0, screenY-10);
  //console.log(window.screenY)
    console.log(scrolly)
    //const scrollY = window.scrollY;
    window.scrollTo(0, scrolly);
}