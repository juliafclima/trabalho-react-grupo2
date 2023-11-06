import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Logout() {
    const navigateTo = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigateTo('/login'); // Redireciona para a página de login após o logout
    };

    return (
        <div className="containerLogout">
            <h1 className="Logout">Logout</h1>
            <button className="buttonLogout" onClick={logout}>Logout</button>
        </div>
    );
}
