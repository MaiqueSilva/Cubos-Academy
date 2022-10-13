//declaração tradicional (sofre hoisting)
// function soma(x, y) {
//     //codigo
//     const resultado = x + y;
//     return resultado;
// }

// declaração com arrow-function (não sofre hoisting)
const soma = (x, y) => {
    //codigo
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 2));
