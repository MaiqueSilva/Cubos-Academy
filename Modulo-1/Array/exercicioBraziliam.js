let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let menorNumero = notas[0]
let maiorNumero = notas[0]
let soma = 0

for (let item of notas) {
    if (item > maiorNumero) {
        maiorNumero = item
    }
}

for (let item of notas) {
    if (item < menorNumero) {
        menorNumero = item
    }
}


for (let item of notas) {
    soma = item += soma
}

let descarte = maiorNumero + menorNumero
let media = (soma - descarte) / (notas.length - 2)


console.log(media)
