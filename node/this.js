console.log(this === global) //false -->this aponta para o module exports e não para global
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// dentro de uma função o this não aponta para export e sim para global
function logThis() {
    console.log("dentro de uma função..")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()