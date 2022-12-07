const express = require("express");
const { getCityFromZipcode, getPackageDescriptionNpm } = require("utils-playground")

const app = express();

app.get("/", async (req, res) => {
    const cidade = getCityFromZipcode("03916000");
    const cidade2 = getCityFromZipcode("41256250");

    const promise = await Promise.all([cidade, cidade2]);

    console.log(promise)
    const [resposta1, resposta2] = promise

    res.send(`a cidade encontra foi: ${resposta1} e ${resposta2}`)
});

app.get("/pacote/:nomePAcote", async (req, res) => {
    const { nomePAcote } = req.params;

    const descricaoPAcote = await getPackageDescriptionNpm(nomePAcote);

    return res.send(descricaoPAcote)
})

app.listen(3000)