//functio factory - retorna objeto
function criarProduto (nome, preco){
    return{
        nome, 
        preco,
        desconto: 0.1 //fixo, padrão
    }
}

console.log(criarProduto("notebook", 5.999))
console.log(criarProduto("Ipad", 1.399))
console.log(criarProduto(`Iphone ${8}`, 5.999))