const resultado = ["V", "E", "V", "E"
]

let soma = 0

for (let item of resultado) {
    if (item === "V") {
        soma += 3
    } else if (item === "E") {
        soma++
    }
}

console.log(soma)