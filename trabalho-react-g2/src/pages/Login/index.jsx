import React, { useState } from 'react';
import './style.css';

export default function Login() {
   const [formData, setFormData] = useState({
      nomeUsuario: '',
      senha: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Aqui você pode adicionar a lógica para verificar o nome de usuário e a senha
      if (formData.nomeUsuario === 'usuario' && formData.senha === 'senha') {
         alert('Login bem-sucedido!');
         // Redirecionar ou realizar outras ações após o login
      } else {
         alert('Nome de usuário ou senha inválidos. Tente novamente.');
      }
   };

   return (
      <div className="container">
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
         </form>
      </div>
   );
}