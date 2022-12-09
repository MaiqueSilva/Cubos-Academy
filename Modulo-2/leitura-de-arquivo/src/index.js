const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const texto = 'tudo bem?';

    await fs.writeFile('./src/b.txt', texto); //writeFile serve para escrever em um arquivo, no primeiro parametro voce passa o arquivo que quer escrever, caso o arquivo nao exista ele ira criar o arquivo, ja no segundo parametro passamos o texto ou conteudo que queremos acrescentar no arquivo.

    res.json('ok');
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    try {
        const teste = await fs.readFile('./src/usuarios.json');

        const pessoas = JSON.parse(teste);

        pessoas.push({ nome, idade });

        const pessoasStringify = JSON.stringify(pessoas);

        await fs.writeFile('./src/usuarios.json', pessoasStringify);

        return res.json('Pessoa cadastrada com sucesso.');
    } catch (erro) {
        return res.json(`Deu erro: ${erro.message}`);
    } finally {
        console.log('isso sempre será executado');
    }
});

app.listen(3000);