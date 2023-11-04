import React from "react";
import "./style.css";
import Capa from "../../assets/img/comunidade/carlucho.png";
import Lupa from "../../assets/img/comunidade/lupa.jpg";
import violao from "../../assets/img/comunidade/violao.jpg";

export default function Comunidade() {
  return (
    <>
      <Header />
      <div className="comunidade">
        <div className="card">
          <div className="cardimg">
            <img className="morangola" src={Capa} alt="" />
          </div>
          <div className="texto">
            <h1>Eu amo morango! </h1>
            <p>
              Esta comunidade é pra quem ama morangos, máscaras de morangos, doces de morangos, cabelos cor de morango e cheirinho de morango.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="cardimg">
            <img src={violao} alt="" />
          </div>
          <div className="texto">
            <h1>Eu toco mesmo, e daí!? </h1>
            <p>
              Esta comunidade é pra quem tem violões, camisas de violões, bolsinha de violões, chapéu de violões, chinelo de violões e tatuagem de violões.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="cardimg">
            <img src={Lupa} alt="" />
          </div>
          <div className="texto">
            <h1>Professor, aumenta a letra!? </h1>
            <p>
              Esta comunidade é pra quem tem 20 anos mas enxerga menos que um senhor de 324 anos.
            </p>
          </div>
        </div>
      </div >
    </>
  );
}
