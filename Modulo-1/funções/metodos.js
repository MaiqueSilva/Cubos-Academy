const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos 
        e sou ${this.profissao}.`);
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
}

pessoa1.apresentar();
console.log(pessoa1.determinarFaixaEtaria());