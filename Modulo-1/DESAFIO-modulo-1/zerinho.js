const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

const pessoaJogouZero = []
const pessoaJogouUm = []

for (const item of jogadores) {
    if (item.jogada === 0) {
        pessoaJogouZero.push(item)
    } else {
        pessoaJogouUm.push(item)
    }
}
const [nomeJogouUm] = pessoaJogouUm;
const [nomeJogouZero] = pessoaJogouZero;

if (pessoaJogouZero.length > 1 && pessoaJogouUm.length > 1 || pessoaJogouZero.length === 0 || pessoaJogouUm.length === 0) {
    console.log("NINGUEM");
} else if (pessoaJogouZero.length === 1 && pessoaJogouUm.length > 1) {
    console.log(nomeJogouZero.nome)
} else if (pessoaJogouZero.length > 1 && pessoaJogouUm.length === 1) {
    console.log(nomeJogouUm.nome)
}


