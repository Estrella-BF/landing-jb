import React from 'react';

const About = () => {
  return (
    <div >
      <nav>
        <div class="navbar navbar-expand-lg navbar-dark nav-bar">
          <a class="navbar-brand" href="#"></a>
          <div class="nav-bar__icons w-100 text-right">
            <span class="flaticon-facebook"></span>
            <span class="flaticon-instagram"></span>
            <span class="flaticon-linkedin"></span>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>      
        </div>

        <div class="collapse navbar-collapse nav-bar__list" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Acerca de mi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lo que hago</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Terapias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Testimoniales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="menu text-right">
        <ul class="">
          <li>Inicio</li><li>
            Acerca de mi</li><li>
            Lo que hago</li><li>
            Terapias</li><li>
            Testimoniales</li><li>
            Blog</li><li>
            Contacto</li>
        </ul>
        <div class="menu__icon text-center">
          <div class="menu__icon--img">
            <img class="img-fluid" src="./assets/svg/whatsapp-green.svg" alt="" />
          </div>
          <div>
            <p>Haga click aquí:</p>
            <p>Consultas / citas</p>
            <p>947240692</p>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="start">
              <img class="img-fluid" alt="Jose andres beneyto" src="./assets/img/escritorio.png" />
              <span><i>"La inteligencia es la capacidad de tomar decisiones y ser perseverante con ellas"</i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;