import React, { useState } from "react";

const DepoimentoForm = ({ adicionarDepoimento }) => {
   const [titulo, setTitulo] = useState("");
   const [mensagem, setMensagem] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      const nome = "Nome Aleatório"; // Gerar aleatoriamente o nome
      const foto = "https://loremflickr.com/320/240"; // Substitua com uma URL de uma imagem aleatória

      adicionarDepoimento({ nome, foto, titulo, mensagem });
      setTitulo("");
      setMensagem("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <label>Título:</label>
         <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
         <label>Mensagem:</label>
         <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
         <button type="submit">Adicionar Depoimento</button>
      </form>
   );
};

export default DepoimentoForm;
