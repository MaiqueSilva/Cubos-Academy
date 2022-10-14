// Num jogo de futebol entre amigos é muito comum que ninguém queira ser o goleiro. Para resolver esse impasse, um time decidiu utilizar o jogo "Americano".

// Neste jogo, o time faz uma roda e cada um dos jogadores "joga" um número X qualquer. Após isso, o capitão do time soma todos os números jogados e obtém o resultado S. Depois, começa a contar de 1 até S apontando inicialmente para si mesmo (e falando alto e claramente "um"), depois para o jogador imediatamente a sua direita (e falando "dois") e assim por diante. O goleiro será aquele que estiver sendo apontado quando o capitão chegar a S.

// Para fins de facilitar a resposta do problema, vamos considerar que o capitão está na posição 1, o jogador a sua direita está na posição 2, o jogador a direita deste está na posição 3, e assim por diante.

// Você deve fazer um programa que determina qual a posição do jogador que deve ser o goleiro.

// Input Format

// A entrada será um array com N números, que corresempondem ao número jogado por cada um dos jogadores do time. Logo, se o array tiver tamanho 11, significa que este time tem 11 jogadores, por exemplo.

// Constraints

// 0 < X < 11

// N < 12

// Output Format

// Imprima na tela a posição em que está o jogodar que foi sorteado para ser o goleiro.

const numeros = [1, 5, 2, 5, 2, 3, 4, 5];

let soma = 0;
let index = 0;

for (let item of numeros) {
    soma += item
}

for (let i = 0; i < soma; i++) {

    if (i === numeros.length || index === numeros.length) {
        index = 1;
    } else if (i > numeros.length || i < numeros.length) {
        index++;
    }
}
console.log(index)