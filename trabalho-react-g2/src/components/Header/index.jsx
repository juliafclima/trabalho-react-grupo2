import React, { useState } from 'react';
import './style.css'; // Importe o arquivo de estilo CSS

const Header = () => {
   const [menuVisible, setMenuVisible] = useState(false);

   const handleMenuClick = () => {
      setMenuVisible(!menuVisible);
   };

   return (
      <header>
         <nav className="navbar">
            <div className="container">
               <div className="nav-logo">REKUT</div>
               <div className={`nav-links ${menuVisible ? 'active' : ''}`}>
                  <a href="#">Início</a>
                  <a href="#">Perfil</a>
                  <a href="#">Album</a>
                  <a href="#">Comunidades</a>
                  <a href="#">Depoimentos</a>
               </div>
               <div className="menu-icon" onClick={handleMenuClick}>
                  ☰
               </div>
            </div>
         </nav>
      </header>

   );
};
export default Header;