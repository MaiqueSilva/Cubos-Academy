const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
]

const filtrar = (arrayProfessores) => {
    const profBack = arrayProfessores.filter((professor) => {
        return professor.stack === "backend"
    })
    const profFront = arrayProfessores.filter((professor) => {
        return professor.stack === "frontend"
    })
    console.log(profBack);
    console.log(profFront);

}

filtrar(professores)