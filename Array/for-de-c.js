const nomesDeEstudantes = ["jose", "joao", "maria", "joana", "Andre"]

//for tem a mesma função do while mas feito de forma diferente

//a repetição de for sera feito em 3 etapas
// 1- verificar a variavel i
// 2- ver se ela é menor que nomesDeEstudantes
// 3 - Caso verdadeiro, ira imprimir na tela
// 4 - depois acrescentar 1 com o i++
// 5 - reinicia tudo, ate i ser igual nomesDeEstudantes
//Resumo do percurso: Direita, direita, baixo, direita
for (let i = 0; i < nomesDeEstudantes.length; i++) {
    console.log(nomesDeEstudantes[i])
}




// let indice = 0

// while (indice < nomesDeEstudantes.length) { //while é "enquanto" em portugues.
//     //enquanto indice for menor que nomesDeEstudantes ira imprimir nomesDeEstudantes e acrescentar 1 na variavel indice
//     console.log(nomesDeEstudantes[indice])
//     indice++
// }