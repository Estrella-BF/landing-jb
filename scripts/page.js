
const arrowLeft = document.getElementById('arrowLeft');

arrowLeft.addEventListener('click', arrowLeftEvent);

function arrowLeftEvent() {
  console.log('click')
  console.log(document.getElementById('sliders').children)
}