vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

function qtdNumNegativo(vetor){
    qtdNegativo = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qtdNegativo++
        }
    }
    return qtdNegativo
}

console.log(qtdNumNegativo(vetor))