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


palavra("LETRAS.")