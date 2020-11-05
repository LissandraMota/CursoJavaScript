function verificaDivisivel(num){
    if(num % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(verificaDivisivel(3))
console.log(verificaDivisivel(2))
console.log(verificaDivisivel(150))
console.log(verificaDivisivel(55))