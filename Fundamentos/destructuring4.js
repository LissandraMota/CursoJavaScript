function rand([ min = 0, max= 1000]) {
    // se o mn for maior que o máximo, inverte
    //criando o array
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //aredonda para baixo
}

console.log(rand([50,40]))
console.log(rand([992] ))
console.log(rand([, 10])) //passando só o valor máxiomo
console.log(rand([]))