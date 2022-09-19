//cliente ira usar um carrossel com imagens, dando clique para frente e para traz, o carrossel tem um limite de 6 imagens


let sequencia = ["<"]
let soma = 0


for (let i = 0; i < sequencia.length; i++) {
    if (soma < 0) { soma = 6 }
    else if
        (soma > 6) { soma = 0 }


    if (soma[i] < 0) { soma[i] = 6 }
    else if
        (soma[i] > 6) { soma[i] = 0 }
    if
        (sequencia[i] == ">") {
        soma++
    }
    else if (sequencia[i] == "<") {
        soma--
    }

}

if (soma < 0) { soma = 6 }
else if
    (soma > 6) { soma = 0 }

console.log(soma)
