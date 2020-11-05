console.log(Math.ceil(6.1))//arredonda para cima

const obj1 = {}
//ambos abaixa cria o objeto de forma dinânima
obj1.nome = "bola" //acessa o atributo nome e o atribui o valor bola
//obj1["nome"] = "bola"
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //fica visível para fora
}

const obj2 = new Obj("cadeira")
const obj3 = new Obj("mesa")
console.log(obj2.nome)
console.log(obj3.nome)