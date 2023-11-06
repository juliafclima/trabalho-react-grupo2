import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GeradorAleatorio from './GeradorAleatorio';
import Footer from '../../components/Footer';


export default function Depoimentos() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6542dfe001b5e279de1fabce.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data);
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
                            <button className='buttonDepoimentos'>Editar</button>
                          </Link>
                        </div>
                        <div className="btn-deleteDepoimentos">
                          <button className='buttonDepoimentos' onClick={() => deletePost(post.id)}>Apagar</button>
                        </div>
                      </div>
                    </div>
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