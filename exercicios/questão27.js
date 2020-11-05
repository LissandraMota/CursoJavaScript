function duasCriancas(altura1, taxaDecrescimento1, altura2, taxaDecrescimento2){
    if(altura1 == altura2){
        if(taxaDecrescimento1 > taxaDecrescimento2){
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (taxaDecrescimento1 < taxaDecrescimento2){
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e taxa de crescimento.'
        }
    } else {
        if(altura1 > altura2) {
            if(taxaDecrescimento1 >= taxaDecrescimento2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxaDeCrescimento2, altura1, taxaDeCrescimento1) 
            }
        } else {
            if(taxaDecrescimento2 >= taxaDecrescimento1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(duasCriancas(150, 20, 160, 20))
console.log(duasCriancas(150, 20, 150, 20))

