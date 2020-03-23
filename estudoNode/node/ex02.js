//por enquanto ela só pertence a esse arquivo
function upper(text){
    return text.toUpperCase()
}

//agora eu exporto ela para outros cods
//{nomedoatributo:referenciaafunção}
module.exports = {upper}

