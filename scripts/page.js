  // Navigation
  const navigationTabsName = ['aboutMeBtnDesktop', 'whatIDoBtnDesktop', 'therapyDesktop', 'testimonialsDesktop', 'blogDesktop'];
  const blocksName = ['aboutMe', 'whatIDo', 'therapy', 'testimonials', 'blog'];
  
  const aboutMeButton = document.getElementById('aboutMeBtnDesktop');
  aboutMeButton.setAttribute("class", "active");

  const aboutMeBtnDesktop = document.getElementById('aboutMeBtnDesktop');
  const whatIDoBtnDesktop = document.getElementById('whatIDoBtnDesktop');
  const therapyDesktop = document.getElementById('therapyDesktop');
  const testimonialsDesktop = document.getElementById('testimonialsDesktop');
  const blogDesktop = document.getElementById('blogDesktop');

  aboutMeBtnDesktop.addEventListener('click', () => {
    this.activateClass('aboutMeBtnDesktop');
  });

  whatIDoBtnDesktop.addEventListener('click', () => {
    this.activateClass('whatIDoBtnDesktop');
  });
  
  therapyDesktop.addEventListener('click', () => {
    this.activateClass('therapyDesktop');
  });
  
  testimonialsDesktop.addEventListener('click', () => {
    this.activateClass('testimonialsDesktop');
  });
  
  blogDesktop.addEventListener('click', () => {
    this.activateClass('blogDesktop');
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