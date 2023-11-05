import React from "react";
import "./style.css";

const Card = ({ imgSrc, titulo, descricao, membro, dono, data }) => {
   return (
      <div className="card">
         <div className="subCard">
            <img src={imgSrc} alt="" />

            <p>{titulo}</p>
            <p>({membro} membros)</p>
            <hr />
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
         </div>

         <div className="texto">
            <h1>{titulo}</h1>
            <p>
               <span>Descrição: </span>
               {descricao}
            </p>
            <p>
               <span>Dono: </span>
               {dono}
            </p>
            <p>
               <span>Data: </span>
               {data}
            </p>
         </div>
      </div>
   );
};

export default Card;
