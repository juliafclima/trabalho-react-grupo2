import React, { useState } from "react";

export default function Effect() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(()=>{
    getDados();
  },[])  

  const getDados = async () => {
    try {
      const response = await fetch(
        "https://651372678e505cebc2e9db2e.mockapi.io/clientes"
      );
      const data = await response.json();
      console.log(data);
      setDados(data);
    } catch (error) {
      console.log("Erro ao fazer a requisição");
    }
  };

  return (
    <div>
      <h2>Dados do Cliente</h2>
      {carregando ? (
        <p>Carregando</p>
      ) : (
        <ul>
          {dados.map((cliente) => (
            <li key={cliente.id}>{cliente.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}