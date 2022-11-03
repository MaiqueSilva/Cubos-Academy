

//o some vai retornar se pelo menos um passar no teste

// const nomes = ["Rodrigo", "Maique", "Nathalia", "Bel"];
const numeros = [6, 2, 4, 8, 6, 10]

// const resultado = nomes.some((nome) => {
//     return nome === "Maique"
// });

const resultado = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(resultado)