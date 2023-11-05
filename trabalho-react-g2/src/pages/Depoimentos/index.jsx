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
        <button style={{ marginRight: '20px' }}>Adicionar novo Depoimento</button>
      </Link>
      <div className="depoimentos">
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <GeradorAleatorio />
                  <h2>{post.titulo}</h2>
                  <p>{post.conteudo}</p>
                  <div className="btns">
                  <div className="btn-edit">
                    <Link to={`/update/${post.id}`}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deletePost(post.id)}>Apagar</button>
                  </div>
                </div>
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