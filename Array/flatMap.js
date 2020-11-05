//flat map não existe nativamente no JS
// flatmap --> Map com concat
const escola = [{
    nome: "Turma M1",
    alunos: [{
        nome:"Gutavo",
        nota: 8.1
    }, {
        nome: "Ana",
        nota: 9.8
    }]
}, {
    nome: "Turma M2",
    alunos: [{
        nome: "Lisssandra",
        nota: 10
    }, {
        nome: "Junior",
        nota: 8.9
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //idenpendente das turmas
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno) //extraindo as notas da turma

const notas1 = escola.map(getNotaDaTurma)
console.log (notas1)

console.log([].concat([ 8.1, 9.8 ], [ 10, 8.9 ] ))

// flatmap --> Map com concat

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma) // map + concat
console.log(notas2)
