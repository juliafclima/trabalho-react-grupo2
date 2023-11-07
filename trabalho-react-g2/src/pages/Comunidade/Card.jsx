import React, { useState } from "react";
import "./style.css";
import ReactConfetti from "react-confetti";

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
  const [exibirConfetes, setExibirConfetes] = useState(false);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });

  const handleParticiparClick = () => {
    
    const x = 300; 
    const y = 200; 

    setConfettiPosition({ x, y });
    setExibirConfetes(true);
  };

  return (
    <div className="cardComunidade">
      <div className="subCardComunidade">
        <div className="imagemComunidadeCentralizada">
          <img src={imgSrc} alt="" className="imagemComunidade"/>
        </div>
        
        <p>
          <strong className="tituloComunidade">{titulo}</strong>
        </p>
        <p>({membro} membros)</p>
        <hr />
        <p className="cardLinkComunidade" onClick={handleParticiparClick}>
          ✔️ participar
        </p>

        <p className="cardLinkComunidade">👥 convidar amigos</p>
        <p className="cardLinkComunidade">🚷 denunciar abuso</p>
      </div>

      <div className="textoComunidade">
        {exibirConfetes && (
          <ReactConfetti
            // numberOfPieces={100} // Número de confettis
            recycle={false} // Evita que os confettis reapareçam após a animação inicial
            // initialVelocityX={1} // Velocidade inicial no eixo X
            // initialVelocityY={5} // Velocidade inicial no eixo Y
            width={window.innerWidth}
            height={window.innerHeight *9}
            // confettiSource={confettiPosition} // Usa a posição personalizada do confetti
          />
        )}
        <h1>{titulo}</h1>
        <p className="piquininim">{piquininim}</p>
        <p>
          <span className="descricao">descrição: </span>
          <span className="tituloVertical">{descricao}</span>
        </p>
        <p>
          <span className="descricao">idioma: </span>
          <span className="tituloVertical">{idioma}</span>
        </p>
        <p>
          <span className="descricao">categoria: </span>
          <span className="tituloVertical">{categoria}</span>
        </p>
        <p>
          <span className="descricao">tipo: </span>
          <span className="tituloVertical">{tipo}</span>
        </p>
        <p>
          <span className="descricao">dono: </span>
          <span className="tituloVertical">{dono}</span>
        </p>
        <p>
          <span className="descricao">data: </span>
          <span className="tituloVertical">{data}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
