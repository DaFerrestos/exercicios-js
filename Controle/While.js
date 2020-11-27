function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`A opção escolhida foi ${opcao}`) //para mesclar string com atribuição, colocamos o console entre crases "``"
}

console.log("Até a próxima!")