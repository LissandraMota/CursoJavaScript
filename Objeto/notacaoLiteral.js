const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c} //antes, caso queira por outro nome deve utilizar essa forma
const obj2 = {a, b, c} //atualmente
console.log(obj1, obj2)

const nomeAtrib = "nota"
const valordoAtrib = 7.87

const obj3 = {}
obj3[nomeAtrib] = valordoAtrib //chave e valor
console.log(obj3)

//atual
const obj4 = {[nomeAtrib] : valordoAtrib}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //.....
    },
    //forma mais nova:
     funcao2(){
        //...
    }
}

console.log(obj5)
