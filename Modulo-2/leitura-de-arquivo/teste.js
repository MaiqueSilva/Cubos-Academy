const fs = require("fs/promises");

(async function () {

    const arquivoJson = await fs.readFile("teste.json");//readFile para executar o arquivo teste.json;

    //o arquivoJson esta sendo executado como string

    const pessoas = JSON.parse(arquivoJson);// JSON.parse converte a string para um objeto, obs: tem que ser arquivo jSon

    pessoas.push({
        nome: "Guido",
        idade: 31
    });

    const arrayJson = JSON.stringify(pessoas)// para converter o objeto Js em formato json

})();