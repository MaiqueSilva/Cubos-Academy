const dadosPessoa = {
    nome: "Maique",
    idade: 29,
    profissao: "Motorista",
    altura: 1.73
}

function apresentação(pessoa) {
    console.log(`Olá" Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
}

apresentação(dadosPessoa)