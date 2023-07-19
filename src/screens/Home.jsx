import React from 'react'
import Navbar from '../components/Navbar'
import Pessoa from '../components/Pessoa'

export default function Home() {
 
   

   const nome = "luciano"
   
  return (
    <div>
      <Navbar/>
       home

       <Pessoa nome={"luciano"} idade={"20"}/>
       <Pessoa nome={"Gabriel"} idade={"17"}/>

       
    </div>
  )
}
