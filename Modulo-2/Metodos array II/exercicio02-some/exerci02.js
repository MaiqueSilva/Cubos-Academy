const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.txt'
];




// const antiVirus = (arrayArquivos) => {
//     const resultado = arrayArquivos.some((arquivo) => {
//         const existeExtensao = arquivo.indexOf('.bat');
//         console.log(existeExtensao)
//         return existeExtensao !== -1;
//     });
//     if (resultado) {
//         console.log('vírus detectado');
//     } else {
//         console.log('nenhum vírus encontrado');
//     }

// }
// antiVirus(arquivos);


const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((cadaArquivo) => {
        return cadaArquivo.slice(-4, cadaArquivo.length) === ".bat"
    })

    if (resultado) {
        console.log("vírus detectado")
    } else {
        console.log("nenhum vírus encontrado")
    }
}
antiVirus(arquivos);