import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer'
const rootReducer = combineReducers({
    //arro function que retorna o objeto sempre
    //que a função é chamada
    todo:todoReducer
})

export default rootReducer