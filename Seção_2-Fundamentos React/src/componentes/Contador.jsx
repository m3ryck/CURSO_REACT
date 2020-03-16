import React from 'react'

export default class Contador extends React.Component{
    state = {
        numero: this.props.numeroInicial
    }
    
    //associa o this ao local em que a função foi escrita no código
    maisUm = () =>{
        this.alteraNum(1)
        //this.setState({numero: this.state.numero+1})
    }
    menosUm = () =>{
        this.alteraNum(-1)
        //this.setState({numero: this.state.numero-1})
    }
    alteraNum = (diferenca) =>{
        this.setState({numero: this.state.numero+diferenca})
    }


    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={()=>this.alteraNum(10)}>Inc 10</button>
                <button onClick={()=>this.alteraNum(-10)}>Dec 10</button>
            </div>
        )
    }
}

//SOLUÇÃO 1 - BIND , garante que o 'this' aponte para o objeto atual
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//SOLUÇÃO 2 - Função arrow(onClick)
//<button onClick={() => this.maisUm()}>Inc</button>


//SOLUÇÃO 3 - Função arrow, associa o this ao local em que a função foi escrita no código
// maisUm = () =>{
//     this.props.numero++
// }