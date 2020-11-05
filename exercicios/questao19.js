function pedido(codProduto, quantidade){
    switch(codProduto){
        case 100:
            return quantidade * 3
            break
        case 200:
            return quantidade * 4
            break
        case 300:
            return quantidade * 5.5
            break
        case 400:
            return quantidade * 7.5
            break
        case 500:
            return quantidade * 3.5
            break
        case 600:
            return quantidade * 2.8
            break
        default:
            return "Produto inexistente"
    }
}

console.log(pedido(100, 2))
console.log(pedido(200, 2))
console.log(pedido(300, 2))
console.log(pedido(400, 2))
console.log(pedido(500, 2))
console.log(pedido(600, 2))
console.log(pedido(700, 2))