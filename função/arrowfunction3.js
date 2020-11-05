//função normal
let comparaComThis = function(param){
    console.log(this === param) //comparando
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //associou o comparacomthis o obj a partir da função bind

// a partir de agora sempre que chamar o compararcomthis vai para o obj e não para o escopo global
comparaComThis(global) //false pq o this por cota do bind agora aponta para obj
comparaComThis(obj)

//função arrow
let comparaccomthisArrow = param => console.log(this === param)
comparaccomthisArrow(global) //false não aponta pro global
comparaccomthisArrow(module.exports) //true

//bind dento de uma função arrow para ver se de fato consegue mudar a referência do this
comparaccomthisArrow = comparaccomthisArrow.bind(obj) //obj da linha 8

comparaccomthisArrow(obj) //false, arrow function é mais forte que o bind, com isso o this não muda para o obj
comparaccomthisArrow(module.exports)

//mesmo usando o bind não se consgue mudar o this de uma função arrow
