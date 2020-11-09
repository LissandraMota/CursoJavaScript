function contarCaracter(caracterBuscado, frase){
    return[...frase].filter(caracter => caracter === caracterBuscado).length
}

console.log(contarCaracter("s", "Olá, Lissandra"))

//tambe´m dar para resolver com for