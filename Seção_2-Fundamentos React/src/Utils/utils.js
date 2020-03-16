import React from 'react'

/*primeiro parametro da maps são todos os componentes filhos
e depois a callback que clona o objeto passando as referencias recebidas
funciona com mais de 1 objeto, ou seja passa todas as propriedades do pai 
para os filhos*/
export function filhosComProps(props){
    return React.Children.map(props.children, filho =>{
        return React.cloneElement(filho,{ ...props})
    })
}