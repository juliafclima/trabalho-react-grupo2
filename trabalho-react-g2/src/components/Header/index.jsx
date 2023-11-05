import React, { useState } from 'react';
import './style.css'; // Importe o arquivo de estilo CSS
import { Link } from 'react-router-dom';

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
                  <Link to='/'>Início</Link>
                  <Link to='/depoimentos'>Depoimentos</Link>
                  <Link to='/comunidade'>Comunidades</Link>
                  <Link to='/album'>Album</Link> 
               </div>
               <div className="menu-icon" onClick={handleMenuClick}>
                  ☰
               </div>
            </div>
         </nav>
      </header>
   );
}
export default Header;