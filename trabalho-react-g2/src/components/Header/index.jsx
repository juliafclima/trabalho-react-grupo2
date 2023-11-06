import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Clock from '../../pages/Album/clock';

const Header = () => {
   const [menuVisible, setMenuVisible] = useState(false);

   const handleMenuClick = () => {
      setMenuVisible(!menuVisible);
   };

   return (
      <header>
         <nav className="navbarHeader">
            <div>
               <div className="nav-logoHeader">REKUT</div>
               <div className={`nav-linksHeader ${menuVisible ? 'active' : ''}`}>
                  <Link to='/'>Início</Link>
                  <Link to='/depoimentos'>Depoimentos</Link>
                  <Link to='/comunidade'>Comunidades</Link>
                  <Link to='/album'>Album</Link>
               </div>
               <div className="menu-iconHeader" onClick={handleMenuClick}>
                  ☰
               </div>
            </div>
         </nav>
         <Clock />
      </header>
   );
};

export default Header;