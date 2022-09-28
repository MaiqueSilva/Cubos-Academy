function faixaEtaria(idade) {

    if (idade >= 22 && idade <= 65) {
        return "Essa pessoa é adulta";

    } else if (idade < 22) {
        return "Essa pessoa é Jovem";

    } else {
        return "Essa pessoa é idosa";

    }
}

// const resultado = faixaEtaria(125) // Não é obrigatorio guardar em uma variavel

console.log(faixaEtaria(21))