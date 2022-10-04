//saber se um email é valido
//tem quie ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

//INDEXOF = SERVE PARA LOCALIZAR UMA STRING OU PALAVRA ESPECIFICA E IRA RETORNAR O INDICE

const email = "maique.almeida@hotmail.com";

const indexArroba = email.indexOf("@");

const indexPonto = email.indexOf(".", indexArroba);

if (indexPonto > indexArroba) {
    console.log("e-mail de acordo com enunciado")
} else {
    console.log(" não esta de acordo")
}


