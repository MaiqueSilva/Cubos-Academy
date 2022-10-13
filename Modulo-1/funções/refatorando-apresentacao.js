//refatorando = melhorando um codigo anterior.
// exemplo: vamos melhorar o codigo da primeira aula.


function apresentar(pessoa) {
    if (pessoa.idade < 21) {
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos 
    e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos 
    e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos 
    e sou ${pessoa.profissao}.`);
    }
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}


apresentar(pessoa1);


const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}


apresentar(pessoa2);


const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
}


apresentar(pessoa3);