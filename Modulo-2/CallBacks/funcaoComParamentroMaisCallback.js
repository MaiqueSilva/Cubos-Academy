const somar = (primeiroNumero, segundoNumero, callback) => {
    const resltado = primeiroNumero + segundoNumero;
    callback(resltado);
}

somar(150, 159, (resultado) => {
    console.log(`Resultado da soma: ${resultado}`)
})