let palavra = "abelha"
let palpite = "a"
let soma = 0


for (let i = 0; i < palavra.length; i++) {
    if (palpite === palavra[i]) {
        soma++
    }
}

console.log(soma)