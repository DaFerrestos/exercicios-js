/*
Reduce é uma função que serve para transformar arrays em outros elemento.
É um método "acumulador" que começa a ser executado no primeiro elemento do
array e vai acumulando funções até seu resultado final.
*/

const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
]

const resultado = alunos.map(a => a.nota ).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)