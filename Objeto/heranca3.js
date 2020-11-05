// Object.create

const pai = {nome:"Pedro", corCabelo:"Preto"}

const filha1 = Object.create(pai) //criou o objeto filha tendo como protótipo o obj pai
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "Luna", writable: false, //não vai aceitar ser mudado
      enumerable: true} //permite ser listado
})

console.log(filha2.nome)
filha2.nome = "Carla" //não muda para carla - writable = false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //chave
console.log(Object.keys(filha2))

for(let key in filha2){ //todos os atributos sendo impressos
    console.log(key)
}


// forma de saber se determinado atributo veio pelo próprio obj ou por herança --> for in
for(let key in filha2){
   filha2.hasOwnProperty(key) ? //hasOwnProperty - se a propriedade pertence a filha 2
   console.log(key) : console.log(`Por herança: ${key}`)
}
