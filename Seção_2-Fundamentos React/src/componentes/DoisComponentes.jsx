import React from 'react'

export const CompA = Props =>
    <h1>Primeiro diz: {Props.valor}</h1>

export const CompB = Props =>
    <h1>Segundo diz: {Props.valor}</h1>


//altera a forma de importar no index.js
//apenas um export como default
export default CompA

//exemplo
// export default function(){
//     return <p>teste</p>
// }


//melhor uso para multiplos elementos, pois facilita a visualização do que foi exportado.
// export {CompA,CompB}


    