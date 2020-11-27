/*
Contexto no qual as coisas foram declaradas dentro da linguagem.


*/

const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()