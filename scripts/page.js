  // Navigation
  const navigationTabsName = ['aboutMeBtnDesktop', 'whatIDoBtnDesktop', 'therapyDesktop'];
  const blocksName = ['aboutMe', 'whatIDo', 'therapy'];
  
  const aboutMeButton = document.getElementById('aboutMeBtnDesktop');
  aboutMeButton.setAttribute("class", "active");

  const aboutMeBtnDesktop = document.getElementById('aboutMeBtnDesktop');
  const whatIDoBtnDesktop = document.getElementById('whatIDoBtnDesktop');
  const therapyDesktop = document.getElementById('therapyDesktop');

  aboutMeBtnDesktop.addEventListener('click', () => {
    this.activateClass('aboutMeBtnDesktop');
  });

  whatIDoBtnDesktop.addEventListener('click', () => {
    this.activateClass('whatIDoBtnDesktop');
  });
  
  therapyDesktop.addEventListener('click', () => {
    this.activateClass('therapyDesktop');
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

