import React from "react";

const Depoimento = ({ depoimento, onAlterar, onDeletar }) => {
   return (
      <div>
         <img src={depoimento.foto} alt="Foto do Depoente" />
         <h2>{depoimento.nome}</h2>
         <h3>{depoimento.titulo}</h3>
         <p>{depoimento.mensagem}</p>
         <button onClick={() => onAlterar(depoimento)}>Alterar</button>
         <button onClick={() => onDeletar(depoimento)}>Deletar</button>
      </div>
   );
};

export default Depoimento;
