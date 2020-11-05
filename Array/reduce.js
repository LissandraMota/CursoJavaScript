//reduce- acumulador--> valor anterior
const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true },
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

//antes de usar o reduce tem que usar o map
//usando o map para extrair só a nota
console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) //passando 0 como o valor inicial

console.log(resultado)//resultado de todas as somas