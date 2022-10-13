// spread

const pessoa = {
    nome: "Maique",
    idade: 30,
    cidade: "São Paulo",
    profissão: "Futuro dev"
};

const endereco = {
    rua: "Aqui",
    numero: "21",
    bairro: "Bairro Legal"
}

//Caso eu queira juntas as duas propriedades a cima eu preciso criar uma variavel e usar o spread, segue exemplo:

const tudoJuntoEMisturado = {
    ...pessoa,
    ...endereco,
    novaPropriedade: "Amor" //tambem é possivel acrescentar propriedades 
}

console.log(tudoJuntoEMisturado)