import React from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const url = 'http://localhost:3003/api/todos'

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.state = {description: "",list:[]}
    }
    
    handleChange(e){
       this.setState({...this.state,description: e.target.value})
    }

    handleAdd(){
       const description = this.state.description
       Axios.post(url,{description}).then(resp=>console.log('funcionou!'))
     }
    render(){
        return(
        <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm description = {this.state.description}
        handleAdd={this.handleAdd} handleChange={this.handleChange}/>
        <TodoList/>
        </div>
        )
   }


}



