import React from 'react';
import './style.css'; 
import imgPerfil from '../../assets/img/perfil/image.png';
import Header from '../../components/Header';

const Perfil = () => {

    return (
        <>
            <Header />
            <div className="perfil-container">
                <div className="perfil-info">
                    <div className="perfil-left">
                        <img className="perfil-foto" src={imgPerfil} alt="Foto do Usuário" />
                        <h2>Nome do Usuário</h2>
                    </div>
                    <div className="perfil-right">
                        <h3>Relacionamento: Solteiro(a)</h3>
                        <p><strong>Quem sou eu:</strong> Descrição sobre o usuário.</p>
                        <p><strong>País:</strong> Brasil</p>
                        <p><strong>Músicas Favoritas:</strong> Lista de músicas favoritas</p>
                        <p><strong>Filmes:</strong> Lista de filmes favoritos</p>
                        <p><strong>Livros:</strong> Lista de livros favoritos</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Perfil;