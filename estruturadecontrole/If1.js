//se a condição de if for verdadeiro o bloco será chamado
function soBoaNoticia (nota){
    if (nota >= 7) {
        console.log("Aprovado com " + nota )
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)
// só imprimiu a nota maior ou igual 7 - aprovado (verdadeiro)

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo() //undefined é falso - não imprime
seForVerdadeEuFalo(null) // falso
seForVerdadeEuFalo(undefined) // falso
seForVerdadeEuFalo(NaN)// falso
seForVerdadeEuFalo("") //string vazia - falso
seForVerdadeEuFalo(0) // falso
seForVerdadeEuFalo(-1) // verdadeiro - vai imprimir
seForVerdadeEuFalo(" ") // string preenchida (espaço vazio) - verdadeiro
seForVerdadeEuFalo("?") // verdadeiro
seForVerdadeEuFalo([]) // array vazio verdadeiro
seForVerdadeEuFalo([1, 2]) // verdeiro
seForVerdadeEuFalo({}) //objeto vazio - verdadeiro
