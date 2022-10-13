const numeros = [8, 284, 315, 215, 215, 871]; // tamanho 6
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    //sera executado para i de 0 ate 7 | 8 nao sera mais executado
    // let i; é a variavel para controlar o indice
    // i < numeros.length; em quanto o i for menor que o tamanho do array
    // i++; o indice ira aumentar de um em um
    soma += numeros[i]
    //numeros[i]; é utilizado pois o [i], significa cada indice do array
}

console.log(soma)