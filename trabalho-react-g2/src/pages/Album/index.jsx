import React from 'react';
import './style.css';
// import imgLizz from '../../assets/img/lizz.jpeg';

export default function Album() {
  //const url = 'https://loremflickr.com/200/201';
  const fotos = [
    'imgLizz',
    'imgLizz',
    'imgLizz',
    // Adicione mais fotos conforme necessário
  ];

  let fotoAtual = 1;

  function mudarFoto(n) {
    mostraFotos(fotoAtual += n);
  }

  function mostraFotos(n) {
    let i;
    const fotos = document.getElementsByClassName("foto");
    if (n > fotos.length) { fotoAtual = 1; }
    if (n < 1) { fotoAtual = fotos.length; }
    for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";
    }
    fotos[fotoAtual - 1].style.display = "block";
  }

  return (
    <>
      <Header />
      <div className="album">
        <p>qlqr coisa</p>
        <div className="w3-content w3-display-container">
          {fotos.map((foto, index) => (
            <div key={index} className="foto" style={{ backgroundImage: `url(${foto})` }}></div>
          ))}
          <button className="w3-button w3-black w3-display-left" onClick={() => mudarFoto(-1)}>&#10094;</button>
          <button className="w3-button w3-black w3-display-right" onClick={() => mudarFoto(1)}>&#10095;</button>
        </div>
      </div></>
  );
}
