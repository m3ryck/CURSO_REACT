import React from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const url = 'http://localhost:3003/api/todos'

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {description: "",list:[]}
        
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleAsPending = this.handleAsPending.bind(this)
        this.handleAsDone = this.handleAsDone.bind(this) 
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
    }

    refresh(description =''){
        const search = description ? `&description__regex=/${description}/`:''
        Axios.get(`${url}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state,description,list: resp.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleAsDone(todo){
        Axios.put(`${url}/${todo._id}`,{...todo,done:true})
        .then(resp=>this.refresh(this.state.description))   
    }

    handleAsPending(todo){
        Axios.put(`${url}/${todo._id}`,{...todo,done:false})
        .then(resp=>this.refresh(this.state.description))  
    }

    handleRemove(todo){
        Axios.delete(`${url}/${todo._id}`).then(resp=>this.refresh())
    }

    handleChange(e){
       this.setState({...this.state,description: e.target.value})
    }

    handleAdd(){
       const description = this.state.description
       Axios.post(url,{description}).then(resp=>this.refresh(this.state.description))
     }
    render(){
        return(
        <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm   description = {this.state.description}
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}/>
        <TodoList   list = {this.state.list} 
                    handleRemove = {this.handleRemove}
                    handleAsDone = {this.handleAsDone} 
                    handleAsPending={this.handleAsPending}/>
        </div>
        )
   }


}



