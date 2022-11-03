const frutas = ["abacaxi", "Banana", "melhancia", "kaki"];
const numeros = [1, 5, 4, 8, 6, 10]

// const resultado = frutas.every((elementoAtual) => {
//     return elementoAtual != "kaki"
// })

const resultado = numeros.every((numero) => {
    return numero < 9;
})

console.log(resultado)