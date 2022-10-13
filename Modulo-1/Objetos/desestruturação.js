//Desestruturação de objetos - Destructuring

const pessoa = {
    nome: "Maique",
    idade: 30,
    cidade: "São Paulo",
    profissão: "Futuro dev"
}

//Aqui não estamos criando um novo objeto, e sim destruturando um ja criado.
//nota-se que o {} esta do lado esquerdo do =, se fosse para criar teria que esta o {} deveria esta do lado direito do = 
const { nome, idade, ...outros } = pessoa
// é a mesma coisa que fazer isso:
// const nome = pessoa.nome;
//const idade = pessoa.idade

console.log(nome, idade);
console.log(outros)// usamos o ... caso queremos guardar o restante das propriedades de um objeto em um variavel.