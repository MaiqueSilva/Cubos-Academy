const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComosPais = true;

// tem ingresso e 
// tem idade maior ou igual a censura ou esta com os pais
if (temIngresso === true) {
    // se a variavel for booleanea, não preciso necessariamente colocar true no codigo
    // se eu so colocar (temIngresso), sem colocar === true, não tem problema pois o JS ja entende que é true
    if (idade >= censura || estaComosPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else { console.log("Barrada") }
