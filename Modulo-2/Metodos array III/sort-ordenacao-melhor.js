const numeros = [3, 20, 13, 50, 1, 4, 2, 13];

// ordenação crescente
numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);

// ordenação decrescente
numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);