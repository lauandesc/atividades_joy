console.log("trabalhando com json")

const objetoJs = {
    nome: "Lauandes",
    idade: 36,
    estrangeiro: false
}

console.log(objetoJs)
console.log(typeof(objetoJs))

// Falsa string JSON
//const falsastringJSON = {
//    "nome": "Lauandes",
//    "idade": 36,
//    "estrangeiro": false
//}
//console.log(falsastringJSON)
//console.log(typeof(falsastringJSON))

//String JSON
const stringJSON = JSON.stringify(objetoJs)
console.log(stringJSON)
console.log(typeof(stringJSON))
console.log(stringJSON.length)

const ParseJSON = JSON.parse(stringJSON)
console.log(ParseJSON)
console.log(typeof(ParseJSON))
console.log(ParseJSON.nome)