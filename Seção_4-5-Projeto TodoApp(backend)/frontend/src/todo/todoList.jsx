import React from 'react'
import IconButton from '../template/IconButton'

import {connect} from 'react-redux'


const TodoList = props =>{
    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className = {todo.done ? 'markedAsDone':''}>{todo.description}</td>
                <td>
                <IconButton style = 'success' icon='check' 
                    onClick={()=>props.handleAsDone(todo)} hide = {todo.done} ></IconButton>
                    <IconButton style = 'warning' icon='undo' 
                    onClick={()=>props.handleAsPending(todo)}hide = {!todo.done}></IconButton>
                    <IconButton style = 'danger' icon='trash-o' 
                    onClick={()=>props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className = 'tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}

//vai mapear o estado do redux com as propriedades do objeto
const mapStateToProps = state => ({list :state.todo.list})
export default connect(mapStateToProps)(TodoList)









