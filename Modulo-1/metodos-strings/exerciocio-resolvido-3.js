function imprimirData(dia, mes, ano) {
    //duas opcoes de se transformar number em string
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = `${mes}`.padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(18, 2, 2021);