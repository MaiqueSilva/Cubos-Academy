const professores = require(`../bancodedados`)

const filtrarProfessores = (req, res) => {
    console.log("cheguei na listagem de professor")
    const { stack } = req.query;
    let resultado = professores;
    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    }
    res.send(resultado);

};

const encontrarUmProfessor = (req, res) => {
    console.log(" rota para encontrar um professor")
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    });
    res.send(professorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}