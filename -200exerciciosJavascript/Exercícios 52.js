// Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci.

const prompt = require(`prompt-sync`)()

console.log(`--------------------------------------------------------`)
console.log(`\nSistema de calculo para o N-ésimo número de Fibonacci:`)
console.log(`--------------------------------------------------------`)
let chosen_nFibonacci = parseInt(prompt(`\nDigite o  N-ésimo número desejado: \n`))


function num_fibonacci() {
    let termo1 = 0
    let termo2 = 1

    for (let i = 0; i < chosen_nFibonacci; i++) {
         
        let temp = termo1 // temp é igual a 0
        termo1 = termo2 // termo1 era 0 e passou a ser 1
        termo2 = temp + termo2 // termo2 era 1 passou a ser [temp + termo2], que inicialmente é igual a [1 = 0 + 1]
    }
    console.log(`\n[${termo1}]\n`)
}
num_fibonacci(chosen_nFibonacci);