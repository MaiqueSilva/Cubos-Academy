const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// })

// const cidade = getCityFromZipcode('41256250');

// cidade.then(cidade => {
//     console.log(cidade);
// });

// cidade.catch((erro) => {
//     console.log(erro.message);
// })

// console.log(cidade);

// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
//     getStateFromZipcode('41256250').then(uf => {
//         console.log(uf);
//         getStateFromZipcode('41256250').then(uf => {
//             console.log(uf);
//             getStateFromZipcode('41256250').then(uf => {
//                 console.log(uf);
//             })
//         })
//     })
// }).catch((erro) => {
//     console.log(erro);
// })

// async / await
(async function () {
    const cidade = await getCityFromZipcode('41256250');

    console.log(cidade);

    const estado = await getStateFromZipcode('41256250');

    console.log(estado);
})();

// padrão normal
// async function teste() {
//     return
// }

// arrow function
// const teste = async () => {

// }

// console.log(teste())
