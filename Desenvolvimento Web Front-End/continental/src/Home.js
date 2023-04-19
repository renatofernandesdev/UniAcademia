import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from './img/img1.jpg'
import IMG2 from './img/img2.jpg'
import IMG3 from './img/img3.jpg'
import IMG4 from './img/img4.jpg'
import IMG5 from './img/img5.jpg'

function Main() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeCPF = (event) => {
      setCpf(event.target.value);
  };

  const handleChangeRG = (event) => {
    setRg(event.target.value);
  };

  //Calculo da mensalidade
  const [cama, setCama] = useState('Padrão')
  const [contagem, setContagem] = useState(1)
  const [mensalidade, setMensalidade] = useState(calculaMensalidade(contagem))

  function calculaMensalidade(n,tipo=cama) {
    var valor=0
    if (tipo==="Clássico"){
      valor=150
    }
    else if (tipo==="Executivo"){
      valor=200
    }
    else if (tipo==="Presidencial"){
      valor=250
    } else {
      valor=100
    }
    return 100 + n * valor;
  }

  const changeCama = (valor_cama) => {
    setCama(valor_cama);
    setMensalidade(calculaMensalidade(contagem,valor_cama))
  }

  //Manipular contagem de quartos
  const aumentarCama = () => {
    var n=contagem
    if (contagem !== 4) {
      n=n+1;
    }
    setContagem(n);
    setMensalidade(calculaMensalidade(n));
  };

  const diminuirCama = () => {
    var n=contagem
    if (contagem !==1 ) {
      n=n-1;
    }
    setContagem(n);
    setMensalidade(calculaMensalidade(n));
  };

  //Botao Reservar
  const [updatedNome, setUpdatedNome] = useState(nome)
  const [updatedCpf, setUpdatedCpf] = useState(cpf)
  const [updatedRg, setUpdatedRg] = useState(rg)
  const [updatedCama, setUpdatedCama] = useState(cama)
  const handleClick = () => {
    //"mensagem" armazenada no campo input
    setUpdatedNome(nome);
    setUpdatedCpf(cpf);
    setUpdatedRg(rg);
    setUpdatedCama(cama);
  }

  return(

    <div class="border border-5 border-info home_border">

      <Carousel fade>
        <Carousel.Item>
          <a href="http://encr.pw/hotelcontinental">
            <img className="d-block w-100" src={IMG1} alt="Primeiro slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://encr.pw/hotelcontinental">
            <img className="d-block w-100" src={IMG2} alt="Segundo slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://encr.pw/hotelcontinental">
            <img className="d-block w-100" src={IMG3} alt="Terceiro slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://encr.pw/hotelcontinental">
            <img className="d-block w-100" src={IMG4} alt="Quarto slide"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a alt="" href="http://www.google.com.br">
            <img className="d-block w-100" src={IMG5} alt="Quinto slide"/>
          </a>
        </Carousel.Item>
      </Carousel>

      <h2>Veja o preço de seu quarto de acordo com a quantidade de camas.</h2>
      <h6>OBS: Máximo de 4 camas de solteiro</h6>


      <img alt="" class="fundo" src="./img/fundo.jpg"></img>


      {/* Selecionar o tipo de quarto */}
      <div>
        <div class="inline-block">
          <h4><label>Selecione seu quarto:</label></h4>
        </div>
        <div className="inline-block">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle btn1">{cama}</button>
            <div className="btn dropdown-content drop_btn btn1">
              <button className='btn btn-secondary' onClick={() =>changeCama("Padrão")}>Padrão</button>
              <button className='btn btn-secondary' onClick={() =>changeCama("Clássico")}>Clássico</button>
              <button className='btn btn-secondary' onClick={() =>changeCama("Executivo")}>Executivo</button>
              <button className='btn btn-secondary' onClick={() =>changeCama("Presidencial")}>Presidencial</button>
            </div>
          </div>
        </div><br/><br/>
        {/* Seleção de Quantidade de Camas */}
        <div class="d-none d-lg-block">
          <h5>Camas de solteiro: {contagem}
          <button onClick={aumentarCama} type="button" class="btn btn-primary espacoright btn1">Aumentar Cama</button>
          <button onClick={diminuirCama} type="button" class="btn btn-primary espacoright btn1">Diminuir Cama</button>
          </h5>
          <h4>Diária: R${mensalidade.toFixed(2)}</h4>
        </div>
        {/* Seleção de Quantidade de Camas Recursiva */}
        <div class="d-md-none">
          <h5>Camas de solteiro: {contagem}<br/><br/>
          <button onClick={aumentarCama} type="button" class="btn btn-primary espacoright btn1">Aumentar Cama</button>
          <button onClick={diminuirCama} type="button" class="btn btn-primary espacoright btn1">Diminuir Cama</button>
          </h5><br/>
          <h4>Diária: R${mensalidade.toFixed(2)}</h4><br/>
        </div>
      </div>

      {/* Mostra Nome,CPF,RG e Cama */}
      <div class="card updated right d-none d-lg-block">
        <div class="card-header">
          Cadastro da reserva
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nome: {updatedNome}</li>
          <li class="list-group-item">CPF: {updatedCpf}</li>
          <li class="list-group-item">RG: {updatedRg}</li>
          <li class="list-group-item">Cama: {updatedCama}</li>
        </ul>
      </div>

      {/* Mostra Nome,CPF,RG e Cama Recursivo */}
      <div class="card updatedrecursive d-md-none">
        <div class="card-header">
          Cadastro da reserva
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nome: {updatedNome}</li>
          <li class="list-group-item">CPF: {updatedCpf}</li>
          <li class="list-group-item">RG: {updatedRg}</li>
          <li class="list-group-item">Cama: {updatedCama}</li>
        </ul>
      </div><br/><br/>

      <div class="formulario left inline-block">

        <label>Digite seu Nome:</label>
        <div class="form-floating mb-3 inline-block">
          <input type="text" class="" id="nome" placeholder="Nome"
                  onChange={handleChangeNome}
                  value={nome}
          />
        </div><br/>

        <label>Digite seu CPF:</label>
        <div class="form-floating mb-3 inline-block">
          <input type="text" class="" id="cpf" placeholder="***.***.***-**"
                  onChange={handleChangeCPF}
                  value={cpf}
          />
        </div><br/>

        <label>Digite seu RG:</label>
        <div class="form-floating mb-3 inline-block">
          <input type="text" class="" id="rg" placeholder="**-**.***.***"
                  onChange={handleChangeRG}
                  value={rg}
          />
        </div><br/>

      </div>

      <br/><br/><br/><br/><br/><br/>

      <div class="block">
        <label>Construção do Formulário</label><br/>
        <label>Nome: {nome}</label><br/>
        <label>CPF: {cpf}</label><br/>
        <label>RG: {rg}</label><br/>
        <label>Cama: {cama}</label><br/>
      </div>

      <div class="grid">
        <button onClick={handleClick} type="button" class="btn btn-success">Reservar</button>
      </div>

    </div>

  );
}

export default Main;