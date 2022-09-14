const palavra = "Super Homem";

let encontrado = false;

for (let letra of palavra) {
    if (letra === "h" || letra === "H") {
        console.log("tem a letra h");
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("não tem h")
}