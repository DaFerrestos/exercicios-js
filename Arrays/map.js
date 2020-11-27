/*
 Mapeia um array para outro do mesmo tamanho com os dados transformados.
 Ex.: de JSON para objetos, de inteiros para string, etc
*/

const nums = [1, 2, 3, 4, 5]

//For com propósito de transformação

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

//.map não modifica o array original, ele cria um novo array.

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

//