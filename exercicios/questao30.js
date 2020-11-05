vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        //para não inicializar com zero e gerar bug no numero menor
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    console.log(`O menor é ${menor} e o maior é ${maior}`)
}

maiorMenor(vetor)