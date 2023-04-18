import React from "react"
import LOGOFOOTER from './img/logofooter.jpg'
import MAIL from './img/mail.png'
import LINKEDIN from './img/linkedin.png'
import FACEBOOK from './img/facebook.svg'
import INSTAGRAM from './img/instagram.svg'
import TWITTER from './img/twitter.svg'
import TIKTOK from './img/tiktok.png'


function Footer() {
    return (
        <div id="">
            <div class="d-none d-lg-block logofooter">
                <a href="#/">
                    <img alt="Logo Continental" src={LOGOFOOTER}/>
                </a>
            </div><br />
            
            <div class="d-none d-lg-block redes">
                <a href="#">
                    <img class="rede" alt="E-mail" src={MAIL}/>
                </a>
                <a href="#">
                    <img class="rede" alt="LinkedIn" src={LINKEDIN}/>
                </a>
                <a href="#">
                    <img class="rede" alt="Facebook" src={FACEBOOK}/>
                </a>
                <a href="#">
                    <img class="rede" alt="Instagram" src={INSTAGRAM}/>
                </a>
                <a href="#">
                    <img class="rede" alt="Twitter" src={TWITTER}/>
                </a>
                <a href="#">
                    <img class="rede" alt="TikTok" src={TIKTOK}/>
                </a>
            </div><br/><br/>

            <div class="d-none d-lg-block" id="inlineblock">
                <div id="inlineblock" class="">
                    <h4>Institucional</h4><br/>
                    <a alt="" href="#">Sobre nós</a><br/>
                    <a alt="" href="#">Embaixadores</a><br/>
                    <a alt="" href="#">Tour Virtual</a><br/>
                    <a alt="" href="#">Centro de Valores</a><br/>
                    <a alt="" href="#">Convênios e Parcerias</a><br/>
                </div>
                <div id="inlineblock" class="">
                <h4>Termos legais</h4><br/>
                    <a alt="" href="#">Termos de uso</a><br/>
                    <a alt="" href="#">Política e privacidade</a><br/>
                    <a alt="" href="#">Acessibilade WEB</a><br/>
                    <a alt="" href="#">Politica de Cookies</a><br/>
                    <a alt="" href="#">Politica de Cobertura</a><br/>

                </div>
                <div id="inlineblock" class="">
                <h4>Sobre Nós</h4><br/>
                    <a alt="" href="#">Contato </a><br/>
                    <a alt="" href="#">Blog</a><br/>
                    <a alt="" href="#">Notícias</a><br/>
                    <a alt="" href="#">Eventos</a><br/>
                    <a alt="" href="#">Contato</a><br/>
                </div>
            </div>

            <div class="d-md-none d-flex justify-content-center">
                <a href="#">
                    <img alt="Logo UniAcademia" src={LOGOFOOTER}/>
                </a>
            </div><br />
            
            <div class="d-md-none d-flex justify-content-center">
                <a href="mailto:cesjf@cesjf.br?subject=Contato site">
                    <img class="rede" alt="E-mail" src={MAIL} />
                </a>
                <a href="#/">
                    <img class="rede" alt="LinkedIn" src={LINKEDIN} />
                </a>
                <a href="#">
                    <img class="rede" alt="Facebook" src={FACEBOOK}/>
                </a>
                <a href="#">
                    <img class="rede" alt="Instagram" src={INSTAGRAM}/>
                </a>
                <a href="#">
                    <img class="rede" alt="Twitter" src={TWITTER} />
                </a>
                <a href="#">
                    <img class="rede" alt="TikTok" src={TIKTOK} />
                </a>
            </div><br /><br />
            
            {/* Recursividade */}

            <center>
            <div class="d-md-none">
                <div>
                    <h4>Institucional</h4><br/>
                    <a href="#">A Instituição</a><br/>
                    <a href="#">Campi</a><br/>
                    <a href="#">Formas de Ingresso</a><br/>
                    <a href="#">Bolsas e Financiamentos</a><br/>
                    <a href="#">Calendário Acadêmico</a><br/>
                </div>
                <div><br/>
                    <h4>Termos legais</h4><br/>
                    <a href="#">Termos de uso</a><br/>
                    <a href="#">Politica e privacidade</a><br/>
                    <a href="#">Formas de Ingresso</a><br/>
                    <a href="#">Bolsas e Financiamentos</a><br/>
                    <a href="#">Calendário Acadêmico</a><br/>
                </div>
                <div><br/>
                    <h4>Sobre Nós</h4><br/>
                    <a href="#">Contato </a><br/>
                    <a href="#">Blog</a><br/>
                    <a href="#">Notícias</a><br/>
                    <a href="#">Eventos</a><br/>
                    <a href="#">Contato</a><br/>
                </div>
            </div>
            </center>
            
            <br/>

        </div>
    );
}

export default Footer