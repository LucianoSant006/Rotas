import React from 'react'
import LinkPerso from './Link'
export default function Navbar() {



  return (
    <div className='bg-zinc-950 text-white flex items-center justify-between px-10 h-20'>
      <div>Logo</div>
      <div><LinkPerso rota={"/produtos"}>Produtos</LinkPerso></div>
      <div><LinkPerso rota={"/contatos"}>Contatos</LinkPerso></div>
      <div className='flex gap-10'>
        <div> <LinkPerso rota={"/login"}><button className='bg-rose-500 w-24 h-10 rounded-md'>Logar</button></LinkPerso> </div>
        <div> <LinkPerso rota={"/cadastro"}><button className='bg-rose-500 w-24 h-10 rounded-md'>Registrar</button></LinkPerso></div>
      </div>
    </div >
  )
}
