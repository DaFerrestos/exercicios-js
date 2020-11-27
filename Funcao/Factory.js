/*
Função que retorna um objeto!
Factory = Fábrica
A função factory é usada para "fabricar" objetos de forma mais inteligente
***Também é possível retornar funções***
*/

/*criação de objeto padrão:
const prod1 = {
    nome:"dodo"
    preco:1234
    status: "dd"
}
*/

//Função factory:

function criarPessoa() {
    return {
        nome:"Ana",
        sobrenome: "Silva",
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1           
    }
}

console.log(criarProduto("Notebook", 3500.00))
console.log(criarProduto("Carro", 8000.00))