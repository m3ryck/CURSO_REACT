console.log(global === this) //falso
console.log(module ===this) //falso
console.log(module.exports===this)//verdadeiro

//com o This posso compor o objeto, 
//pode ir adicionando elementos e quem importar
//tem acesso a todos os elementos
this.digaOi = function(){
    console.log('oi!!')
} 