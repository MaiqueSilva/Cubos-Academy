const valorDaCompra = 100;
const numeroDeParcelas = 0;


if (numeroDeParcelas === 1) {
    //desconto de 10%
    const desconto = valorDaCompra * 10 / 100;
    const valorApagar = valorDaCompra - desconto;
    console.log(`Tendo em vista que o pagamento é a vista, você tem um desconto de 10%, sendo assim valor da compra fica R$ ${valorApagar}`)
}
else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // sem juros
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)
}
else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //juros de 1% ao mes
    const montante = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcelaComJuros = (montante / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar ${numeroDeParcelas} x de R$ ${valorDaParcelaComJuros}, com juros o valor fica R$ ${montante}`)
}
else { console.log("numero de parcelas invalidas") }