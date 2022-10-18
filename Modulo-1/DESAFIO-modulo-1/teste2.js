
function senha(senha, entrada) {
    let senhaCerta = ""

    for (let i = 0; i < entrada.length; i++) {
        let teste3 = senha.indexOf(entrada[i]);

        if (teste3 >= 0 && teste3 >= senhaCerta.length - 1) {
            senhaCerta += senha[teste3]
        }

    }
    if (senhaCerta === senha) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }


}
senha("cubos", "ewvelrabsocaeln")
