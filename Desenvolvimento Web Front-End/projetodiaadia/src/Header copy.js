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
                <DropdownButton id="dropdown-basic-button" title="">
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Sobre</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Serviços</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Portfólio</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</Dropdown.Item>
                </DropdownButton>
              </div>
              <div class="">
                <DropdownButton id="dropdown-basic-button" title="Home">
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Sobre</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Serviços</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Portfólio</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</Dropdown.Item>
                </DropdownButton>
              </div>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Sobre</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Serviços</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Portfólio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link verdematrix" href="https://www.linkedin.com/in/renato-fernandes-10bb86246/">Contato</a>
                  </li>





                </ul>
                <a href="mailto:renatofernandes.dev@gmail.com" alt="E-mail" span class="navbar-text">renatofernandes.dev@gmail.com</a>
              </div>
            </div>
          </nav>
    );
}

export default Header;