let vetor = [1, 2, 3, 4, 5]
let vetor2 = [2, 3, 4, 5, 6, 7]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

function valorElementoMaiorQue5 (vetor2, multiplicador){
    let vetorResultado2 = []

    vetor2.forEach(elemento =>{
        if( elemento > 5){
            vetorResultado2.push(elemento * multiplicador)
        }
    })

    return vetorResultado2
}

console.log(multiplicaVetor(vetor, 3))
console.log(valorElementoMaiorQue5(vetor2, 3))