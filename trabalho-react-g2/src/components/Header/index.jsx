import React from 'react';
import './style.css';
import ImgInicio from '../../assets/img/nav-bar/person-outline.png';

export default function Header() {

   function toggleMenu() {
      const menu = document.querySelector('.menu');
      menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
   }

   return (
      <header>
         <nav className="navbar">
            <div className="container">
               <div className="logo">Orkut</div>
               <div className="menu-toggle" onclick="toggleMenu()">☰</div>
               <ul className="menu">
                  {/* <li> <a Início {ImgInicio}> <Início </a></li> */}
                  <li> <a href="#">Perfil</a></li>
                  <li><a href="#">Album</a></li>
                  <li><a href="#">Comunidades</a></li>
                  <li><a href="#">Depoimentos</a></li> 
               </ul>
            </div>
         </nav>
      </header>
   );
}