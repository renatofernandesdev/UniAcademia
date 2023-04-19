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
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="E-mail" src={MAIL}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="LinkedIn" src={LINKEDIN}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="Facebook" src={FACEBOOK}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="Instagram" src={INSTAGRAM}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="Twitter" src={TWITTER}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="TikTok" src={TIKTOK}/>
                </a>
            </div><br/><br/>

            <div class="d-none d-lg-block" id="inlineblock">
                <div id="inlineblock" class="">
                    <h4>Institucional</h4><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Sobre nós</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Embaixadores</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Tour Virtual</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Centro de Valores</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Convênios e Parcerias</a><br/>
                </div>
                <div id="inlineblock" class="">
                    <h4>Termos legais</h4><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Termos de uso</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Política e privacidade</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Acessibilade WEB</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Politica de Cookies</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Politica de Cobertura</a><br/>

                </div>
                <div id="inlineblock" class="">
                <h4>Sobre Nós</h4><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Contato </a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Blog</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Notícias</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Eventos</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Contato</a><br/>
                </div>
            </div>

            {/* Recursividade */}

            <div class="d-md-none d-flex justify-content-center">
                <a href="http://encr.pw/hotelcontinental">
                    <img alt="Logo UniAcademia" src={LOGOFOOTER}/>
                </a>
            </div><br />
            
            <div class="d-md-none d-flex justify-content-center">
                <a href="mailto:cesjf@cesjf.br?subject=Contato site">
                    <img class="rede" alt="E-mail" src={MAIL} />
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="LinkedIn" src={LINKEDIN} />
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="Facebook" src={FACEBOOK}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="Instagram" src={INSTAGRAM}/>
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="Twitter" src={TWITTER} />
                </a>
                <a href="http://encr.pw/hotelcontinental">
                    <img class="rede" alt="TikTok" src={TIKTOK} />
                </a>
            </div><br /><br />
            
            <center>
            <div class="d-md-none">
                <div>
                    <h4>Institucional</h4><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Sobre nós</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Embaixadores</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Tour Virtual</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Centro de Valores</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Convênios e Parcerias</a><br/>
                </div>
                <div><br/>
                    <h4>Termos legais</h4><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Termos de uso</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Política e privacidade</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Acessibilade WEB</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Politica de Cookies</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Politica de Cobertura</a><br/>
                </div>
                <div><br/>
                    <h4>Sobre Nós</h4><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Contato </a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Blog</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Notícias</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Eventos</a><br/>
                    <a alt="" href="http://encr.pw/hotelcontinental">Contato</a><br/>
                </div>
            </div>
            </center>
            
            <br/>

        </div>
    );
}

export default Footer