const usuarios = [
    { nome: "Maique", idade: 29 },
    { nome: "Nathalia", idade: 18 },
    { nome: "Alini", idade: 16 }
]


const verificar = (arrayDeObjetos) => {
    const resultado = arrayDeObjetos.every((teste) => {
        return teste.idade > 17
    })

    if (resultado) {
        console.log("Festa liberada!")
    } else {
        console.log("Possui menor de idade!")
    }
}

verificar(usuarios)