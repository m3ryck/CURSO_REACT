import React from 'react'
import {filhosComProps} from '../Utils/utils'

export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProps(props)}
        {/*primeiro parametro da maps são todos os componentes filhos
        e depois a callback que clona o objeto passando as referencias recebidas
        funciona com mais de 1 objeto, ou seja passa todas as propriedades do pai 
        para os filhos*/}
        {/* {React.Children.map(props.children, filho =>{
            return React.cloneElement(filho,{ ...props})
        })} */}       

        {/*cria um clone do objeto e passa as referencias recebidas, funciona apenas com um elemento*/}
        {/* {React.cloneElement(props.children,{ ...props})} */}

        {/*outra forma */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome} )}    */}
        {/* {props.children} */}
    </div>