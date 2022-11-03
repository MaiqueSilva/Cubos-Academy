const imprimirMensagem = (nome, idade) => {
    console.log(`Ola ${nome}, voce tem ${idade} anos `)
}

setTimeout(imprimirMensagem, 1000, "Jumento", 21);