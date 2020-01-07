let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
// ! false !!verdadeiro

console.log("os verdeiros....")
console.log(!!3)
console.log(!!-1)
console.log(!!'texto ou espaço vazio ' )
console.log(!! [])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"") //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!("" || null || 0 || " "))
//imprime como true pq um deles é verdadeiro
// ||=ou 

let nome = ""
console.log(nome || "desconhecido")
//retornou o segundo valor pq o primeiro deu falso (não tinha nome)