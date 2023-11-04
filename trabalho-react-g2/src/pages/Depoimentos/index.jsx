import React from 'react';
import './style.css';

export default function Depoimentos() {
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
          by: Ayla
        </div>
      ),
      imagem: 'src/assets/img/joao.jpg',
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
      imagem: 'src/assets/img/maria.jpg',
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
      imagem: 'src/assets/img/luiza.jpeg',
    },
  ];

  return (
    <>
      <Header />
      <div className="perfil">
        <div className="car-pessoa">
          <div className="car-imagem">
          </div>
          <div className="botoes">
            <button>Perfil</button>
            <button>Album</button>
            <button>Comunidade</button>
          </div>
          <div className="descricao">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in perspiciatis aliquam suscipit aspernatur excepturi, illo dolor rem culpa, veritatis exercitationem porro odio dolorum at est sed voluptatem maxime. Sequi!</p>
          </div>
        </div>
        <div className="depoimentos">
          <h2>Depoimentos de Amigos</h2>
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="depoimento">
              <img src={depoimento.imagem} alt={depoimento.nome} />
              <p>Nome: {depoimento.nome}</p>
              <p>Mensagem: {depoimento.mensagem}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}