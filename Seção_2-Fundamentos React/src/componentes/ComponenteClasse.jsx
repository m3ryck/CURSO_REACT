import React from 'react'

export default class ComponentClasse extends React.Component{
    render(){
        return (
        <h1>{this.props.valor || 'default'}</h1>
        )
    }
}

