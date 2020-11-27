const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

//Abaixo um exempplo de arrow function

fabricantes.forEach(fabricantes => console.log(fabricantes))


/*A ideia do callback se resume a passar uma função para outra função e 
quando determinado evento acontecer essa função que foi passada será disparada uma
ou mais vezes a depender das condições e contextos determinados

Callback também retorna bons filtros com um código mais curto do que pela versão comum
"For"*/
