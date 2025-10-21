// Exercício 51: Escreva uma função que calcule o fatorial de um número.

const prompt = require(`prompt-sync`)()

console.log(`-------------------------------------------------`)
console.log(`Algoritmo para fornecer o fatorial de um número: `)
console.log(`-------------------------------------------------`)
let chosen_number = parseInt(prompt(`\nDigite o número escolhido:\n `))
let result = 1
let chosen_number_fixed = chosen_number

while(chosen_number_fixed > 1){
    result = result * chosen_number_fixed
    chosen_number_fixed--
}
console.log(`\nO fatorial do número escolhido [${chosen_number}] é igual a ${result}\n`)