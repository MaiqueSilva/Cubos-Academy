const imprimirDados = (funcaoCallback) => {
    const nome = " Maique SIlva";
    const idade = 30;
    funcaoCallback(nome, idade);
}

const dados = (nome, idade) => {
    console.log(`A função callback foi executada`);

    if (nome) {
        console.log(`Nome: ${nome}`);
    }
    if (idade) {
        console.log(`Idade: ${idade}`);
    }
}

imprimirDados(dados);

