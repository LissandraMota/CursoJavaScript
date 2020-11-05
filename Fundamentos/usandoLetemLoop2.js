const funcs = []

for (let i= 0; i<10; i++) {
    //adiciona um novo elemento no array + função que imprime o array
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() 
funcs[8]()