const a = 7 // o símbolo de igual está fazendo uma atribuição e não no contexto de comparar para sabr se "a" é igual a 7
// está colocando o valor 7 dentro da constante
let b = 3

b += a //atribuição aditiva, junto com a atribuição estou fazendo uma adição
//é equivalente b = b + a
console.log(b)

b -= 4 //atribuição subtrativa, seria equivalente -> b = b - 4
console.log(b)

b *= 2 //atribuição multiplicativa, seria equivalente -> b = b * 2
console.log(b)

b /= 2 //atribuição divisiva, seria equivalente -> b = b / 2
console.log(b)

b %= 2 //atribuição modular -> b = b % 2
console.log(b)
