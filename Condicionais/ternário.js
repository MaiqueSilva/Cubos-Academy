// tenario: imprimir tudo em uma linha só
//Uma forma mais simples de fazer um if

const saldo = 1;

const unidade = saldo === 1 ? "real" : "reais";

console.log(`Você tem ${saldo} ${unidade}`)

// o tenario é como tivesse fazendo igual o codigo abaixo

// if (saldo === 1){
//     unidade = "real"
// } else {unidade = "reais"}

//-----------------------------------------------

//Forma mais longa de fazer

// if (saldo === 1) {
//     console.log(`Você tem ${saldo} real`)
// }
// else {
//     console.log(`Você tem ${saldo} reais`)
// }