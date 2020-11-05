function classificaAluno(nota){
    let notacorrigida = arredondarNota(nota)
    if(notacorrigida >= 40){
        console.log(`Aluno aprovado, com nota:${notacorrigida}`)
    } else {
        console.log(`Aluno reprovado, com nota: ${notacorrigida}`)
    }
}

function arredondarNota(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)