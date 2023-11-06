import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Footer from '../../components/Footer';
import HeaderLogin from '../../components/HeaderLogin';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '', // Substituído de nomeUsuario para email
        password: '', // Substituído de senha para password
    });

    const navigateTo = useNavigate();

    const [token, setToken] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const authenticateUser = async (email, password) => {
        try {
            const response = await fetch(`http://localhost:8080/api/usuario/logar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            console.log(response)
    
            if (response.ok) {
                const userData = await response.json();
    
                if (userData.token != null) {
                    localStorage.setItem('token', userData.token)
                    alert('Login bem-sucedido!');
                    navigateTo('/');
                    
                } else {
                    alert('Email não encontrado. Verifique as credenciais.');
                }
            } else {
                alert('Erro ao buscar usuário. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };
    

    return (
        <div className="pagina-login">
            <HeaderLogin />
        <div className="containerLogin">
            <h1 className='Login' >Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault(); 
                authenticateUser(formData.email, formData.password); // Alterado aqui também
            }}>
                <div className="form-groupLogin">
                    <label className='labelLogin' htmlFor="email">Email:</label>
                    <input className='inputLogin'
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-groupLogin">
                    <label className='labelLogin'  htmlFor="password">Senha:</label>
                    <input className='inputLogin'
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='buttonLogin' type="submit">Login</button>
            </form>
        </div>
            <Footer />
            </div>
    );
}
