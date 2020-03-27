const INITIAL_STATE ={
    description: 'ler livros',
    list:[{
        _id: 1,
        description: 'pagar fatura do cartao',
        done: true
    },{
        _id: 2,
        description: 'Reunião com a equipe',
        done: false
    },{
        _id: 3,
        description: 'consulta medica',
        done: false
    }]
}

export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return{...state,description: action.payload}
        default:
            return state
    }
}