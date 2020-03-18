/* Express é um framework web que roda em cima do node,
usado para implementar a api rest... */

const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//sempre que chega uma requisição, quem faz o parser é o bodyparser
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port,function(){
    console.log(`BACKEND is runing on port ${port}.`)
})

module.exports = server