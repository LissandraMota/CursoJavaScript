const funcs = []

for (var i = 0; i<10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//pelo fato do var não ter escopo de bloco os valores fora do laço vão ser igual