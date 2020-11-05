const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

//x é o índice do array
for (x in nums) {
    if(x == 5) {
        break //usa o bloco mais próximo que ele suporte, no caso o for
        // interrompe e sai
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y ==5 ) {
        continue //interrompe a execução e continua
    }
    console.log(`${y} = ${y}`)
}


//não use o break externo
externo:for(a in nums){
    for(b in nums) {
        if( a ==2 && b==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}