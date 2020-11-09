function areaTrinagulo(base, altura){
    const area = (base * altura)/2

    return area.toFixed(2) //arredondando para manter 2 casas decimais
}

console.log(areaTrinagulo(10, 15))
console.log(areaTrinagulo(7, 9))