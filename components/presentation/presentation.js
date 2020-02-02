import React from 'react';
import logoFaces from '../../images/caras.png';
import logoName from '../../images/joseandresbeneyto.png';
import logoTitle from '../../images/psicologopsicoterapeuta.png';
// import Remarkable from 'remarkable';
// import {LiveEditor, LiveProvider} from 'react-live';
//import {colors, media} from 'theme';
// import MetaTitle from 'templates/components/MetaTitle';


// const compileES6 = code => Babel.transform(code, {presets: ['react']}).code;

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
		window.location.href = './fisrt-page.html'
	}, 1000)
}


slideInRight();

const Presentation = () => {
  return (
    <div className="animation">
    <div>
      <div className="animation-left">
        <img className="hidden" id="slideInLeft" src={logoFaces} />
      </div>
      <div className="animation-right">
        <div className="animated slideInRight" id="slideInRight">
          <img className="img-fluid" src={logoName} />
        </div>
        <div id="appear" className="hidden">
          <img className="img-fluid" src={logoTitle} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Presentation;