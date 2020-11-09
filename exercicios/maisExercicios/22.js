function sorteioDaSorte(numeroEscolhido){
    const min = 1
    const max = 10

    const numeroAleatorio = Math.floor(Math.random()* (max - min + 1) + min)

    if(numeroEscolhido == numeroAleatorio){
        return `Parabéns!! O número sorteado foi ${numeroAleatorio}`
    } else {
        return `Que pena! O número sorteado foi ${numeroAleatorio}`
    }
}

console.log(sorteioDaSorte(5))
console.log(sorteioDaSorte(10))

