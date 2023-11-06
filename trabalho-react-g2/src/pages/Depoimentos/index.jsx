import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GeradorAleatorio from './GeradorAleatorio';

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

  function calculateElapsedTime(date) {
    const postDate = new Date(date);
    const currentDate = new Date();
    const elapsedTimeInMilliseconds = currentDate - postDate;
    const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${days === 1 ? 'dia' : 'dias'}`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
    } else {
      return `${seconds} ${seconds === 1 ? 'segundo' : 'segundos'}`;
    }
  }

  return (
    <>
      <Header />

      <Link to='/posts'>
        <div className="containerNovoPosts">
          <button className='buttonNovoDepoimento'>Adicionar novo Depoimento</button>
        </div>

      </Link>
      <div className="depoimentos">
        <main>
          <div className="cardsDepoimentos">
            {posts.map((post, key) => {
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
                    <p>Postado {calculateElapsedTime(post.dataPublicacao)} atrás</p>
                  </header>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}