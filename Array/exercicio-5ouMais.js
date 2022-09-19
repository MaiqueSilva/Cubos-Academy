let precos = [100, 500, 100, 100, 15]


let menorNumero = precos[0]
let soma = 0

for (let item of precos) {
    soma = item += soma
}

for (let item of precos) {
    if (item < menorNumero) {
        menorNumero = item
    }
}


if (precos.length <= 4) {
    console.log(soma)
} else if (precos.length >= 5) {
    soma = soma - menorNumero
    console.log(soma)
}




