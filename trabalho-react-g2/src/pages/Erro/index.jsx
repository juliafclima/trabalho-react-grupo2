import React from 'react';
import Header from '../../components/Header';
import "./style.css"

export default function (){
  return (
    <div>
      <Header />
      <div className="erro-container">
        <h1>Erro 404</h1>
        <p>A página que você está procurando não foi encontrada.</p>
        <h1>Mas não se preocupe!</h1>
        <p>Tente novamente, pois erro não é o fim da linha ;)</p>
      </div>
    </div>
  );
};