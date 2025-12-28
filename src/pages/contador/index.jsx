import './style.css'
import { useState } from 'react'

export const Contador = () => {
    const [contador, setContador] = useState(0)

    const Incrementar = () => {
        setContador(contador + 1)
        console.log(contador)
    }

    const Decrementar = ()=> {
        setContador(contador -1)
    }

    const ZerarContador = ()=> {
        setContador(0)
    }
    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={Incrementar}>Botão Incrementar Contador</button><br />
            <button onClick={Decrementar}>Botão Decrementar Contador</button> <br />
            <button onClick={ZerarContador}>Botão Zerar Contador</button>
        </>
    )
}