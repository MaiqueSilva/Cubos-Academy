// faca um programa que imprime uma mensagem, chamando o cliente pelo nome  e informando o valor que ele deve pagar.

let totalPagar = 0

const cartao = {
    nome: "Maique",
    idade: 30,
    produtos: [
        {
            nome: "PC da Nasa",
            precoUnit: 100000,
            unidade: 1,
        },
        {
            nome: "Xiaomi",
            precoUnit: 150000,
            unidade: 1,
        },
        {
            nome: "PS5",
            precoUnit: 500000,
            unidade: 1,
        }
    ]
}

for (const item of cartao.produtos) {
    totalPagar += item.precoUnit * item.unidade;
}

console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${(totalPagar / 100).toFixed(2)}`)