const peso1 = 1.0
const peso2 = Number ("2.0")

console.log (peso1, peso2)
console.log(Number.isInteger(peso1)) // quando for inteiro dar true
//1.0 o JS considera inteiro, 1.1 o JS já considera como float

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media) 
//funçao .tofixed () -> fixa a casa deciamal ex: console.log (meida.toFixed(2))
console.log(media.toFixed(2))       
console.log(media.toString(2))  
//funçao .tostring() -> converte em binário ex: console.log (media.toString(2))
//.to string tbm converte em string
console.log(typeof media)

