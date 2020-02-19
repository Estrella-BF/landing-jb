  // Navigation
  const navigationTabsName = [
    'aboutMeBtnDesktop', 
    'whatIDoBtnDesktop', 
    'therapyDesktop', 
    'testimonialsDesktop', 
    'blogDesktop',
    'contactDesktop',
    'workshopsDesktop'
  ];

  const navigationTabsNameMobile = [
    'aboutMeBtnMobile',
    'whatIDoBtnMobile',
    'therapyMobile',
    'testimonialsMobile',
    'blogMobile',
    'contactMobile',
    'workshopsDesktop'
  ];

  const blocksName = ['aboutMe', 'whatIDo', 'therapy', 'testimonials', 'blog', 'contact', 'workshops'];

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

  const workshopsDesktop = document.getElementById('workshopsDesktop');

  this.activateClass('aboutMeBtnDesktop');

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

  workshopsDesktop.addEventListener('click', () => {
    this.activateClass('workshopsDesktop');
  });

  function activateClass(value) {
    navigationTabsName.map((item, index) => {
      const button = document.getElementById(item);
      const block = document.getElementById(blocksName[index]);

      if (item === value) {  
        if (value === 'therapyDesktop' || value === 'workshopsDesktop') {
          button.setAttribute("class", 'dropdown-active');
          block.setAttribute("class", "");   
        } else {
          button.setAttribute("class", 'active');
          block.setAttribute("class", "");   
        }
      } else {
        button.setAttribute("class", "");
        block.setAttribute("class", "hidden");
      }

      isContactSection(value);

      window.scrollTo(0, 0)
    })
  }

  function isContactSection(value) {
      const whatsApp = document.getElementById('whastapp-desktop');

    if (value === 'contactDesktop') {
      whatsApp.setAttribute("class", "static__box text-center only-desktop img-hidden");
    } else {
      whatsApp.setAttribute("class", "static__box text-center only-desktop");
    }
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
    window.scrollTo(0, 0)
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

  // navigation
  /*
  var current_page = 1;
  var records_per_page = 10;

  var objJson = [
      { adName: "1.- ACEPTAR, CAMBIAR Y FLUIR"},
      { adName: "2.- ANSIEDAD, APRENDIENDO A VIVIR EN PAZ"},
      { adName: "3.- APRENDIENDO LA COMPASIÓN PARA LA LIBERACIÓN"},
      { adName: "4.- BORDERLINE: TRASTORNO NARCISISTA DE LA PERSONALIDAD"},
      { adName: "5.- CAMBIAMOS SI ACEPTAMOS"},
      { adName: '6.- CONECTANDO CON LAS EMOCIONES "NEGATIVAS"'},
      { adName: "7.- DEPENDENCIA EMOCIONAL HACIA LA PAREJA"},
      { adName: "8.- DEPRESIÓN, SALIENDO DE LA TRISTEZA PROFUNDA"},
      { adName: "9.- DISMORFIA: CUANDO TE VES FEO SIN SERLO"},
      { adName: "10.- EL ARTE DE LA PSICOTERAPIA"},
      { adName: "11.- EMPATÍA, CONECTANDO CON EL OTRO "},
      { adName: "12.- ÉTICA Y PROFESIONALISMO DEL PSICÓLOGO "},
      { adName: "13.- HÁBITOS DE VIDA, DESDE LA PSICOLOGÍA"},
      { adName: "14.- HACER CONSCIENTE LO INCONSCIENTE ES PARTE DEL PROCESO TERAPÉUTICO"},
      { adName: "15.- HAZTE LA PREGUNTA PARA QUÉ Y NO POR QUÉ"},
      { adName: "16.- LA TECNOLOGÍA Y LAS RELACIONES INTER-PERSONALES"},
      { adName: "17.- LOS TRASTORNOS MENTALES MEJORAN Y SE CURAN"},
      { adName: "18.- NADA PERSONAL"},
      { adName: "19.- NO TE COMPARES CON LOS DEMÁS"},
      { adName: "20.- PARA LOS QUE NO ENCAJAMOS DEL TODO Y DE VEZ EN CUANDO NOS LLAMAN LOCOS"},
      { adName: "21.- PARA SER PSICÓLOGO CLÍNICO ES CLAVE HABER SIDO PACIENTE"},
      { adName: "22.- PERDONAR NO ES OLVIDAR"},
      { adName: "23.- ¿PODEMOS CAMBIAR?"},
      { adName: "24.- QUIERO TENER Y MANTENER UNA RELACIÓN DE PAREJA PERO…"},
      { adName: "25.- REESTRUCTURANDO PENSAMIENTOS, REGULANDO EMOCIONES"},
      { adName: "26.- RELACIÓN DE PAREJA, COMO PODRÍA FUNCIONAR"},
      { adName: "27.- RESILIENCIA, CONVIRTIENDO LA ADVERSIDAD EN UNA OPORTUNIDAD"},
      { adName: "28.- SÉ EL ARQUITECTO DE TU VIDA "},
      { adName: "29.- SILENCIA LA MENTE "},
      { adName: "30.- SI QUIERES UNA RELACIÓN DE PAREJA ESTABLE NO TE ACUESTES TAN RÁPIDO"},
      { adName: "31.- TRASCENDIENDO A LA CONSCIENCIA "},
      { adName: "32.- TRASTORNO NARCISISTA DE LA PERSONALIDAD"},
      { adName: "33.- TRASTORNO HISTRIÓNICO DE LA PERSONALIDAD"},
  ]; // Can be obtained from another source, such as your objJson variable

  function prevPage()
  {
      if (current_page > 1) {
          current_page--;
          changePage(current_page);
      }
  }

  function nextPage()
  {
      if (current_page < numPages()) {
          current_page++;
          changePage(current_page);
      }
  }
      
  function changePage(page)
  {
      var btn_next = document.getElementById("btn_next");
      var btn_prev = document.getElementById("btn_prev");
      var listing_table = document.getElementById("listingTable");
      var page_span = document.getElementById("page");
  
      // Validate page
      if (page < 1) page = 1;
      if (page > numPages()) page = numPages();

      listing_table.innerHTML = "";

      for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
          listing_table.innerHTML += 
          "<li data-toggle='modal' data-target='#modal-" + i + "'>" + objJson[i].adName + "</li>";
      }
      
      page_span.innerHTML = page;

      if (page == 1) {
        btn_prev.parentElement.setAttribute("class", 'navigation__item disabled-pagination');
      } else {
        btn_prev.parentElement.setAttribute("class", 'navigation__item');
      }

      if (page == numPages()) {
        btn_next.parentElement.setAttribute("class", 'navigation__item disabled-pagination');
      } else {
        btn_next.parentElement.setAttribute("class", 'navigation__item');
      }
  }

  function numPages()
  {
      return Math.ceil(objJson.length / records_per_page);
  }

  window.onload = function() {
      changePage(1);
  };
  */