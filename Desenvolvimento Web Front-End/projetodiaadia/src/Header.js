import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
              <div class="container-fluid col-xs-4">
              <a class="navbar-brand" href="https://www.linkedin.com/in/renato-fernandes-10bb86246">
              Renato Fernandes | Sw. Engineer</a>
              
               
              <div class="d-lg-none">
                <DropdownButton id="dropdown-basic-button" title="Home">
                  <Dropdown.Item href="https://www.uniacademia.edu.br">Home</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Institucional</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Campi</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Cursos</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Serviços</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Acesso</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Informação</Dropdown.Item>
                  <Dropdown.Item href="https://www.uniacademia.edu.br/blog">Blog</Dropdown.Item>
                  <Dropdown.Item href="https://www.uniacademia.edu.br/contato">Contato</Dropdown.Item>
                </DropdownButton>
              </div>

              <div class="dropdown d-none d-lg-block">
                <a href="http://localhost:3000"><button class="dropbtn">Home</button></a>
                <div class="dropdown-content">
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
                <button class="dropbtn">Institucional</button>
                <div class="dropdown-content">
                  <a href="https://www.uniacademia.edu.br/institucional/sobre-nos">Sobre nós</a>
                  <a href="https://lp.saberemrede.net/uniacademia">Embaixadores UniAcademia</a>
                  <a href="https://www.uniacademia.edu.br/tour-virtual">Tour Virtual</a>
                  <a href="https://www.uniacademia.edu.br/institucional/formas-de-ingresso">Formas de Ingresso</a>
                  <a href="https://www.uniacademia.edu.br/institucional/bolsas-e-parcelamentos">Bolsas e Financiamentos</a>
                  <a href="https://redeverbita.gupy.io/">Trabalhe Conosco</a>
                  <a href="https://www.uniacademia.edu.br/institucional/museu">Museu</a>
                  <a href="https://www.uniacademia.edu.br/institucional/centro-de-valores">Centro de Valores</a>
                  <a href="http://www.uniacademia.edu.br/institucional/avaliacao-institucional-cpa">Avaliação Institucional - CPA</a>
                  <a href="https://www.uniacademia.edu.br/institucional/calendario-academico">Calendário Acadêmico</a>
                  <a href="https://www.uniacademia.edu.br/institucional/convenios-e-parcerias">Convênios e Parcerias</a>
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
                <button class="dropbtn">Campi</button>
                <div class="dropdown-content">
                  <a href="https://www.uniacademia.edu.br/unidade/academia">Academia</a>
                  <a href="https://www.uniacademia.edu.br/unidade/arnaldo-janssen">Arnaldo Jansen</a>
                  <a href="https://www.uniacademia.edu.br/unidade/seminario-santo-antonio">Seminário Santo Antônio</a>
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
                <button class="dropbtn">Cursos</button>
                <div class="dropdown-content">
                  <a href="https://www.uniacademia.edu.br/cursos-graduacao?modalidade=presencial">Graduação</a>
                  <a href="https://www.uniacademia.edu.br/cursos-pos-graduacao?modalidade=presencial">Pós-Graduação</a>
                  <a href="https://www.uniacademia.edu.br/cursos-extensao">Extensão</a>
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
                <button class="dropbtn">Serviços</button>
                <div class="dropdown-content">
                  <a href="https://www.uniacademia.edu.br/institucional/biblioteca">Biblioteca</a>
                  <a href="http://webces.cesjf.br:8080/sistemas/declaracaoOnline/">Certificados</a>
                  <a href="https://www.uniacademia.edu.br/institucional/comite-de-etica-em-pesquisa">Comitê de Ética em Pesquisa (CEP)</a>
                  <a href="https://www.uniacademia.edu.br/institucional/estagio">Estágio</a>
                  <a href="https://www.uniacademia.edu.br/institucional/pesquisa-e-extensao">Extensão e Pesquisa</a>
                  <a href="https://www.uniacademia.edu.br/institucional/secretaria">Secretaria</a>
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
                <button class="dropbtn">Acesso</button>
                <div class="dropdown-content">
                  <a href="https://portal.svdesdeva.com.br/modulos/aluno/login.php5">Portal do Aluno</a>
                  <a href="https://svdesdeva.instructure.com/login/canvas">AVA - Canvas</a>
                  <a href="https://portal.svdesdeva.com.br/modulos/professor/login.php5">Portal do Professor</a>
                  <a href="https://portal.svdesdeva.com.br/modulos/secretaria/login.php5">Secretaria</a>
                  <a href="https://login.microsoftonline.com/">Webmail</a>
                  <a href="https://seer.uniacademia.edu.br/">Periódicos</a>
                  <a href="https://bib.svdesdeva.com.br:8086/pergamum/biblioteca/index.php">Acervo da Biblioteca</a>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=uKRPEC-FvUCukHpbMNua5ZPlnE4acoBKl3pZlFqygS1UMzNBNDczVDcxSkM4TU82WDgyTkRST1ZTQi4u">Demandas Ascom</a>
                  <a href="https://assets.website-files.com/5cf95301995e8c48a8880a69/6171af51b22a0e7fa18eb6aa_Banco_de_Registro_de_Diploma_UniAcademia_-_2021.pdf">Dados de Registro de Diplomas</a>
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
                <button class="dropbtn">Informação</button>
                <div class="dropdown-content">
                  <a href="https://www.uniacademia.edu.br/noticias">Notícias</a>
                  <a href="https://www.uniacademia.edu.br/e-books">E-books</a>
                  <a href="https://www.uniacademia.edu.br/eventos">Eventos</a>
                  <a href="https://www.uniacademia.edu.br/na-midia">Na mídia</a>
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
              <a href="https://www.uniacademia.edu.br/blog"><button class="dropbtn">Blog</button></a>
                <div class="dropdown-content">
                </div>
              </div>
              <div class="dropdown d-none d-lg-block">
              <a href="https://www.uniacademia.edu.br/contato"><button class="dropbtn">Contato</button></a>
                <div class="dropdown-content">
                </div>
              </div>

              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <a href="mailto:renatofernandes.dev@gmail.com" alt="E-mail" span class="navbar-text">renatofernandes.dev@gmail.com</a>
              </div>
            </div>
          </nav>
    );
}

export default Header;