function inverterString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    const textoInvertido = arrayDeLetras.join("");//melhor que passar um for para juntar todo o array
    console.log(textoInvertido);
}

inverterString("Cubos Academy");