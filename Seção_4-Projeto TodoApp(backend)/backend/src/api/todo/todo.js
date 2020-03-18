const restful = require('node-restful')
const mongoose = restful.mongoose

//tarefa que tem como descrição uma string, 
//e um atributo boolean, que informa se concluiu ou nao, por default é falso
const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type:Boolean,required: true, default:false},
    createdAt:{type: Date, default: Date.now}
})

module.exports = restful.model('Todo',todoSchema)












