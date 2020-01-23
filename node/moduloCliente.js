// para importar algo:

const moduloA = require("./moduloA") //usou o ./ pq está na mesma pasta
const moduloB = require("./moduloB")

// o que eu exportei no módulo A e B, está dentro das constantes acima importado
console.log(moduloA)
console.log(moduloA.ola)
console.log(moduloA.bemvindo)
console.log(moduloA.atelogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB.boaNoite())