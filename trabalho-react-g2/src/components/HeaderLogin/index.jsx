import React, { useState } from 'react';
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
                  <Link to='/login'>Login</Link>
                  <Link to='/cadastro'>Cadastro</Link>
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