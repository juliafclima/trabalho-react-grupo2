import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GeradorAleatorio from './GeradorAleatorio';
import Footer from '../../components/Footer';
import WeatherApp from './clima';

export default function Depoimentos() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6542dfe001b5e279de1fabce.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data.reverse());
        console.log(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  function deletePost(id) {
    axios.delete(`https://6542dfe001b5e279de1fabce.mockapi.io/posts/${id}`);
    setPosts(posts.filter(post => post.id !== id));
  }

  function gerarTempoAleatorio() {
    return Math.floor(Math.random() * 60);
  }

  return (
    <>
      <Header />
      <WeatherApp />

      <Link to='/posts'>
        <div className="containerNovoPosts">
          <button className='buttonNovoDepoimento'>Adicionar novo Depoimento</button>
        </div>

      </Link>
      <div className="depoimentos">
        <main>
          <div className="cardsDepoimentos">
            {posts.map((post, key) => {
              const tempoAtras = Math.floor(Math.random() * 60);
              return (
                <div className="cardDepoimentos" key={key}>
                  <header className='headerDepoimentos'>
                    <GeradorAleatorio />
                    <h2>{post.titulo}</h2>
                    <p>{post.conteudo}</p>
                    <div className="btnsDepoimentos">
                      <div className="btnsDepoimentos">
                        <div className="btn-editDepoimentos">
                          <Link to={`/update/${post.id}`}>
                            <button className='buttonDepoimentos'>✏️</button>
                          </Link>
                        </div>
                        <div className="btn-deleteDepoimentos">
                          <button className='buttonDepoimentos' onClick={() => deletePost(post.id)}>🗑️</button>
                        </div>
                      </div>
                    </div>
                    <p>Postado há {tempoAtras} minutos atrás</p>
                  </header>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}