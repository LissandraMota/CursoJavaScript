console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports )

this.a = 1 // o a agora seá visível fora do arquivo
exports.b = 2
module.exports.c = 3

exports = null // para atribuir um novo objeto p ser exportado tem que usar o module.exports
console.log(module.exports)

module.exports = {público: true}