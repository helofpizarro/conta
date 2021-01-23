
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente ('Ricardo',111122233309 )
const cliente2 = new Cliente ('Alice', 88822233309)

let numeroDeContas = 0
const contaCorrenteRicardo = new ContaCorrente(1001,cliente1 )


contaCorrenteRicardo.depositar(500)
const conta2 = new ContaCorrente(102,cliente1 )


let valor = 200
contaCorrenteRicardo.transferir(200,conta2)


console.log(ContaCorrente.numeroDeContas) 


