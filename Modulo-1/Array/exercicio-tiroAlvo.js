let disparos = [0, 50, 90, 80, 100, 80, 40]

soma = 0

for (let item of disparos) {
    if (item >= 70) {
        soma++
    }
}

if (soma < 3) {
    console.log("ELIMINADO")
} else {
    console.log(soma)
}
