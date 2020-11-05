const valores = [7.7, 8.9, 6.3, 9.2] //criando array de forma literal

//forma de ler valores, elementos específicos do array
console.log(valores[0], valores[3])
console.log(valores[4]) //como  não existe vai dar undefined, diferente do que ocorre no Java que dar Error

//adicionando elementos no array
valores [4] = 10
console.log(valores)

valores [10]= 31
console.log(valores)

//diz quantos elementos tem no array
console.log(valores.length)
// conta inclusive os elementos vazios, pulados 

//função que adiciona novos elementos no array: .push
valores.push({id: 3}, false, null, "teste")
console.log(valores)
// pode misturar coisas dentro de um array , misturar tipos de dados - não é uma boa prática

// retorna o último valor do array a função .pop e retira do array
console.log(valores.pop())

console.log(valores)

//outra forma de excluir elementos do array
delete valores [0]
console.log(valores)

console.log(typeof valores) //no JS o array é do tipo objeto