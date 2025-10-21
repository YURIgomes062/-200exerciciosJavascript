// Exercício 47: Escreva uma função que aceite um número como argumento e retorne o seu quadrado.

const prompt = require(`prompt-sync`)()

let chosen_number = parseInt(prompt(`Digite seu número: `))

function number_squared(num){
    let num_squared = num ** 2
    console.log(`\nO número ${num} ao quadrado é = ${num_squared}\n`)
}
number_squared(chosen_number)