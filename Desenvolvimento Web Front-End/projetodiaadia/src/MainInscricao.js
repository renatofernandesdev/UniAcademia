import Carousel from 'react-bootstrap/Carousel';
import IMG1 from './img/img1.jpg'
import IMG2 from './img/img2.png'
import React, {useState} from 'react'

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



<div class="inline-block">
    <label>Selecione seu curso:</label><br/>
</div>
<div class="inline-block">
    <select value={curso} onChange={handleChangeCurso} name="curso">
        <option value="">Selecione</option>
        <option value="Administração">Administração</option>
        <option value="Arquitetura e Urbanismo">Arquitetura e Urbanismo</option>
        <option value="Ciências Biológicas">Ciências Biológicas</option>
        <option value="Design de Interiores">Design de Interiores</option>
        <option value="Design de Moda">Design de Moda</option>
        <option value="Direito">Direito</option>
        <option value="Educação Física">Educação Física</option>
        <option value="Engenharia Elétrica">Engenharia Elétrica</option>
        <option value="Engenharia de Produção">Engenharia de Produção</option>
        <option value="Engenharia de Software">Engenharia de Software</option>
        <option value="Filosofia - Bacharelado">Filosofia - Bacharelado</option>
        <option value="Filosofia - Licenciatura">Filosofia - Licenciatura</option>
        <option value="Fisioterapia">Fisioterapia</option>
        <option value="Gastronomia">Gastronomia</option>
        <option value="Gestão de Recursos Humanos">Gestão de Recursos Humanos</option>
        <option value="Jornalismo">Jornalismo</option>
        <option value="Marketing">Marketing</option>
        <option value="Nutrição">Nutrição</option>
        <option value="Psicologia">Psicologia</option>
        <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
        <option value="Sistemas de Informação">Sistemas de Informação</option>
        <option value="Teologia">Teologia</option>
    </select>

</div>

</div>

    <br/><br/><br/><br/><br/><br/><br/><br/>

      <div class="block">
        <label>Nome: {nome}</label><br/>
        <label>CPF: {cpf}</label><br/>
        <label>RG: {rg}</label><br/>
        <label>Curso: {curso}</label><br/>
      </div>

      <div class="grid">
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