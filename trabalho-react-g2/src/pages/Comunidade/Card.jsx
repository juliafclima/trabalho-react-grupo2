import React from "react";
import "./style.css";

const Card = ({
  imgSrc,
  titulo,
  descricao,
  idioma,
  categoria,
  tipo,
  membro,
  dono,
  data,
  piquininim,
}) => {
  return (
    <div className="cardComunidade">
      <div className="subCardComunidade">
        <img src={imgSrc} alt="" />
        <p>
          {" "}
          <strong>{titulo}</strong>{" "}
        </p>
        <p>({membro} membros)</p>
        <hr />
        <p className="cardLinkComunidade">✔️ participar</p>
        <p className="cardLinkComunidade">👥 convidar amigos</p>
        <p className="cardLinkComunidade">🚷 denunciar abuso</p>
      </div>

      <div className="textoComunidade">
        <h1>{titulo}</h1>
        <p className="piquininim">{piquininim}</p>
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
