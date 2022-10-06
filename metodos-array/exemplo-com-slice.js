function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 10 / 100);
    const endIndex = Math.floor(dados.length * 90 / 100);
    const fatia = dados.slice(startIndex, endIndex);
    console.log(startIndex, endIndex);
    console.log(fatia);
}

const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68,
    49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

filtrar80(dados);