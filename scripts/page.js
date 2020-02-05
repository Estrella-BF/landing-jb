  // Navigation
  const navigationTabsName = ['aboutMe', 'whatIDo'];

  const whatIDoButton = document.getElementById('whatIDo');
  console.log(whatIDoButton)
  whatIDoButton.addEventListener('click', redirigir, 'whatIDO');

  function redirigir(event, value) {
    console.log(event)
    console.log(value)
  }

