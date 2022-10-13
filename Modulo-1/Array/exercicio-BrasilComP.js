let palavras = ["aveia", "manha", "ave"]
let primeiraLetra = "a"
let segundaLetra = "B"

let letrasCombinada = []

for (let item of palavras) {
    if (item[0] === primeiraLetra && item[1] === segundaLetra) {
        letrasCombinada.push(item)
    }

}

for (let item of letrasCombinada) {
    if (item[0] === primeiraLetra && item[1] === segundaLetra) {
        console.log(item)

    }
}

if (letrasCombinada.length === 0) {
    console.log("NENHUMA")
}