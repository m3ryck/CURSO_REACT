//http

const http = require('http')

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type": "text/html"})
    res.end("<h1> Acho que é melhor usar o Adonis, nao?</h1>")
})

const porta = 3456

server.listen(porta,function(){
    console.log(`escutando a porta ${porta}`)
})