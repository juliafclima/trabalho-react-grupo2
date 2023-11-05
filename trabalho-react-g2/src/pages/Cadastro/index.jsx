import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
   
   let navigate = useNavigate();

   const [formData, setFormData] = useState({
      celular: '',
      cep: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      nome: '',
      nomeUsuario: '',
      numero: '1234',
      password: '',
      roles:[
          'VENDEDOR'],
      telefone: ''
   });
   const [cadastroConcluido, setCadastroConcluido] = useState(false);
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const url = 'http://localhost:8080/api/usuario/registro';

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
         {cadastroConcluido && <p>Cadastro concluído! Obrigado por se cadastrar.</p>}
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
            {/* <div className="form-group">
               <label htmlFor="senha">Senha:</label>
               <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
               />
            </div> */}
            <div className="form-group">
               <label htmlFor="celular">Celular:</label>
               <input
                  type="text"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="cep">CEP:</label>
               <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="dataNascimento">Data de Nascimento:</label>
               <input
                  type="text"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            {/* <div className="form-group">
               <label htmlFor="numero">Número:</label>
               <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  required
               />
            </div> */}
            <div className="form-group">
               <label htmlFor="password">Senha:</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
               />
            </div>
            {/* <div className="form-group">
               <label htmlFor="roles">Roles:</label>
               <input
                  type="text"
                  id="roles"
                  name="roles"
                  value={formData.roles}
                  onChange={handleChange}
                  required
               />
            </div> */}
            <div className="form-group">
               <label htmlFor="telefone">Telefone:</label>
               <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
               />
            </div>
            <button type="submit">Cadastrar</button>
         </form>
      </div>
   );
}
