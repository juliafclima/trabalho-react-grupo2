import React from "react";
import "./style.css";
import borracha from "../../assets/img/comunidade/comun1.png";
import garfield from "../../assets/img/comunidade/comun2.png";
import thony from "../../assets/img/comunidade/comun3.png";
import sorvete from "../../assets/img/comunidade/comun4.png";
import xororo from "../../assets/img/comunidade/comun5.png";
import shampoo from "../../assets/img/comunidade/comun6.png";
import comun7 from "../../assets/img/comunidade/comun7.png";
import comun8 from "../../assets/img/comunidade/comun8.png";

import Header from "../../components/Header";

export default function Comunidade() {
  return (
  <div>
      <Header />
      <div className="comunidade">
        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={borracha} alt="" />

            <p>Eu nunca terminei uma borracha.</p>
            <p>(10.852 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1> Eu nunca terminei uma borracha.</h1>

            <p>
              <span>descrição: </span>Borrachas não merecem acabar!
            </p>
            <p>
              <span>idioma: </span>Português
            </p>
            <p>
              <span>categoria: </span>Borrachas
            </p>
            <p>
              <span>dono: </span>Carlucho
            </p>
            <p>
              <span>data: </span>05/11/2011
            </p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={garfield} alt="" />

            <p>Eu odeio acordar cedo.</p>
            <p>(8.852 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Eu odeio acordar cedo.</h1>
            <p>Comunidade auto explicativa.</p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={thony} alt="" />

            <p>Eu colho flores e THONY RAMOS.</p>
            <p>(7.231 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Eu colho flores e TONY RAMOS.</h1>
            <p>E carlucho rega flores.</p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={sorvete} alt="" />

            <p>Queria sorvete mas era feijão.</p>
            <p>(6.001 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Queria sorvete mas era feijão.</h1>
            <p>Quem nunca sofreu essa decepção na vida!?</p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={xororo} alt="" />

            <p>Não sei individualizar duplas.</p>
            <p>(15.871 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Não sei individualizar duplas.</h1>
            <p>Pra mim eles são uma pessoa só e ponto.</p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={shampoo} alt="" />

            <p>Eu leio o shampoo no banho.</p>
            <p>(10.852 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Eu leio o shampoo no banho.</h1>
            <p>É mentira pois eu não enxergo.</p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={comun7} alt="" />

            <p>Antes uma pedra no caminho...</p>
            <p>(10.005 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Antes uma pedra no caminho...</h1>
            <p>Do que duas nos rins!</p>
          </div>
        </div>

        <div className="card">
          <div className="cardimg"></div>
          <div className="grande"></div>

          {/* Card dentro do card */}
          <div className="subCard">
            <img src={comun8} alt="" />

            <p>Eu nunca morri na minha vida.</p>
            <p>(7.852 membros)</p>
            <p>------------------------------</p>
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
          </div>

          <div className="texto">
            <h1>Eu nunca morri na minha vida.</h1>
            <p>E que continue assim...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
