import React from 'react';
import Header from '../../components/Header';
import "./style.css"
import Footer from '../../components/Footer';


export default function (){
  return (
    <div>
      <Header />
      <div className="erro-container">
        <h1 className='h1Erro'>Erro 404</h1>
        <p className='pErro'>A página que você está procurando não foi encontrada.</p>
        <h1 className='h1Erro'>Mas não se preocupe!</h1>
        <p className='pErro'>Tente novamente, pois erro não é o fim da linha ;)</p>
      </div>
      <Footer />
    </div>
  );
};