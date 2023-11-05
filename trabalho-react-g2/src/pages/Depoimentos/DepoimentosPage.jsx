import React, { useState } from "react";
import Depoimento from "./Depoimento";

const DepoimentosPage = () => {
   const [depoimentos, setDepoimentos] = useState([]);

   const adicionarDepoimento = (depoimento) => {
      setDepoimentos([...depoimentos, depoimento]);
   };

   const alterarDepoimento = (depoimento) => {
      // Implemente a lógica para alterar o depoimento
   };

   const deletarDepoimento = (depoimento) => {
      // Implemente a lógica para deletar o depoimento
   };

   return (
      <div>
         <DepoimentoForm adicionarDepoimento={adicionarDepoimento} />
         {depoimentos.map((depoimento, index) => (
            <Depoimento
               key={index}
               depoimento={depoimento}
               onAlterar={alterarDepoimento}
               onDeletar={deletarDepoimento}
            />
         ))}
      </div>
   );
};

export default DepoimentosPage;
