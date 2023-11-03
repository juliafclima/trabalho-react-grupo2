import React from "react";
import "./style.css";
import Capa from "../../assets/img/comunidade/carlosmorango.png";

export default function Comunidade() {
  return (
    <div className="comunidade">
   
        <div className="card">
          <div className="cardimg">
            <img src={Capa} alt="" />
          </div>
          <div className="texto">
            <h1>Comunidade</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quidem quasi, quod quibusdam quae, quas, quasi, quaerat
              quidem quasi, quod quibusdam quae.
            </p>
          </div>
        </div>
      </div>
   
  );
}
