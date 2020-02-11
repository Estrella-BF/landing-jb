  // Navigation
  const navigationTabsName = [
    'aboutMeBtnDesktop', 
    'whatIDoBtnDesktop', 
    'therapyDesktop', 
    'testimonialsDesktop', 
    'blogDesktop',
    'contactDesktop'
  ];

  const navigationTabsNameMobile = [
    'aboutMeBtnMobile',
    'whatIDoBtnMobile',
    'therapyMobile',
    'testimonialsMobile',
    'blogMobile',
    'contactMobile'
  ];

  const blocksName = ['aboutMe', 'whatIDo', 'therapy', 'testimonials', 'blog', 'contact'];

  const aboutMeBtnDesktop = document.getElementById('aboutMeBtnDesktop');
  const aboutMeBtnMobile = document.getElementById('aboutMeBtnMobile');

  const whatIDoBtnDesktop = document.getElementById('whatIDoBtnDesktop');
  const whatIDoBtnMobile = document.getElementById('whatIDoBtnMobile');

  const therapyDesktop = document.getElementById('therapyDesktop');
  const therapyMobile = document.getElementById('therapyMobile');

  const testimonialsDesktop = document.getElementById('testimonialsDesktop');
  const testimonialsMobile = document.getElementById('testimonialsMobile');

  const blogDesktop = document.getElementById('blogDesktop');
  const blogMobile = document.getElementById('blogMobile');

  const contactDesktop = document.getElementById('contactDesktop');
  const contactMobile = document.getElementById('contactMobile');


  aboutMeBtnDesktop.addEventListener('click', () => {
    this.activateClass('aboutMeBtnDesktop');
  });

  aboutMeBtnMobile.addEventListener('click', () => {
    this.activateClassResponsive('aboutMeBtnMobile');
  });

  whatIDoBtnDesktop.addEventListener('click', () => {
    this.activateClass('whatIDoBtnDesktop');
  });

  whatIDoBtnMobile.addEventListener('click', () => {
    this.activateClassResponsive('whatIDoBtnMobile');
  });
  
  therapyDesktop.addEventListener('click', () => {
    this.activateClass('therapyDesktop');
  });
  
  therapyMobile.addEventListener('click', () => {
    this.activateClassResponsive('therapyMobile');
  });

  testimonialsDesktop.addEventListener('click', () => {
    this.activateClass('testimonialsDesktop');
  });

  testimonialsMobile.addEventListener('click', () => {
    this.activateClassResponsive('testimonialsMobile');
  });
  
  blogDesktop.addEventListener('click', () => {
    this.activateClass('blogDesktop');
  });
  
  blogMobile.addEventListener('click', () => {
    this.activateClassResponsive('blogMobile');
  });
  
  contactDesktop.addEventListener('click', () => {
    this.activateClass('contactDesktop');
  });
  
  contactMobile.addEventListener('click', () => {
    this.activateClassResponsive('contactMobile');
  });

  function activateClass(value) {
    navigationTabsName.map((item, index) => {
      const button = document.getElementById(item);
      const block = document.getElementById(blocksName[index]);

      if (item === value) {
        button.setAttribute("class", 'active');
        block.setAttribute("class", "");
      } else {
        button.setAttribute("class", "");
        block.setAttribute("class", "hidden");
      }
      window.scrollTo(0, 0)
    })
  }


  function activateClassResponsive(value) {
    navigationTabsNameMobile.map((item, index) => {
      const block = document.getElementById(blocksName[index]);
      if (item === value) {
        block.setAttribute("class", "");
      } else {
        block.setAttribute("class", "hidden");
      }
    });
    buttonMobileMenu();
  }
  
  const btnMobile = document.getElementById('btn-collapse-mobile');
  const collapseContainer = document.getElementById('navbarNav');
  const aboutMeBlock = document.getElementById('aboutMe');
  const aboutMeBlockClassNames = aboutMeBlock.getAttribute('class');

  const mobileContact = document.getElementById('mobile-contact');
  const mobileContactClassNames = mobileContact.getAttribute('class');

  function buttonMobileMenu() {
    const classNames = collapseContainer.getAttribute('class');
    if (classNames.includes('show')) {
      // si se cerró
      collapseContainer.setAttribute("class", "nav-bar__content navbar-collapse collapse");
    } else {
      collapseContainer.setAttribute("class", "nav-bar__content navbar-collapse collapse show");
    }

  }