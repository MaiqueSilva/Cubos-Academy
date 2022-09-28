const pessoa = {
    nome: "Joao",
    idade: 65,
    altura: 1.4,
    profissao: "Estudante"
}

function apresemtacao(idade) {
    if (idade >= 22 && idade <= 65) {
        return "adulto(a)";

    } else if (idade < 22) {
        return "Jovem";

    } else {
        return "idosa(o)";

    }
}


const resultado = apresemtacao(pessoa.idade)

console.log(`Olá" Meu nome é ${pessoa.nome}, sou um ${resultado} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
