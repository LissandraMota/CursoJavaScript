//usando operador destructing em array
//const [a] //usando operador destruct
const [a] = [10] 
console.log (a)

//n1= 10, n3=9, n5 como não foi declarada undefined e n6 como foi atribuido
// 0 no destruct n6=0
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8] //ignorou alguns elementos e colocu valor padrão para n6
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8, 8], [9, 6,8]]  // ignora o primerio array, ignora o primeiro elemento do segundo array, pega o segundo elemento do segundo array
console.log(nota)