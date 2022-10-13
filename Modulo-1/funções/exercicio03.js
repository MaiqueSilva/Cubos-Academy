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


//correção--------------------------------------

function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade < 66) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos 
    e sou ${pessoa.profissao}.`);
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}
apresentar(pessoa1);