import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LOGOHOTEL from "./img/logohotel.jpg"

function Header() {
  return (


    //LOGO DO HOTEL
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: 'red'}} data-bs-theme="dark">
      <div className="container col-3 col-xs-4">
        <img className="logohotel" src={LOGOHOTEL} alt="Logo do Hotel" />
      </div>



      <div className="container d-flex justify-content-start">
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Ofertas</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="#">Suíte Bordel</a>
            <a className="btn" href="#">Suíte Putaria Pura</a>
            <a className="btn" href="#">Suíte Gouinage</a>
            <a className="btn" href="#">Suíte Masoquismo</a>
            <a className="btn" href="#">Suíte SadoMasoquismo</a>
            <a className="btn" href="#">Trabalhe Conosco</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Quartos e Suítes</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="#">Suíte Executiva</a>
            <a className="btn" href="#">Suíte Profissional</a>
            <a className="btn" href="#">Quartos Personalizados</a>
            <a className="btn" href="#">Quarto Casal</a>
            <a className="btn" href="#">Quarto Solteiro</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Entretenimento</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="#">Parque Aquático</a>
            <a className="btn" href="#">Sala de Esportes</a>
            <a className="btn" href="#">Sauna</a>
            <a className="btn" href="#">Cassino</a>
            <a className="btn" href="#">Bolsas e Financiamentos</a>
            <a className="btn" href="#">Museu</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Institucional</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="#">Sobre nós</a>
            <a className="btn" href="#">Embaixadores</a>
            <a className="btn" href="#">Tour Virtual</a>
            <a className="btn" href="#">Centro de Valores</a>
            <a className="btn" href="#">Convênios e Parcerias</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block">
          <button className="btn btn-secondary dropdown-toggle espaco">Art</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="#">Quadros</a>
            <a className="btn" href="#">Tour Virtual</a>
            <a className="btn" href="#">NFT</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block">
          <button className="btn btn-secondary dropdown-toggle">Contato</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="#">E-Mail</a>
            <a className="btn" href="#">Linked-In</a>
            <a className="btn" href="#">Instagram</a>
            <a className="btn" href="#">Facebook</a>
            <a className="btn" href="#">Tik-Tok</a>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <a href="mailto:continental@johnwick.com" alt="E-mail" span class="navbar-text">continental@johnwick.com</a>
        </div>
      </div>





















{/* ESTE DROPDOWN IRÁ APARECER EM TELA DE CELULAR */}

        <div class="d-lg-none">
        <DropdownButton id="dropdown-basic-button" title="Menu">
          <Dropdown.Item href="https://www.uniacademia.edu.br">Home</Dropdown.Item>
          <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Ofertas</Dropdown.Item>
          <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Quartos e Suítes</Dropdown.Item>
          <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Entretenimento</Dropdown.Item>
          <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Institucinal</Dropdown.Item>
          <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Art</Dropdown.Item>
          <Dropdown.Item href="https://www.uniacademia.edu.br/contato">Contato</Dropdown.Item>
        </DropdownButton>
      </div>



    </nav>
  );
}

export default Header;