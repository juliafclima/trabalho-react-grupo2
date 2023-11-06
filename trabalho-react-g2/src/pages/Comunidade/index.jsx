import React from "react";
import "./style.css";
import Card from "./Card";

import Header from "../../components/Header";
import borracha from "../../assets/img/comunidade/comun1.png";
import garfield from "../../assets/img/comunidade/comun2.png";
import thony from "../../assets/img/comunidade/comun3.png";
import sorvete from "../../assets/img/comunidade/comun4.png";
import xororo from "../../assets/img/comunidade/comun5.png";
import shampoo from "../../assets/img/comunidade/comun6.png";
import comun7 from "../../assets/img/comunidade/comun7.png";
import comun8 from "../../assets/img/comunidade/comun8.png";
import carlucho from "../../assets/img/comunidade/carlucho.png";
import lupa from "../../assets/img/comunidade/lupa.jpg";
import violao from "../../assets/img/comunidade/violao.jpg";
import Footer from '../../components/Footer';


const comunidades = [
  {
    imgSrc: carlucho,
    titulo: "Nós amamos morangos!",
    piquininim: "início > comunidades > pessoas",
    descricao: "Quem discordar está errado.",
    idioma: "Português",
    categoria: "Fruta",
    tipo: "Pública",

    membro: 6987,
    dono: "Carlota",
    data: "04/07/2014",
  },

  {
    imgSrc: lupa,
    titulo: "Professor, aumenta a letra!?",
    piquininim: "início > comunidades > pessoas",
    descricao: "E nem é meme.",
    idioma: "Português",
    categoria: "Dificuldades",
    tipo: "Pública",

    membro: 17854,
    dono: "Liliquinha",
    data: "01/09/2014",
  },

  {
    imgSrc: violao,
    titulo: "Eu toco mesmo, e daí!?",
    piquininim: "início > comunidades > pessoas",
    descricao: "Violões, tô dentro.",
    idioma: "Português",
    categoria: "Musissistas",
    tipo: "Pública",

    membro: 45698,
    dono: "Julinhazinhainha",
    data: "08/07/2010",
  },

  {
    imgSrc: borracha,
    titulo: "Eu nunca terminei uma borracha.",
    piquininim: "início > comunidades > pessoas",

    descricao: "Borrachas não merecem acabar!",
    idioma: "Português",
    categoria: "Borrachas",
    tipo: "Pública",

    membro: 10852,
    dono: "Carlucho",
    data: "05/11/2011",
  },

  {
    imgSrc: garfield,
    titulo: "Odiamos acordar cedo.",
    piquininim: "início > comunidades > pessoas",
    descricao: "Comunidade auto explicativa.",
    idioma: "Português",
    categoria: "Sono",
    tipo: "Pública",

    membro: 8653,
    dono: "Seljan",
    data: "07/06/2013",
  },

  {
    imgSrc: thony,
    titulo: "Eu colho flores e THONY RAMOS.",
    piquininim: "início > comunidades > pessoas",
    descricao: "E carlucho rega flores.",
    idioma: "Português",
    categoria: "Pêlos",
    tipo: "Pública",

    membro: 9784,
    dono: "Lucas José",
    data: "22/06/2016",
  },

  {
    imgSrc: sorvete,
    titulo: "Queria sorvete mas era feijão.",
    piquininim: "início > comunidades > pessoas",
    descricao: "Quem nunca sofreu essa decepção na vida!?",
    idioma: "Português",
    categoria: "Ilusão",
    tipo: "Pública",

    membro: 11256,
    dono: "Roger",
    data: "06/05/2009",
  },

  {
    imgSrc: xororo,
    titulo: "Não individualizo duplas.",
    piquininim: "início > comunidades > pessoas",
    descricao: "Pra mim eles são uma pessoa só e ponto.",
    idioma: "Português",
    categoria: "Falta de personalidade",
    tipo: "Pública",

    membro: 4125,
    dono: "Juju",
    data: "17/06/2013",
  },

  {
    imgSrc: shampoo,
    titulo: "Eu leio o shampoo no banho.",
    piquininim: "início > comunidades > pessoas",
    descricao: "É mentira pois eu não enxergo.",
    idioma: "Português",
    categoria: "Banho",
    tipo: "Pública",

    membro: 3987,
    dono: "Carlinhos",
    data: "04/09/2011",
  },

  {
    imgSrc: comun7,
    titulo: "Antes uma pedra no caminho...",
    piquininim: "início > comunidades > pessoas",
    descricao: "Do que duas nos rins!",
    idioma: "Português",
    categoria: "Dor",
    tipo: "Pública",

    membro: 10365,
    dono: "Seljan",
    data: "15/07/2013",
  },

  {
    imgSrc: comun8,
    titulo: "Eu nunca morri na minha vida.",
    piquininim: "início > comunidades > pessoas",
    descricao: "E que continue assim...",
    idioma: "Português",
    categoria: "Sorte",
    tipo: "Pública",

    membro: 11452,
    dono: "Lucas",
    data: "12/05/2008",
  },
];

const Comunidade = () => {
  return (
    <div>
      <Header />
      <div className="comunidade">
        {comunidades.map((comunidade, index) => (
          <Card key={index} {...comunidade} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Comunidade;
