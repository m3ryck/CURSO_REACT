//serve pra fazer mapeamento dos objetos em js, para os documentos que
//vao para o mongo
// comandos de inserção, atualzição...

//banco de dados não relacional
const mongoose = require('mongoose')
mongoose.Promise = global.Promise //api promise do mongoose, vai usar a propria do node, apenas tirar warning

module.exports = mongoose.connect('mongodb://localhost/todo')