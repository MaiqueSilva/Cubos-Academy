function cumprimentar(pessoa, idade)// esse parentes é chamado de parametro que é uma variavel que existe somente dentro dessa função ela não tem valor, colocamos o valor dentro do argumentos la em baixo
{
    console.log(`Ola, ${pessoa} ! Fiquei sabendo que voce tem ${idade} anos`)
}

const nome = "Maique"
cumprimentar(nome, 29);//dentro desse parente eu coloco um argumento que é o valor que eu quero que o parametro tenha ou seja o valor da variavel.
cumprimentar("Nathalia", 28);
cumprimentar("Darci", 65);
cumprimentar("Alini", 17);
cumprimentar("Toninho", 6);
