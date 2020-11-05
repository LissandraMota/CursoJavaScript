const imprimirResultado = function (nota){      //mAth.floor ->arredonda pra menos
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de honra") // entra nesse tanto se for 10 ou 9, pq o break só está abaixo da instrução do case 9
            break //break causa a sáida do bloco associado ao swicth
         case 8:
         case 7:
             console.log("Aprovado") // entra se for tanto 8 ou 7, pq o break só está abaixo da instrução do case 7
             break
        case 6:
        case 5:
            console.log("Recuperação") // entra se for 6 ou 5, pq o break só está abaixo da instrução do case 5
            break
        case 3: case 2: case 1: case 0:
            console.log("reprovado")   // entra para 3, 2, 1 e 0, pq o break só está abaixo da instrução do case 0  
            break
        default:
            console.log("Nota inválida")                   
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

//swicth é uma seleção múltipla
//swicth não é uma expressão relacional, que retorna verdadeiro ou falso
//swicth por padrão usa o break para que ele possa executar um dos case e sair e com isso, não executar automaticamente todos que vem abaixo
