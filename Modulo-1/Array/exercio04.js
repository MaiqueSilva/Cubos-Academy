const palavra = "So sei que nada sei"
let soma = 0

for (let letra of palavra) {
    if (letra === "a" || "S") {
        soma++
    }
}

console.log(soma)