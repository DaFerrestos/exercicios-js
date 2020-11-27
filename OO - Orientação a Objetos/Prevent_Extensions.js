// Evita a inserção de extensões desnecessárias no objeto

const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "Promoção"
})

console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "borracha escolar branca"
delete produto.tag
console.log(produto)


/*
Também é possível 'selar' o objeto e dessa forma garantir maior integridade aos 
atributos já que estes não poderão ser substituídos após sua declaração
*/