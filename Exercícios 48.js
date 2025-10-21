// Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.

const prompt = require(`prompt-sync`)()

console.log(`\nVerificador de número par e impar:\n `)
let num = parseInt(prompt(`Digite o número escolhido:\n `))

function par_or_impar(num) {
    if (num % 2 == 0) {
        return console.log(`O número escolhido é par:`)
    } else {
        return console.log(`O número é impar: `)
    }
}
par_or_impar(num)