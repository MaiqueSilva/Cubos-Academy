//transforme "jose messias junior"
//em Jose Messias Junior

const nome = "jose messias e junior";
const arrayDeNomes = nome.split(" ");

let nomeFormatado = "";
for (let item of arrayDeNomes) {
    //transformar a inicial de cada item em maiúscula
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

console.log(nomeFormatado.trim());