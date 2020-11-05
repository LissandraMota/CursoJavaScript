console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// como são do tipo function todos acima tem o atributo .prototype

//reverter uma sting
// .split - gerar um array com todas as letras, inclusive espaço em branco
// .reverse - função do array para reverter o array
// .join - juntar novamente como uma string
String.prototype.reverse = function() { //adicionando um método no protype de String
    return this.split("").reverse().join("")
}

console.log("Escola Cod3r".reverse())

//para acessar usa o this/ split ---> transforma em array/ reverse--->reverte/ join transforma novamente em string

Array.prototype.first = function() { // adicionando um método para pegar a posição zero de um array no prototype de Array
    return this[0] //acessando o array a partir do this
}

console.log([1, 2, 3, 4, 5].first())
console.log(["a", "b", "c"].first())

