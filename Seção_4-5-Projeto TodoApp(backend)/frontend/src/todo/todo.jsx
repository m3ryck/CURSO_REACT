import React from 'react'
import PageHeader from '../template/pageHeader'
import todoForm from './todoForm'
import todoList from './todoList'

export default class Todo extends React.Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small=' cadastro'></PageHeader>
                <todoForm/>
                <todoList/>
            </div>
        )
    }
}