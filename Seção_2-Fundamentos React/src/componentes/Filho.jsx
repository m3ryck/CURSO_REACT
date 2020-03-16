import React from 'react'

//Sempre que utilizar {} a função arrow espera um retune
export default props =>
    <div>
        <button onClick={()=> props.notificarSaida('Praia')}>Vou Sair</button>
    </div>
