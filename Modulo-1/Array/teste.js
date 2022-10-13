let menorPrejuizo = 9999999999
for (let i = 0; i < precos.length; i++) {
    for (let o = i + 1; i < precos.length; o++) {
        const compra = precos[i];
        const venda = precos[o];
        const prejuizo = compra - venda;

        if (prejuizo > 0) {
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo
            }
        }
    }
}