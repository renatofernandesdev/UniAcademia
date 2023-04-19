import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LOGOHOTEL from "./img/logohotel.jpg"

function Header() {
  return (


    //LOGO DO HOTEL
    <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{backgroundColor: 'red'}} data-bs-theme="dark">
      <div className="container col-3 col-xs-4 d-none d-lg-block">
        <img className="logohotel" src={LOGOHOTEL} alt="Logo do Hotel" />
      </div>
    
    {/* Logo Recursividade */}
      <div className="container col-8 col-xs-4 d-md-none">
        <img className="logohotel" src={LOGOHOTEL} alt="Logo do Hotel" />
      </div>

    {/* Menu Recursivo */}

      <div class="d-lg-none">
        <DropdownButton id="dropdown-basic-button" title="Menu">
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Home</Dropdown.Item>
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Ofertas</Dropdown.Item>
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Quartos e Suítes</Dropdown.Item>
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Entretenimento</Dropdown.Item>
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Institucinal</Dropdown.Item>
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Art</Dropdown.Item>
          <Dropdown.Item href="http://encr.pw/hotelcontinental">Contato</Dropdown.Item>
        </DropdownButton>
      </div>



      <div className="container d-flex justify-content-start">
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Ofertas</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte Bordel</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte Putaria Pura</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte Gouinage</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte Masoquismo</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte SadoMasoquismo</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Trabalhe Conosco</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Quartos e Suítes</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte Executiva</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Suíte Profissional</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Quartos Personalizados</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Quarto Casal</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Quarto Solteiro</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Entretenimento</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="http://encr.pw/hotelcontinental">Parque Aquático</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Sala de Esportes</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Sauna</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Cassino</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Bolsas e Financiamentos</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Museu</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block espaco">
          <button className="btn btn-secondary dropdown-toggle">Institucional</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="http://encr.pw/hotelcontinental">Sobre nós</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Embaixadores</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Tour Virtual</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Centro de Valores</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Convênios e Parcerias</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block">
          <button className="btn btn-secondary dropdown-toggle espaco">Art</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="http://encr.pw/hotelcontinental">Quadros</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Tour Virtual</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">NFT</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block">
          <button className="btn btn-secondary dropdown-toggle">Contato</button>
          <div className="btn dropdown-content drop_btn">
            <a className="btn" href="http://encr.pw/hotelcontinental">E-Mail</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Linked-In</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Instagram</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Facebook</a>
            <a className="btn" href="http://encr.pw/hotelcontinental">Tik-Tok</a>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <a href="mailto:continental@johnwick.com" alt="E-mail" span class="navbar-text">continental@johnwick.com</a>
        </div>
      </div>






    </nav>
  );
}

export default Header;