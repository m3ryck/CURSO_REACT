import React from 'react'
import Filho from './Filho'

//Sempre que utilizar {} a função arrow espera um retune
export default props =>{
    const notificarSaidaDoFilho = lugar => alert(`liberado para ${lugar}`)

    return(
        <div>
            <Filho notificarSaida = {notificarSaidaDoFilho} />
        </div>
    )
}