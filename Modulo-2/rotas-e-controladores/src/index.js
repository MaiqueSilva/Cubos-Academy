const express = require("express");
const { encontrarUmProfessor, filtrarProfessores } = require(`./controladores/professores`);

const roteador = express();

const primeiroIntermediario = (req, res, next) => {
    console.log(`passei no primeiro intermediario`);
    next();
};

const segundoIntermediario = (req, res, next) => {
    console.log(`passei no segundo intermediario`);
    next();
};

const intermediarioDaRota = (req, res, next) => {
    console.log(`Passei no intermediario da rota`);
    next();
}

// roteador.use(primeiroIntermediario);
// roteador.use(segundoIntermediario);

//localhost:3000/professores
roteador.get(`/professores`, intermediarioDaRota, filtrarProfessores);

//localhost:3000/professores/1
roteador.get(`/professores/:id`, encontrarUmProfessor);


roteador.listen(8000);