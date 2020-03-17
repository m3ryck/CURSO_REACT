import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}



export default class Caculator extends Component{
    
    state = { ...initialState}

    clearMemory(){
        this.setState({...initialState})
    }
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation,current:1,clearDisplay: true})
        //se chegar aqui, uma operação ja foi setada
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            /**************** */
            switch(currentOperation) {
                case "/":
                    values[0]=values[0]/values[1]
                    values[1]=0
                    break 
                case "+":
                    values[0]=values[0]+values[1]
                    values[1]=0
                    break 
                case "-":
                    values[0]=values[0]-values[1]
                    values[1]=0
                    break 
                case "*":
                    values[0]=values[0]*values[1]
                    values[1]=0
                    break 
        
                default: values[0] = this.state.values[0]
            }


            /**************** */

            // try{
            //     values[0]=eval(`${values[0]} ${currentOperation} ${values[1]}`)
            // }catch(e){
            //     values[0] = this.state.values[0]
            // }

            //values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
        console.log(operation)
    }
    addDigit(n){
        //se o usuario pressionar o ponto, ja existindo um ponto -- validação
        if(n==='.'&&this.state.displayValue.includes('.')){
            return 
        }

        //limpa o display caso o estado atual seja apenas 0, ou se o estado de clearDisplay for True
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        //salva o valor do display em currentValue , e adiciona novos digitos
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue,clearDisplay: false})

        if (n!=='.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }

    }

    render(){
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return(
            <div className = "calculator">
                <Display value={this.state.displayValue}/>               
                <Button label="AC" click={()=>this.clearMemory()} triple/>
                <Button label="/" click={setOperation} operation/> 
                <Button label="7" click={addDigit}/> 
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation/> 
                <Button label="4" click={addDigit}/> 
                <Button label="5" click={addDigit}/> 
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/> 
                <Button label="1" click={addDigit}/> 
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/> 
                <Button label="0" click={addDigit} double/> 
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>  

            </div>
        )
    }
}