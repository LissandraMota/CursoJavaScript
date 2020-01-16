const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
// template começa som o síbolo da crase e termina com o símbolo
// o template string suporta quebra de linha, a string normal não
// o que está dentro de ${} é interpolado
const template = ` 
Olá
${nome} ! `
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")} ! ` )