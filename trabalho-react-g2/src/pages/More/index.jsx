import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom/dist';
import axios from 'axios';
import "./style.css";

export default function More() {

  const [more, setMore] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://6542dfe001b5e279de1fabce.mockapi.io/posts/${id}`)
      .then((response) => {
        setMore(response.data);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>{more.titulo}</h2>
            </header>
            <div className="line"></div>
            <p>{more.conteudo}</p>
          </div>
        </div>
      </main >
    </div>
  );
}
