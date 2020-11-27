/*
JSON é um formato de dados, textual e que não carrega consigo nenhum formato
específico de linguagem. Serve para comunicar sistemas que são feitos em tecnologias 
completamente diferentes de forma simples e segura.

*/

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

/*
existe um site web para consultar formatos válidos de JSON.
*/