//fileSystem
const fs = require('fs')

//listar todos os arquivos presentes na pasta

const files = fs.readdirSync(__dirname)

//pesquisar
files.forEach(f=>console.log(f))


