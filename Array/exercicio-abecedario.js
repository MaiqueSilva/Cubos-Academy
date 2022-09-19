//se alguem colocar a palavra que não for de acordo com a letra, perde!

const letras = "m"

const palavras = ["mamao", "maca", "melao", "melancia", "laranja"]


let perdeu = 0

for (let item of palavras) {
    if (item[0] != letras) {
        perdeu++
    }
}

console.log(perdeu) //quantidade de pessoas que  perdeu.