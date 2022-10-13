const valorDaCompra = 100;
const numeroDeParcelas = 3;


if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10 / 100;
    const valorApagar = valorDaCompra - desconto;
    console.log(`Tendo em vista que o pagamento é a vista, você tem um desconto de 10%, sendo assim valor da compra fica R$ ${valorApagar}`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)
} else {
    console.log("Pagamento somente a vista ou parcelado em 6 vezes")
}