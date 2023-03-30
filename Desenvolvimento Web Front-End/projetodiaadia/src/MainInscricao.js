import Carousel from 'react-bootstrap/Carousel';
import IMG1 from './img/img1.jpg'
import IMG2 from './img/img2.png'
import React, {useState} from 'react'


function Main() {
  const [contagem, setContagem] = useState(1)
  const [mensalidade, setMensalidade] = useState(0)
  const manipulaIdade = () => {
    setContagem(contagem + 1)
    if(contagem < 30){
      setMensalidade(1569.17 - ((contagem/100) * 1569.17))
    }
    else{
      setMensalidade((1569.17 - (30/100) * 1569.17))
    }
  }

  return(
    <div>
      <div class="border border-5 border-info">
      <h3>Se increvam para um de nossos cursos.</h3>
      <h7>O desconto é concedido a todos de acordo com a idade.</h7>
      <br/>
      <h5>Idade: {contagem}
      <button onClick={manipulaIdade} type="button" class="btn btn-primary espacoright">Aumentar Idade</button>
      </h5>
      <h5>Mensalidade a pagar: {mensalidade.toFixed(2)} R$</h5>
      <br/>
      </div>
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