$('.carousel').carousel({
  interval: 2000
})

function letters() {
	setTimeout(() => {
		const element = document.getElementById('letters');
		element.setAttribute('class', 'animated fadeIn show  slower');
		faces();
	}, 1500)
}

letters();

function faces() {
	setTimeout(() => { console.log('faces')
		const element = document.getElementById('faces');
		element.setAttribute('class', 'animation-left-style animated fadeOut show slow');
		lettersUp();
	}, 1000)
}

function letters() {
	setTimeout(() => {
		const element = document.getElementById('letters');
		element.setAttribute('class', 'animated fadeIn');
		faces();
	}, 1500)
}

function lettersUp() {
	setTimeout(() => {
		const element = document.getElementById('letters');
		element.setAttribute('class', 'mover');
		profession();
	}, 1500)
}

function profession() {
	setTimeout(() => {
		const element = document.getElementById('profession');
		element.setAttribute('class', 'show-up animated fadeInLeft slow profession');
		faces();
	}, 2000)

}


/* 
function appear() {
	setTimeout(() => {
		const element = document.getElementById('appear');
		element.setAttribute('class', 'animated fadeIn show slower');
		disappear();
	}, 1500)
}

function disappear() {
	setTimeout(() => {
		const slideInLeft = document.getElementById('slideInLeft');
		const appear = document.getElementById('appear');
		const slideInRight = document.getElementById('slideInRight');
		slideInLeft.setAttribute('class', 'animated fadeOut')
		appear.setAttribute('class', 'animated fadeOut')
		slideInRight.setAttribute('class', 'animated fadeOut');
		redirect()	
	}, 3000)
}

function redirect() {
	setTimeout(() => {
		window.location.href = './joseBeneyto.html'
	}, 1000)
}

this.slideInRight();
*/