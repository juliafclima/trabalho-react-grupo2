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

export default function AppRouter() {
  return (
    <div>
      <Routes>
        < Route path="/" element={< Posts />} />
        < Route path="/perfil" element={< Perfil />} />
        < Route path="/depoimentos" element={< Depoimentos />} />
        < Route path="/comunidade" element={< Comunidade />} />
        < Route path="/album" element={< Album />} />
        < Route path="*" element={< Erro />} />
        < Route path="/login" element={< Login />} />
        < Route path="/cadastro" element={< Cadastro />} />
      </Routes>
    </div>
  );
}
