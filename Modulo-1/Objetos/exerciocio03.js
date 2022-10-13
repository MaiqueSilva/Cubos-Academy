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

//imprima o nome do cliente
console.log(cartao.nome);
//imprima a idade do cliente
console.log(cartao.idade);
//modifique a idade do cliente
cartao.idade = 25;
//imprima a nova idade do cliente
console.log(cartao.idade);
//imprima o nome do primeiro produto consumido
console.log(cartao.produtos[0].nome);
//imprima o preço do ultimo produto
console.log(cartao.produtos[2].precoUnit);