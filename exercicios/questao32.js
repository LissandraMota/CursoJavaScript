vetor = [1, 2, 3, 4, 5]

function mediaVetor(vetor){
    soma = 0

    for(i=0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }

    return soma/vetor.length
}

console.log(mediaVetor(vetor))