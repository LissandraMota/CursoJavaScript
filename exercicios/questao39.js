function vetores(vetorA, vetorB){

    if(vetorA.length == vetorB.length){

        for(i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorB[i] + vetorA[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }

    } else {
        console.log("vetores de tamanhos diferentes")
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

vetorA = [5, 6, 7, 8]
vetorB = [11, 12, 13, 14]

vetores(vetorA, vetorB)