import React from 'react'

export default function Pessoa({ nome, idade }) {
    return (
        <div>
             <h1>Nome : {nome}</h1>
             <h1>Idade : {idade}</h1>
        </div>
    )
}
