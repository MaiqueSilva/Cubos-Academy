const coordenadas = [{ x: 0, y: 0 }, { x: 0, y: 3 }, { x: 4, y: 0 }]

let index1 = 0
let index2 = 1
let valorMaximo = 0
let contagem = 0

for (let i = 0; i < coordenadas.length; i++) {
    let x1 = coordenadas[index1].x;
    let y1 = coordenadas[index1].y;
    let x2 = coordenadas[index2].x;
    let y2 = coordenadas[index2].y;
    index2++;

    if (i === coordenadas.length || index2 === coordenadas.length) {
        index1++;
        index2 = 0;
        i = -1;
    }
    //  else if (i > coordenadas.length || i < coordenadas.length) {
    //     index2++;
    // }




    let calculo = Math.sqrt((x2 - x1) * 2 + (y2 - y1) * 2);
    if (calculo >= valorMaximo) {
        valorMaximo = calculo
    }

    contagem++
}

console.log(valorMaximo)
console.log(contagem)