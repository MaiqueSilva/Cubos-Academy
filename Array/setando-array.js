//Como Modificar itens do array

const nomesDeEstudantes = ["jose", "joao", "maria", "joana", "Andre"]
const x = 3

nomesDeEstudantes[0] = "Andreia" //Mudando Jose para andreia
nomesDeEstudantes[1] = "Andreia"
nomesDeEstudantes[2] = "Andreia"
nomesDeEstudantes[x] = "Andreia" //Não precisa necesariamente colocar um numero

//Esta sendo alteração um item do array, e mão o array todo, por isso que esta imprimento
// nomesDeEstudantes = [] // Nesse caso daria errado pois, estamos usando variavel const e estaria mudando todo o array e não so o item

console.log(nomesDeEstudantes)