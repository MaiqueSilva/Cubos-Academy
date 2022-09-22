const pessoa = {
    nome: "Jose",
    altura: 1.73,
    peso: 60
}

pessoa.nome = "Pedro"
//Para acessar as propriedades de um objeto utilizamos o objeto.nome da propriedades

pessoa[nome] = "Rodrigo"
//usar pessoa.nome ou pessoa[nome], tem a mesma função que é acessar a propriedade de um objeto

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}Kg.`)