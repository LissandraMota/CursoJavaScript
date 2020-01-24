const contadorA = require("./instanciaunica")
const contadorB = require("./instanciaunica")

const contadorC = require("./instanciaNova")()//retorna uma função
const contadorD = require("./instanciaNova")()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //novas instâncias foram criadas a partir de uma factory