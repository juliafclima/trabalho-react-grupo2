import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../pages/Feed';
import Depoimentos from '../pages/Depoimentos';
import Comunidade from '../pages/Comunidade';
import Album from '../pages/Album';
import Erro from '../pages/Erro';

export default function AppRouter() {
  return (
    <div>
      <Routes>
         < Route path= "/" element = { < Feed /> } />
         < Route path= "/depoimentos" element = { < Depoimentos /> } />
         < Route path= "/comunidade" element = { < Comunidade /> } />
         < Route path= "/album" element = { < Album /> } />
         < Route path= "/erro" element = { < Erro /> } />
      
      </Routes>
    </div>
  )
}
