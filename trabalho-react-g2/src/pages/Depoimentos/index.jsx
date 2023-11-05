import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';


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

  function DepoimentoPreview({ nome, mensagem }) {
    const previewLength = 100;
    const mensagemPreview = mensagem.props.children[0].substring(0, previewLength) + '...';

    return (
      <div className="depoimento-preview">
        <p>Nome: {nome}</p>
        <p>Mensagem: {mensagemPreview}</p>
      </div>
    );
  }

  const depoimentos = [
    {
      nome: 'João',
      mensagem: (
        <div>
          eu até poderia dizer as palavras mais bonitas que eu conheço
          mas acho que eu não conseguiria expressar tudo o que eu
          sinto por você, estar esse tempo todo do seu lado cada dia
          que passa me faz mais feliz -- Obrigada por TUDO amigo.
          <br />
          Te amo muito ❤️
          <br />
          by: João
        </div>
      ),
      imagem: 'src/assets/img//perfil/joao.jpg',
    },
    {
      nome: 'Maria',
      mensagem: (
        <div>
          • a amizade, é uma força permanente
          não se compra, não se aluga
          não se troca, não se vende
          nasce & morre com a gente.
          Sem palavras para falar como você é especial para mim.
          Você sabe que sem você minha vidinha não teria sentido.
          Sua amizade é muito mais importante. Conte sempre comigo.
          Te amo ❤️
          <br />
          Nossa amizade é eterna, ainda terá uma longa jornada, você vai ver!
          <br />
          Obrigado por tudo!
        </div>
      ),
      imagem: 'src/assets/img/perfil/maria.jpg',
    },
    {
      nome: 'Luiza',
      mensagem: (
        <div>
          amiga..
          Estou aqui para falar do nosso pouco tempo de AMIZADE
          Porque só você me faz ir caminhando de RASTEIRINHA e BOLSA
          Porque só com você eu dou aquelas risadas..
          Porque quando agente se encontra, a gente não para de falar..
          Porque a nossa AMIZADE não é forçada por causa de HOMEM nenhum
          Porque você nesse pouco tempo se tornou mais que especial na minha vidinha.. *-*
          Porque você é minha CÚMPLICE
          São tantos os motivos (:
          Você é uma irmãzona para mim aqui, viu.
          <br />
          Xi, amo muito viu..
          <br />
          ~❤️~
        </div>
      ),
      imagem: 'src/assets/img/perfil/luiza.jpeg',
    },
  ];

  return (
    <>
      <Header />

      <Link to='/posts'>
        <button style={{ marginRight: '20px' }}>Adicionar novo Post</button>
      </Link>
      <div className="depoimentos">
         <h2>Depoimentos de Amigos</h2>
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.titulo}</h2>
                </header>
                <div className="line"></div>

                <p>{post.descricao}</p>

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
              </div>
            );
          })}
        </div>
      </main>
      </div>
     

      {/* <div className="depoimentos">
        
        {depoimentos.map((depoimento, index) => (
          <div key={index} className="depoimento">
            <img src={depoimento.imagem} alt={depoimento.nome} />
            <p>Nome: {depoimento.nome}</p>
            <p>Mensagem: {depoimento.mensagem}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}