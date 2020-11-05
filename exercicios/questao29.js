vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

function intervaloNum(vetor){
    qtdNumIntervalo = 0
    qtdNumForaIntervalo = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumIntervalo++
        }else{
            qtdNumForaIntervalo++
        }
    }

    console.log(`A quantidade de números do vetor dentro do intervalo são ${qtdNumIntervalo}`)
    console.log(`A quantidade de número fora do intervalo são ${qtdNumForaIntervalo}`)

}

intervaloNum(vetor)