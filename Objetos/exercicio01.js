const pessoa = {
    nome: "Maique",
    idade: 30,
    altura: 1.70,
    temCNH: true,
    apelido: ["Mike Love"]
};

let textoCNH = pessoa.temCNH ? "Possuie CNH" : "Não possuie CNH"; //Tenario




console.log(`${pessoa.nome} tem ${pessoa.idade} anos de idade, ${pessoa.altura} de altura, ${textoCNH} e o seguinte apelido :`)
for (const item of pessoa.apelido) {
    console.log(`- ${item}`)
};