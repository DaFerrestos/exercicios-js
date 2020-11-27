/*

*/

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
    
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    
}

addlancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento ('Salario', 45000)
const contaDeLuz = new Lancamento ('Luz', -220)

const contas = new CicloFinanceiro (6, 2018)
contas.addlancamentos(salario, contaDeLuz)

console.log(contas.sumario())

/*
É possível utilizar conceito de herança nas classes pois após sua construção
as classes se convertem em funções (no JavaScript).
 
*/