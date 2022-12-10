const produtos = require("../bancosdedados");
const fs = require("fs/promises")

const listagemProdutos = async (req, res) => {
    res.status(200).json(produtos)
}


const vendas = async (req, res) => {
    const { produto_id, quantidade } = req.body;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id)
    });

    if (!produtoEncontrado) {
        return res.status(404).json("O produto não foi encontrado")
    };

    try {
        const vendas = await fs.readFile("./src/vendas.json");//para fazer a leitura do arquivo;
        const parseVendas = JSON.parse(vendas); // para converter o arquivo em um objeto valido.

        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade
        });

        await fs.writeFile("./src/vendas.json", JSON.stringify(parseVendas));

        return res.status(201).json("venda cadastrada com perfeição")

        console.log(parseVendas)

    } catch (erro) {
        return res.status(500).json("Erro do servidor")

    }

};

module.exports = { listagemProdutos, vendas }