function slideInRight() {
	setTimeout(() => {
		const element = document.getElementById('slideInLeft');
		element.setAttribute('class', 'animated slideInLeft show');
		appear();
	}, 1500)
}

function appear() {
	setTimeout(() => {
		const element = document.getElementById('appear');
		element.setAttribute('class', 'animated fadeIn show');
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
	}, 2000)
}

function redirect() {
	setTimeout(() => {
		window.location.href = './joseBeneyto.html'
	}, 1000)
}

this.slideInRight();