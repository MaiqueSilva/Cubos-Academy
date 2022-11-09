
const pessoas = ['João', 'ana', 'carlos', 'beatriz'];

// ordenação crescente
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

// ordenação decrescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);