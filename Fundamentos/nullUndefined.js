let valor // não inicializada
console.log(valor)
//dar undefined pq não foi atribuído nada a variável criada
//console.log(valor2)
// dar is not defined que é diferente de underfined, pois nesse caso a variável nem sequer foi criada

valor = null //ausência de valor, não aponta para nenhum objeto na memória
console.log(valor)
//quando quiser zerar o valor de uma variável do tipo referência, que aponta para objeto ou função...coloca-se o null

//console.log(valor.toString())// Erro!, não consegue ler a propiedade por ser null (nao consegue acessar a variável)

const produto = {}
console.log(produto.preco)//undefined pq não foi definido o preco dentro do produto
console.log(produto)

produto.preco = 3.50
console.log(produto)
//consegue por atributo no objeto depois e com isso deixar algo de ser underfined o atributo

produto.preco = undefined //evite atribuir underfined
console.log(!!produto.preco)// usou o !! do boolean que colocou o undefined como falso
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.peco) //tbm aqui se usar o boolean da falso
console.log(produto)


