/*
Como importar módulos descritos do node?
Exemplos de importação:
*/

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

/*
Deve se respeitar a sintaxe do caminho relativo para a importação ser executada
com sucesso.

O padrão é que todas as declarações fiquem apenas dentro do módulo,
e quando exportado fique visível para todos os usuários.

*/
