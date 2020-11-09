function buscarPalavrasParecidas(umaPalavra, palavras){
    return[...palavras].filter(palavra => palavra.includes(umaPalavra))
}

console.log(buscarPalavrasParecidas("java", ["javascript", "java", "C++"]))