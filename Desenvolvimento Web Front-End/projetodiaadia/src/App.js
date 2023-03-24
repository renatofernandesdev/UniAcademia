import React from "react"
import BootstrapCSS from './bootstrap/css/bootstrap.min.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import './MeuCSS.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Main from './Main';

function App() {
  return (

    <html>
      <head>
        <script async src='http://code.jquery.com/jquery-2.1.3.min.js'></script>
        <script async src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script>
        <link href={BootstrapCSS} rel="stylesheet"></link>
        <title>Renato Fernandes | Sw. Engineer | Full Stack Developer</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
        <body>
          <div class="row">
            <div class="col-lg-12 header">
              <Header/>
            </div>
          </div>
          <div class="row espaco menudireita">
            <div class="col-lg-3 menu">
              <Aside/>
            </div>
            <div class="col-lg-9 content">
              <Main
                instagram = 'instagram.com/renatodw'
                whatsapp = '(32) 98484-5162'
              />
            </div>
          </div>
          <div class="row espaco">
            <div class="col-lg-12 footer">
              <Footer/>
            </div>
          </div>
        </body>
    </html>
  );
}

export default App;