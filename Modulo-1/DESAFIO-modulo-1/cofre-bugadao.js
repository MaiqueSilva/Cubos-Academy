//O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

//Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

//A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

function senha(input) {

    let separarEntrada = input.split(" ")
    let senha = separarEntrada[0];
    let senhaDigitada = separarEntrada[1];
    let senhaCerta = ""


    for (let i = 0; i < senhaDigitada.length; i++) {

        let indice = senha.indexOf(senhaDigitada[i]);

        if (indice >= 0 && indice >= senhaCerta.length - 1) {
            senhaCerta += senha[indice]
        }

    }
    if (senhaCerta === senha) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }

}
senha("ccubos ccugcgbyos")
