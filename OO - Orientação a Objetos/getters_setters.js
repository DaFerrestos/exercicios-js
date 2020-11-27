/*
Uma forma de manter os atributos dos objetos coerentes e conservados 
é o encapsulamento. Após encapsulados, para acessarmos estes atributos
utilizamos os métodos get e set.
*/

const sequencia = {
    _valor: 1,
    get valor() {return this. _valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
     
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 30
console.log(sequencia.valor)

/*o underline neste caso (_valor) representa uma convenção
de que este dado só deverá ser consultado internamente*/