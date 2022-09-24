const array = [1, 2, 3, 4, 5, 6];

//Aqui não estamos criando um novo array, e sim destruturando um ja criado e criando variaveis
//nota-se que o [] esta do lado esquerdo do =, se fosse para criar teria que esta o [] deveria esta do lado direito do = 

// const a = array[0]; é a mesma coisa de baixo
// const b = array[1];

const [a, b,// variaveis criada
    ...resto//aqui eu guardo o resto do array caso eu queira
]
    =
    array; // o array que eu quero desestruturar

console.log(a, b, resto)
