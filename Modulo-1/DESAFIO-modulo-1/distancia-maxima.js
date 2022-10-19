const coordenadas = [{ x: 0, y: 0 }, { x: 0, y: 3 }, { x: 4, y: 0 }]


// const linhas = input.trim().split("\n");
// const n = parseInt(linhas[0]);

// for (let i = 1; i < linhas.length; i++) {
//     const coord = linhas[i].split(" ");
//     coordenadas.push(
//         {
//             x: parseInt(coord[0]), //transformar string em numero decimal
//             y: parseInt(coord[1], 10), //mesmo coisa de cima.
//         }
//     )
// }

let valorMaximo = 0

for (let i = 0; i < coordenadas.length; i++) {
    let x1 = coordenadas[i].x;
    let y1 = coordenadas[i].y;
    let x2 = coordenadas[i++].x;
    let y2 = coordenadas[i++].y;


    let calculo = Math.sqrt((x2 - x1) * 2 + (y2 - y1) * 2);
    if (calculo >= valorMaximo) {
        valorMaximo = calculo
    }

}

console.log(valorMaximo)





