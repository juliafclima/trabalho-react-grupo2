import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Depoimentos from '../pages/Depoimentos';
import Comunidade from '../pages/Comunidade';
import Album from '../pages/Album';
import Erro from '../pages/Erro';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Perfil from '../pages/Perfil';
import Posts from './../pages/Posts/index';
import Update from '../pages/Update';

export default function AppRouter() {
  return (
    <div>
      <Routes>
        < Route path="/" element={< Perfil />} />
        < Route path="/posts" element={< Posts />} />
        < Route path="/depoimentos" element={< Depoimentos />} />
        < Route path="/comunidade" element={< Comunidade />} />
        < Route path="/album" element={< Album />} />
        < Route path="*" element={< Erro />} />
        < Route path="/login" element={< Login />} />
        < Route path="/cadastro" element={< Cadastro />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}
