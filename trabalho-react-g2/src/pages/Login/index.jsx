import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Login() {
    const [formData, setFormData] = useState({
        nomeUsuario: '',
        senha: '',
    });

    const navigateTo = useNavigate();

    const [token, setToken] = useState(null); // Novo estado para armazenar o token

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    };

    const authenticateUser = async (nomeUsuario, senha) => {
        try {
            // Faz a requisição para obter os detalhes do usuário pelo nome de usuário
            const response = await fetch(`https://6513726b8e505cebc2e9db94.mockapi.io/clientes?nomeUsuario=${nomeUsuario}`);

            if (response.ok) {
                const userData = await response.json();

                if (userData.length > 0) {
                    const user = userData[0];
                    if (user.senha === senha) { // Compara a senha fornecida com a senha do usuário retornado
                        setToken(user.id); // Salva o ID do usuário no estado
                        
                        navigateTo('/');
                    } else {
                        alert('Nome de Usuário ou Senha incorreta. Tente novamente.');
                    }
                } else {
                    alert('Nome de usuário não encontrado. Verifique as credenciais.');
                }
            } else {
                alert('Erro ao buscar usuário. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault(); // Evita o comportamento padrão do formulário
                authenticateUser(formData.nomeUsuario, formData.senha);
            }}>
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