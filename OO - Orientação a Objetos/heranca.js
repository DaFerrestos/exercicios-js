/*
O objetivo da herança é permitir o reúso seguro de código sem a necessidade
de copiar e colar linhas de código. É um paradigma importante na OO.
Dessa forma conseguimos acessar atributos de objetos anteriormente declarados
(Objeto pai/avô...)

*/

const ferrari = {
    modelo: "F40",
    velocidadeMax:324
}

const volvo = {
    modelo: "V40",
    velocidadeMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/*
Cadeia de protótipos (prototypes chain)
*/

Object.prototype.atributo0 = "0"
const avo = {atributo1: "A"}
const pai = { __proto__: avo, atributo2: "B"}
const filho = { __proto__: pai, atributo3: "C"}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)


