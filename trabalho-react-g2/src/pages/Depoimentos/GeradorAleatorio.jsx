import React, { useState, useEffect } from 'react';

const GeradorAleatorio = () => {
   const [nome, setNome] = useState('');
   const [imagem, setImagem] = useState('');
   const [imagemExibida, setImagemExibida] = useState(false);

   const pessoasFamosas = [
      {
         nome: 'Ninja Renegado',
         imagemUrl: 'https://scontent.fgig14-2.fna.fbcdn.net/v/t1.6435-9/159375562_3559581094139372_2287291690080678825_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=CY8Q3t2p6iwAX835XC1&_nc_ht=scontent.fgig14-2.fna&oh=00_AfDPRKSrorxbL8OQ-9RMNathemK6rs9XULOwiTvWukYP-A&oe=6570CC38',
      },
      {
         nome: 'Cacilds',
         imagemUrl: 'https://f.i.uol.com.br/fotografia/2019/07/23/15639236845d3794e45557d_1563923684_3x2_md.jpg',
      },
      {
         nome: 'Oloko Bicho',
         imagemUrl: 'https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2019/07/faustao-caminhoneiros.jpg',
      },
      {
         nome: 'Namorada do Carlos',
         imagemUrl: 'https://guiagaysaopaulo.com.br/uploads/imagens/originais/noticia-foto/ines_brasil.jpeg?width=600&height=400&cp=1',
      },
      {
         nome: 'Lula Gótica',
         imagemUrl: 'https://pbs.twimg.com/media/FNrHATpWYAklF6s?format=jpg&name=360x360',
      },
      {
         nome: 'Bolsonaro Egirl',
         imagemUrl: 'https://pbs.twimg.com/media/FNrHAe9X0AEUWbo?format=jpg&name=360x360',
      },
      {
         nome: 'Chaves Metaleiro',
         imagemUrl: 'https://static.sbt.com.br/noticias/images/208446.jpg',
      },
      {
         nome: 'smeagol',
         imagemUrl: 'https://2.bp.blogspot.com/-UW4L9lq7U-0/VRPquMDGl5I/AAAAAAAACcs/zIafjdNq3hU/s1600/Smeagol.jpg'
      },
      {
         nome: "Angelina Jolie",
         imagemUrl: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/24630_7E9A5B3C65889D88.jpg?w=1220&h=674&crop=1"
      },
      {
         nome: "Brad Pitt",
         imagemUrl: "https://br.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/87/42/95/19941848.jpg"
      },
      {
         nome: "Beyoncé",
         imagemUrl: "https://hips.hearstapps.com/hmg-prod/images/beyonce-gettyimages-634996062-1611268123.jpg?crop=0.724xw:0.539xh;0.168xw,0.0668xh&resize=1024:*"
      },
      {
         nome: 'Joelma sem ximbinha',
         imagemUrl: 'https://www.hellomoto.com.br/wp-content/uploads/2022/11/imagem4.png'
      },
      {
         nome: 'Lumena',
         imagemUrl: "https://www.hellomoto.com.br/wp-content/uploads/2022/11/imagem9.jpg",
      },
      {
         nome: 'arreia',
         imagemUrl: 'https://pbs.twimg.com/media/EdJd6iCXoAAV9Gz.jpg',
      },
      {
         nome: 'Ana Maria Braga',
         imagemUrl: 'https://www.hellomoto.com.br/wp-content/uploads/2022/11/imagem13.jpg',
      },
   ];

   useEffect(() => {
      if (!imagemExibida) {
         const indiceAleatorio = Math.floor(Math.random() * pessoasFamosas.length);
         const pessoaAleatoria = pessoasFamosas[indiceAleatorio];
         setNome(pessoaAleatoria.nome);
         setImagem(pessoaAleatoria.imagemUrl);
         setImagemExibida(true);
      }
   }, [imagemExibida, pessoasFamosas]);

   return (
      <div>
         <h2>{nome}</h2>
         <img style={{ width: 200, height: 200 }} src={imagem} alt="Imagem Aleatória" />
      </div>
   );
};

export default GeradorAleatorio;
