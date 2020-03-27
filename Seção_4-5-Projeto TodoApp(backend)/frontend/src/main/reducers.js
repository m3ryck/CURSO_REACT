import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    //arro function que retorna o objeto sempre
    //que a função é chamada
    todo: () => ({
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
    })
})

export default rootReducer