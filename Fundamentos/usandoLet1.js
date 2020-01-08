var numero = 1
{
    let numero = 2
    console.log("dentro =", numero)
}

console.log ("fora=",numero)

//qualquer bloco o let vai ter escopo dentro do bloco, independente de ser function ou não
// variável var só tem escopo global e de função
//variávl let tem escopo global, de função e de bloco