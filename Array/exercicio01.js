const pais = ["Brasil", "Canada", "Australia", "Russia", "USA"]
console.log(pais);

//adicionando um pais do fim da lista
pais.push("Suecia");
console.log(pais);

//removendo um pais do fim da lista
pais.pop();
console.log(pais);

//adicionando um pais do inicio da lista
pais.unshift("Japão");
console.log(pais);

//removendo um pais do inicio da lista
pais.shift();
console.log(pais);

//imprimir o ultimo item da lista
const ultimo = pais[pais.length - 1];//feito certo de fazer
console.log(ultimo)
// console.log(pais[4]) Eu tinha feito assim, não esta errado mais não é indicado. Pois pode dar erro muito facil.

// imprima o segundo pais da lista
console.log(pais[1])

//Imprima o pais de indice 2 
console.log(pais[2])