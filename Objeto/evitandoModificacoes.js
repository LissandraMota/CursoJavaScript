// Object.preventExtensions (não deixa que o objeto seja extendido, não deixa ser adicionado novos atributos)
const produto = Object.preventExtensions({
    nome: "qualquer", preco: 1.99, tag:"promoção"
})
console.log("extensível:", Object.isExtensible(produto)) //false - objeto não extensível

produto.nome = "borracha" //pode modificar atributo
produto.descricao = "borracha escolar branca" // não pode adicionar atributo - preventExtensions - não é um obj extensível
delete produto.tag //pode excluir atribuir um atributo
console.log(produto)

// Obbect.seal --> não consegue adicionar novos atributos, nem excluir, mas consegue modificar os atributos ja existentes
// sela um atributo - só consegue modifiar atributos existentes
const pessoa = {nome:"Ana", idade: 35}
Object.seal(pessoa)
console.log("selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // não vai surtir efeito
delete pessoa.nome  // não vai surtir efeito nenhum por está selado
pessoa.idade = 29 // vai surtir efeito pq no seal só pode modificar um valor de um atributo já existente
console.log(pessoa) 

// Object.freze --> selado + valores constantes

