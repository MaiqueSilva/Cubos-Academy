const opcoes = ["Uma", "Outra"];

let resultado = opcoes.join(); //se eu não passa nada vai separar o array por vingula
console.log(resultado); //Uma,Outra

resultado = opcoes.join("");//se eu passar um string vazio, vai juntar todo o array
console.log(resultado); //UmaOutra

resultado = opcoes.join(" ou "); //se eu colocar uma palavra, ela vai aparecer entre as palavras do array
console.log(resultado); //Uma ou Outra