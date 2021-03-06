Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i< this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

//os elementos filtrados representam um novo array

const produtos = [
    {nome:"Notebook", preco:2499, fragil:true},
    {nome: "Iphone", preco:3999, fragil:true},
    {nome:"Copo de vidro", preco:12.49, fragil:true},
    {nome: "Copo de plástico", preco:2.99, fragil:false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))