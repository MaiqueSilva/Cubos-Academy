const temIngresso = false;
const censura = 16;
const idade = 18

//ter ingresso e ter idade maior ou igual a censura

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("pode entrar");
    } else {
        console.log("barrada pela censura");
    }
} else { console.log("Barrada por falta de ingresso") }


    // se a variavel for booleanea, não preciso necessariamente colocar true no codigo
    // se eu so colocar (temIngresso), sem colocar === true, não tem problema pois o JS ja entende que é true