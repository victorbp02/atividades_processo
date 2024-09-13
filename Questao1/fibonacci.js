const readline = require('readline');

function pertenceFibonacci(n) {
    if (n < 0) return false; 

    let a = 0;
    let b = 1;

    
    if (n === a || n === b) return true;

    while (b <= n) {
        let temp = a + b;
        a = b;
        b = temp;

        if (b === n) return true;
    }

    return false;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (input) => {
    const numero = parseInt(input, 10);

    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
    } else if (pertenceFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }

    rl.close();
});
