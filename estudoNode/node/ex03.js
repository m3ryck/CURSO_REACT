//quando importa um modulo, o que é retornado
// é um singleton, todos usam o mesmo objeto
// não é retornado um objeto novo.

let numero = 1

function exibirProximo(){
    console.log(numero++)
}

module.exports = {exibirProximo}