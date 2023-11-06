import React, { useState } from 'react';
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
    // Defina as coordenadas personalizadas onde você deseja que o confetti apareça na tela
    const x = 300; // Valor personalizado para a posição X
    const y = 200; // Valor personalizado para a posição Y

    // Atualize a posição do confetti com as coordenadas personalizadas
    setConfettiPosition({ x, y });

    // Ativa a exibição do confetti
    setExibirConfetes(true);
  };
  
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
        <p className="cardLinkComunidade" onClick={handleParticiparClick}>
          ✔️ participar
        </p>
        {exibirConfetes && (
          <ReactConfetti
            numberOfPieces={100} // Número de confettis
            recycle={false} // Evita que os confettis reapareçam após a animação inicial
            initialVelocityX={1} // Velocidade inicial no eixo X
            initialVelocityY={5} // Velocidade inicial no eixo Y
            width={window.innerWidth}
            height={window.innerHeight}
            confettiSource={confettiPosition} // Usa a posição personalizada do confetti
          />
        )}

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
