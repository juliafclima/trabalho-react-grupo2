import React from "react";
import "./style.css";

const Card = ({ imgSrc, titulo, descricao, idioma, categoria, tipo, membro, dono, data, }) => {
   return (
      <div className="cardComunidade">
         <div className="subCardComunidade">
            <img src={imgSrc} alt="" />

            <p>{titulo}</p>
            <p>({membro} membros)</p>
            <hr />
            <p>✔️ participar</p>
            <p>👥 convidar amigos</p>
            <p>🚷 denunciar abuso</p>
         </div>

         <div className="textoComunidade">
            <h1>{titulo}</h1>
            <p>
               <span>descrição: </span>
               {descricao}
            </p>
            <p>
               <span>idioma: </span>
               {idioma}

            </p>
            <p>
               <span>categoria: </span>
               {categoria}
            </p>
            <p>
               <span>tipo: </span>
               {tipo}
            </p>
            <p>
               <span>dono: </span>
               {dono}
            </p>
            <p>
               <span>data: </span>
               {data}
            </p>
         </div>
      </div>
   );
};

export default Card;
