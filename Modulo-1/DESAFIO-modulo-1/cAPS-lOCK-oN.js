//Consideramos que uma palavra foi escrita com caps lock 
//se ou todas as suas letras forem maiúsculas 
//ou se a primeira for minúscula e todas as outras maiúsculas. 
//a correção nesses casos é inverter todas as letras.

function palavra(input) {

    let palavraEditada = "";


    if (input === input.toUpperCase() || input[0] === input[0].toLowerCase() && input[1] === input[1].toUpperCase()) {


        for (let item of input) {
            if (item === item.toLowerCase()) {
                item = item.toUpperCase();
                palavraEditada += item;
            } else if (item === item.toUpperCase()) {
                item = item.toLowerCase();
                palavraEditada += item;

            }
        }
        console.log(palavraEditada)

    } else {
        console.log(input)
    }

}

palavra("aJJJJJ")




//PRIMEIRO CODIGO.
// function palavra(input) {


//     let palavraEditada = "";

//     //se todas forem MAIÚSCULAS, imprime minuscula
//     if (input === input.toUpperCase()) {
//         console.log(input.toLowerCase());

//         //se todas forem minuscula, imprime minuscula.
//     } else if (input === input.toLowerCase()) {
//         console.log(input);
//         //se a primeira for minuscula, a primeira fica MAIÚSCULA  e o resto minuscula
//     } else {
//         for (let item of input) {
//             if (item === item.toLowerCase()) {
//                 palavraEditada = input[0].toUpperCase() + input.slice(1).toLowerCase();
//                 console.log(palavraEditada.trim())
//                 break;
//             }
//         }
//     }

// }


// palavra("cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.")