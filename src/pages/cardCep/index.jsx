import { useState } from 'react'
import './style.css'

export const CardCep = () => {   
    const [cep, setCep] = useState()

    const buscarCep = (e) => {
        e.preventDefault()
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)           
        })
    }
    return (
        <>
            <h1>Consulta Cep 🔎</h1>
            <form>
                <input type="number" placeholder='Digite um CEP:'required value={cep} onChange={(e) => setCep(e.target.value)}/>
                <button type="submit" onClick={buscarCep}>Buscar</button>
            </form>        

        </>
    )
}