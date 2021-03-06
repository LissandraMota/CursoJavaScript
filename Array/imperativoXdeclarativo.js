const alunos = [
      {nome:"João", nota: 7.9},
      {nome: "Maria", nota: 9.2},
      {nome: "Lissandra", nota:10},
      {nome:"Junior", nota: 10}
]

// abordagem imperativa - como vai pecorrer
let total1 = 0
for (let i = 0; i<alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativa - mais reuso
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) //pode usar reduce como forma de agregar
console.log(total2/alunos.length)