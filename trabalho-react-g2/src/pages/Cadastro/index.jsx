import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderLogin from '../../components/HeaderLogin';

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

      const url = `http://localhost:8080/api/usuario/registro?email=${formData.email}`;

      console.log('teste')
      console.log(JSON.stringify(formData))
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
      <>
         <HeaderLogin />
      <div className="containerCadastro">
         <h1>Cadastro de Cliente</h1>
         {cadastroConcluido && <p>Cadastro concluído! Obrigado por se cadastrar.</p>}
         <form onSubmit={handleSubmit}>
            <div className="form-groupCadastro">
               <label className='labelCadastro' htmlFor="nome">Nome:</label>
               <input
                  type="text"
                  id="nome"
                  className='inputCadastro'
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label htmlFor="nomeUsuario" className='labelCadastro'>Nome de Usuário:</label>
               <input
                  type="text"
                  id="nomeUsuario"
                  className='inputCadastro'
                  name="nomeUsuario"
                  value={formData.nomeUsuario}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label htmlFor="cpf" className='labelCadastro'>CPF:</label>
               <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  className='inputCadastro'
                  value={formData.cpf}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label className='labelCadastro' htmlFor="celular">Celular:</label>
               <input
                  type="text"
                  id="celular"
                  name="celular"
                  className='inputCadastro'
                  value={formData.celular}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label className='labelCadastro' htmlFor="cep">CEP:</label>
               <input
                  type="text"
                  id="cep"
                  className='inputCadastro'
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label className='labelCadastro' htmlFor="dataNascimento">Data de Nascimento:</label>
               <input
                  type="text"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                  className='inputCadastro'
               />
            </div>
            <div className="form-groupCadastro">
               <label className='labelCadastro' htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  className='inputCadastro'
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label htmlFor="password" className='labelCadastro'>Senha:</label>
               <input
                  type="password"
                  id="password"
                  className='inputCadastro'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-groupCadastro">
               <label className='labelCadastro' htmlFor="telefone">Telefone:</label>
               <input
                  className='inputCadastro'
                  type="text"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
               />
            </div>
            <button className='buttonCadastro' type="submit">Cadastrar</button>
         </form>
        
         
      </div>
      <Footer />
      </>

   );
}
