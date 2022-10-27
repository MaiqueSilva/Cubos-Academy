// Callback Teoria
// Se formos traduzir ao pé da letra teremos - "Me liga de volta" ou "Chamada de Retorno"
// Uma função callback, é uma função que será executada quando algum código
// chegar no estado que é desejado

// Transformando uma sintaxe de function para arrow function
// 1º passo: alterar a palavra reservada function 
// para let ou const
// 2º passo: entre o nome da função e a abertura dos parênteses do parâmetro
// iremos atribuir o símbolo `=`
// 3ª passo: entre o fechamento dos parênteses onde informamos os parâmetros
// e a chave que inicia a função iremos atribuir o símbolo `=>`

// função - método
// const x = (callback) => {
//     console.log("sou a função x()")
//     callback(z)
// }

// const y = (callback) => {
//     console.log("sou a função y()")
//     callback()
// }

// const z = () => {
//     console.log("sou a função z()")
// }

// x(y)

// const teste1 = (callback) => {
//     console.log("sou a função teste1()")
//     callback()
// }

// function teste2(){
//     console.log('Sou a função teste2()');
// }

// teste1(teste2)
// Callback -> mais métodos de array (filter, reduce, etc...)
// DRY - Don't Repeat Yourself (Não repita você mesmo)
// Assíncronismo (async await)

// Na grande maioria das vezes é passada como argumento (parâmetro) de outra função.

// Vamos imaginar o seguinte caso de uso:
// Temos duas pessoas e apenas 1 caneta
// E temos um método escrever(), e o método callback emprestarCaneta()
// Logo a pessoa1 executará o método escrever() e quando for finalizado
// chamará o método emprestarCaneta()
// Enquanto o emprestarCaneta() não for executado,
// a pessoa2 ficará aguardando...

// Porém no momento de executar o código segue a ordem de linha por linha, ou seja,
// interpreta de cima para baixo da esquerda para direita cada linha do código...

// Logo se informar primeiro a função callback ela será executada primeiro, porém,
// acaba que sendo o sentido contrário do propósito do callback, que é ter uma função
// como argumento a função será executada após o processamento da função "principal",
// como ilustrado abaixo:
// function escrever(callback) {
//     callback();
//     console.log('Escrevendo neste momento');
// }

// function emprestarCaneta() {
//     console.log('Emprestando a caneta após escrever');
// }

// escrever(emprestarCaneta);

// Neste caso o correto seria adicionar a chamada da função callback dentro do método escrever()
// no final, porque desta forma, o método "principal" já teria sido executado,
// como ilustrado abaixo:

// function escrever(callback) {
//     console.log('Escrevendo neste momento');
//     callback();
// }

// function emprestarCaneta() {
//     console.log('Emprestando a caneta após escrever');
// }

// escrever(emprestarCaneta);

// Vamos ao exemplo que irei construir com vocês utilizando 
// o array de objetos abaixo pets
const pets = [
    {
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'Akita inu',
        servicos: [],
    },
    {
        nome: 'Bolt',
        tipo: 'cachorro',
        raca: 'Husky Siberiano',
        servicos: [],
    },
    {
        nome: 'Lulu',
        tipo: 'cachorro',
        raca: 'Zwergspitz (Splitz Alemão)',
        servicos: [],
    },
    {
        nome: 'Salsicha',
        tipo: 'cachorro',
        raca: 'Dachshund',
        servicos: [],
    },
];

// Criar uma função callback darBanhoNoPet, e,
// sempre que ocorrer um banho,
// iremos armazenar dentro do array de serviços.
// Criaremos uma função servicoRealizado que chamará a darBanhoNoPet
// 1 - Teremos que nos preocupar em percorrer a lista de pets
//     a. Verificar se o pet existe dentro da lista
//     b. Caso não exista teremos que retornar uma mensagem
//     c. Caso exista iremos adicionar um servico (que é o servico de banho)
// function servicoRealizado(listaPets, nomePet, callback) {
//     let petEncontrado;
//     for (const pet of listaPets) {
//         if (pet.nome == nomePet) {
//             petEncontrado = pet;
//         }
//     }

//     if (petEncontrado) {
//         callback(petEncontrado);
//     } else {
//         console.log(`O pet ${nomePet} não foi encontrado`)
//     }
// }

// function darBanhoNoPet(pet) {
//     pet.servicos.push('tomou banho');
//     console.log(`O pet ${pet.nome} tomou banho`)
// }

// servicoRealizado(pets, 'Yoshi', darBanhoNoPet);
// console.log(pets);

