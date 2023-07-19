import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contatos from './screens/Contatos'
import Home from './screens/Home'
import Login from './screens/Login'
import Produtos from './screens/Produtos'
import Registro from './screens/Registro'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Registro/>} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/contatos" element={<Contatos/>} />
      </Routes>
    </BrowserRouter>
  )
}
