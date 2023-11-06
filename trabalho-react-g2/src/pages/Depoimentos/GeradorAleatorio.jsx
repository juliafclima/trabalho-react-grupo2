import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeradorAleatorio = () => {
   const [nome, setNome] = useState('');
   const [imagem, setImagem] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get('https://randomuser.me/api/');
            const userData = response.data.results[0];
            setNome(`${userData.name.first} ${userData.name.last}`);
            setImagem(userData.picture.large);
         } catch (error) {
            console.error('Erro ao buscar dados aleatórios:', error);
         }
      };

      fetchData();
   }, []);

   return (
      
      <div>
         <h2>{nome}</h2>
         <img src={imagem} alt="Imagem Aleatória" />
         
      </div>
      
      );
   };
   
   export default GeradorAleatorio;