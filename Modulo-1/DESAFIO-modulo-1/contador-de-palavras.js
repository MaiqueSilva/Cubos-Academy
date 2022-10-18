//Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.

// Input Format

// A entrada será sempre um texto qualquer

// Constraints

// A entrada será sempre um texto qualquer com no máximo 5000 caracteres.

// Output Format

// Imprima na tela a quantidade de palavras contidas no texto.

const texto = "Cuidado,        e        pois usuarios as vezes deixam                 espacos vazios no fim do texto sem querer"







const limparEspaco = texto.replace(/\s+/g, " ").trim();
const contador = limparEspaco.split(" ");
const quantpalavras = contador.length;
console.log(quantpalavras)
// console.log(contador.length)



// parte do codigo antigo, tirei essa para melhorar usando o de cima.
// let contadorPalavra = 0



// for (let item of contador) {
//     contadorPalavra++
// }

// console.log(contadorPalavra)


