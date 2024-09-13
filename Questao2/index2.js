const readline = require('readline');

function contarLetraA(str) {
    const texto = str.toLowerCase();
    let contagem = 0;

    for (const char of texto) {
        if (char === 'a') {
            contagem++;
        }
    }

    return contagem;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (input) => {
    const ocorrencias = contarLetraA(input);

    if (ocorrencias > 0) {
        console.log(`A letra 'a' ocorre ${ocorrencias} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não ocorre na string.");
    }

    rl.close();
});
