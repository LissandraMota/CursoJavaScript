function bissexto(ano){
    if (ano <= 0){
        console.log("O ano não é bissexto.")
        return false
    }else if (ano % 400 == 0){
        console.log("O ano é bissexto.")
        return true
    }else if(ano % 100 == 0){
        console.log("O ano não é bissexto")
        return false
    } else if(ano % 4 == 0){
        console.log("O ano é bissexto.")
        return true
    } else {
        console.log("O ano não é bissexto")
        return false
    }
}

console.log(bissexto(0))
console.log(bissexto(100))
console.log(bissexto(2020))