// em node um arquivo representa 1 módulo
// se quiser tornar o módulo visível, público, disponível para outro arquivo -->precisa exportar o módulo
// exite várias formas de exportar e importar módulos

// formas de exportar algo de dentro de um módulo node p/ ser usado em outro arquivo:
//essa frase pode ser acessada em outro arquivo
console.log(this)

this.ola = 'Fala pessoal'
exports.bemvindo = "Bem vindo ao node"
module.exports.atelogo = "Até o próximo exemplo"