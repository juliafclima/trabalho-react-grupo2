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

const comunidades = [
  {
    imgSrc: borracha,
    titulo: "Eu nunca terminei uma borracha.",
    descricao: "Borrachas não merecem acabar!",
    idioma: "Português",
  categoria: "Borrachas",
  tipo: "Pública",

    membro: 10852,
    dono: "Carlucho",
    data: "05/11/2011"
  },

  {
    imgSrc: garfield,
    titulo: "Eu odeio acordar cedo.",
    descricao: "Comunidade auto explicativa.",
    membro: 8653,
    dono: "Seljan",
    data: "07/06/2013"
  },

  {
    imgSrc: thony,
    titulo: "Eu colho flores e THONY RAMOS.",
    descricao: "E carlucho rega flores.",
    membro: 9784,
    dono: "Lucas José",
    data: "22/06/2016"
  },

  {
    imgSrc: sorvete,
    titulo: "Queria sorvete mas era feijão.",
    descricao: "Quem nunca sofreu essa decepção na vida!?",
    membro: 11256,
    dono: "Roger",
    data: "06/05/2009"
  },

  {
    imgSrc: xororo,
    titulo: "Não sei individualizar duplas.",
    descricao: "Pra mim eles são uma pessoa só e ponto.",
    membro:4125 ,
    dono: "Juju",
    data: "17/06/2013"
  },

  {
    imgSrc:shampoo ,
    titulo: "Eu leio o shampoo no banho.",
    descricao: "É mentira pois eu não enxergo.",
    membro:3987 ,
    dono: "Carlinhos",
    data: "04/09/2011"
  },

  {
    imgSrc:comun7 ,
    titulo: "Antes uma pedra no caminho...",
    descricao: "Do que duas nos rins!",
    membro:10365 ,
    dono: "Seljan",
    data: "15/07/2013"
  },

  {
    imgSrc: comun8,
    titulo: "Eu nunca morri na minha vida.",
    descricao: "E que continue assim...",
    membro: 11452,
    dono: "Lucas",
    data: "12/05/2008"
  },

  {
    imgSrc: carlucho,
    titulo: "Eu amo morangos!",
    descricao: "Quem discordar está errado.",
    membro: 6987,
    dono: "Carlota",
    data: "04/07/2014"
  },

  {
    imgSrc: lupa,
    titulo: "Professor, aumenta a letra!?",
    descricao: "E nem é meme.",
    membro:17854 ,
    dono: "Liliquinha",
    data: "01/09/2014"
  },

  {
    imgSrc: violao,
    titulo: "Eu toco mesmo, e daí!?",
    descricao: "Violões, tô dentro.",
    membro: 45698 ,
    dono: "Julinhazinhainha",
    data: "08/07/2010"
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
    </div>
  );
};

export default Comunidade;
