const pessoa = {
    nome: "Ana",
    Idade: 30,
    peso: 65
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/*
Formato de declaração e consulta padrões de objetos (Notação Literal)
*/

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/*
Formato de consulta que retorna chaves e valores/atributos de forma mais 
estruturada e organizada.
*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

