process.stdout.write('esta gostando do curso?')

process.stdin.on('data',function(data){
    process.stdout.write(`sua resposta foi ${data.toString()} obrigado!! \n`)
    process.exit()
})