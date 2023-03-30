import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from './img/img1.jpg'
import IMG2 from './img/img2.png'

function Main(props) {
  return (
    <div class="row">
      <h1>Seja bem vindo ao nosso site</h1>
      <h2>Siga-nos nas redes sociais:</h2>
      <p>Instagram: {props.instagram}</p>
      <p>Whatsapp: {props.whatsapp}</p>

      <Carousel fade>
        <Carousel.Item>
        <a href="https://www.uniacademia.edu.br/vestibular#informacoes"><img
            className="d-block w-100"
            src={IMG1}
            alt="Primeiro slide"
          /></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.uniacademia.edu.br/tour-virtual"><img
            className="d-block w-100"
            src={IMG2}
            alt="Segundo slide"
          /></a>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Main;