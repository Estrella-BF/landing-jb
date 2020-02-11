  // Navigation
  const navigationTabsName = [
    'aboutMeBtnDesktop', 
    'whatIDoBtnDesktop', 
    'therapyDesktop', 
    'testimonialsDesktop', 
    'blogDesktop',
  ];

  const navigationTabsNameMobile = [
    'aboutMeBtnMobile',
    'whatIDoBtnMobile',
    'therapyMobile',
    'testimonialsMobile',
    'blogMobile'
  ];

  const blocksName = ['aboutMe', 'whatIDo', 'therapy', 'testimonials', 'blog'];
  
  const aboutMeButton = document.getElementById('aboutMeBtnDesktop');
  aboutMeButton.setAttribute("class", "active");

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

  function activateClass(value) {
    navigationTabsName.map((item, index) => {
      const button = document.getElementById(item);
      const block = document.getElementById(blocksName[index]);
      console.log(block)
      console.log(index)


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
        console.log(block)
      }
    })
  }
  
  const btnMobile = document.getElementById('btn-collapse-mobile');
  const collapseContainer = document.getElementById('navbarNav');
  const aboutMeBlock = document.getElementById('aboutMe');
  const aboutMeBlockClassNames = aboutMeBlock.getAttribute('class');

  const mobileContact = document.getElementById('mobile-contact');
  const mobileContactClassNames = mobileContact.getAttribute('class');

  btnMobile.addEventListener('click', function() {
    const classNames = collapseContainer.getAttribute('class');
    if (!classNames.includes('show')) {
      aboutMeBlock.className = 'hidden';
      mobileContact.className = 'hidden';
    } else {
      aboutMeBlock.className = aboutMeBlockClassNames;
      mobileContact.className = mobileContactClassNames;
    }
  })