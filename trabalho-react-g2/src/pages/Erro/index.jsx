import React from 'react';
import Header from '../../components/Header';
import "./style.css"
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <Header />
      <div className="erro-container">
        <h1 className='error-code'>Erro 404</h1>
        <p className='error-message'>Ops! Parece que você se perdeu</p>
        <h1 className='h1Erro'>Mas não se preocupe!</h1>
        <p className='error-message'>Tente novamente, pois erro não é o fim da linha! ;)</p>
        <Link className="redirect-button" to='/'>Voltar para a Página Principal</Link>
      </div>
      <Footer />
    </div>
  );
};