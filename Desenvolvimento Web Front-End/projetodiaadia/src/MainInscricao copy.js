import Carousel from 'react-bootstrap/Carousel';
import IMG1 from './img/img1.jpg'
import IMG2 from './img/img2.png'
import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Main() {
  const [contagem, setContagem] = useState(1)
  const [mensalidade, setMensalidade] = useState(1569.17)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')
  const [curso, setCurso] = useState('')
  const [updatedNome, setUpdatedNome] = useState(nome)
  const [updatedCpf, setUpdatedCpf] = useState(cpf)
  const [updatedRg, setUpdatedRg] = useState(rg)
  const [updatedCurso, setUpdatedCurso] = useState(curso)


  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeCPF = (event) => {
      setCpf(event.target.value);
  };

  const handleChangeRG = (event) => {
    setRg(event.target.value);
  };

  const handleChangeCurso = (event) => {
    setCurso(event.target.value);
  };

  const handleClick = () => {
    //"mensagem" armazenada no campo input
    setUpdatedNome(nome);
    setUpdatedCpf(cpf);
    setUpdatedRg(rg);
    setUpdatedCurso(curso);
  }

  //MANIPULA IDADE
  const manipulaIdade = () => {
   
    setContagem(contagem + 1)
    if(contagem < 30){
      setMensalidade(1569.17 - ((contagem/100) * 1569.17))
    }
    else{
      setMensalidade((1569.17 - (30/100) * 1569.17))
    }
  };

  const diminuiIdade = () => {

  if (contagem === 1){
    setMensalidade(1569.17)
    }
  else if (contagem >= 30){
    setContagem(contagem - 1)
    setMensalidade((1569.17 - (30/100) * 1569.17))
    }
  else{
    setContagem(contagem - 1)
    setMensalidade(1569.17 - ((contagem/100) * 1569.17))
    }

  };

  return(
    <div>
      <div class="border border-5 border-info">
        <h3>Se increvam para um de nossos cursos.</h3>
        <h7>O desconto é concedido a todos de acordo com a idade.</h7>
        <br/>
        <h5>Idade: {contagem}
        <button onClick={manipulaIdade} type="button" class="btn btn-primary espacoright">Aumentar Idade</button>
        <button onClick={diminuiIdade} type="button" class="btn btn-primary espacoright">Diminuir Idade</button>
        </h5>
        <h5>Mensalidade a pagar: {mensalidade.toFixed(2)} R$</h5>
        <br/>
      
        <div class="card updated right">
          <div class="card-header">
            Cadastro
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nome: {updatedNome}</li>
            <li class="list-group-item">CPF: {updatedCpf}</li>
            <li class="list-group-item">RG: {updatedRg}</li>
            <li class="list-group-item">Curso: {updatedCurso}</li>
          </ul>
        </div>

        <div class="formulario left inline-block">
          <label>Digite seu Nome: </label>
          <div class="form-floating mb-3 inline-block">
            <input type="text" class="form-control" id="nome" placeholder=""
                    onChange={handleChangeNome}
                    value={nome}
            />
            <label for="nome">Nome</label>
          </div><br/>


          <label>Digite seu CPF:-- </label>
          <div class="form-floating mb-3 inline-block">
            <input type="text" class="form-control" id="cpf" placeholder="name@example.com"
                    onChange={handleChangeCPF}
                    value={cpf}
            />
            <label for="cpf">CPF</label>
          </div><br/>


          <label>Digite seu RG:--- </label>
          <div class="form-floating mb-3 inline-block">
            <input type="text" class="form-control" id="rg" placeholder="name@example.com"
                    onChange={handleChangeRG}
                    value={rg}
            />
            <label for="rg">RG</label>
          </div><br/>

          <div class="form-floating mb-3 inline-block">
          <label>Selecione seu Curso:---- </label>


    <select name="plataforma">
        <option value="">Escolha uma plataforma de jogos</option>
        <option value="xbox">Xbox Series</option>
        <option value="ps5">PS5</option>
        <option value="nsw">Nintendo Switch</option>
        <option value="pcg">PC Gaming</option>
    </select>




            <>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  teste
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item value={curso} onToggle={handleChangeCurso} active>
                    Engenharia
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Filosofia</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Nutrição</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Teste</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>



            <input type="text" class="form-control" id="curso" placeholder="name@example.com"
                    onChange={handleChangeCurso}
                    value={curso}
            />
            <label for="curso">Curso</label>
            
          </div>
      
    </div>

      <br/>

      <div>
        <label>Nome: {nome}</label><br/>
        <label>CPF: {cpf}</label><br/>
        <label>RG: {rg}</label><br/>
        <label>Curso: {curso}</label><br/>
        <button onClick={handleClick} type="button" class="btn btn-success">Increver</button>
      </div>




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