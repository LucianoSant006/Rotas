import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import estilo from "./link.module.css"

export default function LinkPerso({children , rota}) {

    const rotaUrl = useLocation()


    
     
  return (
    <div>
        <Link to={rota} className={
            `
            ${estilo.link}
            ${rotaUrl.pathname === rota ? estilo.Destaque : estilo.link}
            `
        }>{children}</Link>
    </div>
  )
}
