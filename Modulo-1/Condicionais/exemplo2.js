const temIngresso = true;
const censura = 16;
const idade = 18


// tem ingresso e idade maior ou igual a censura

if (temIngresso === true && idade >= censura) {
    console.log("Pode entrar.");
} else {
    console.log("Barrada.")
}


    // se a variavel for booleanea, não preciso necessariamente colocar true no codigo
    // se eu so colocar (temIngresso), sem colocar === true, não tem problema pois o JS ja entende que é true