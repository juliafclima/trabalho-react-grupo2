import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
   
   let navigate = useNavigate();

   const [formData, setFormData] = useState({
      nome: '',
      nomeUsuario: '',
      cpf: '',
      endereco: '',
      senha: '', // Adicionamos o campo de senha ao estado
   });
   const [cadastroConcluido, setCadastroConcluido] = useState(false); // Estado para controlar a exibição da mensagem
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const url = 'https://6513726b8e505cebc2e9db94.mockapi.io/clientes';

      fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then(response => response.json())
         .then(data => {
            console.log('Resposta do servidor:', data);
            alert('Cadastro bem-sucedido!');
            navigate('/login');

            //lmpar o imput
         })
         .catch(error => {
            console.error('Erro ao enviar os dados:', error);
         });
   };

   return (
      <div className="container">
         <h1>Cadastro de Cliente</h1>
         {cadastroConcluido && <p>Cadastro concluído! Obrigado por se cadastrar.</p>} {/* Mensagem de cadastro concluído */}
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label htmlFor="nome">Nome:</label>
               <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="nomeUsuario">Nome de Usuário:</label>
               <input
                  type="text"
                  id="nomeUsuario"
                  name="nomeUsuario"
                  value={formData.nomeUsuario}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="cpf">CPF:</label>
               <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="endereco">Endereço:</label>
               <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="senha">Senha:</label>
               <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
               />
            </div>
            <button type="submit">Cadastrar</button>
         </form>
      </div>
   );
}