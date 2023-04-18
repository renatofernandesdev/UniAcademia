//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
//import { Route } from 'react-router-dom';
//import Home from './Home';
//import Home2 from './Home2';
// CARLOS ESSAS PARTES ACIMA É PRA CASO A GENTE IMPLEMENTEAR O ROUTE.

//ESSAS PARTES ABAIXO SÃO AS FUNCIONAIS
import React from "react"
import BootstrapCSS from './bootstrap/css/bootstrap.min.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

var State=true

function App() {
  return (
    <>
      <link href={BootstrapCSS} rel="stylesheet"/>
      <div class="row">
        <div class="col-lg-12 header">
          <Header/>
        </div>
          <div class="col-lg-12 content">
            <Main
            ativo = {State}
            instagram = 'instagram.com/hotelcontinental'
            whatsapp = '(32) 666-999'
            email = 'continental@jhonwick.com'
          />
        </div>
      <div class="col-lg-12">
        <Footer/>
      </div>
      </div>
    </>
  );
}

export default App;