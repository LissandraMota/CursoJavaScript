let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade ao valor da unidade, um1 agora = 2
console.log(num1)

//prioridade maior
--num1 //subtraindo 1 unidade, fica 1 de novo
console.log(num1)

//estritamnete igual (valor + tipo)
console.log(++num1 === num2--) //true pq o incremento antes da comaração e o decremento como está pós fixado vai ocorrer depois da comparação
console.log(num1 === num2)  //agora num1 -> 2 e num2 ->1
