// Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).
const prompt = require(`prompt-sync`)()
let again = "sim"

while (again == "sim") {
    let chosen_number = parseInt(prompt(`\nDigite seu número:`))
    let reversed_chosen_number = chosen_number.toString().split('').reverse().join('')
    if(chosen_number == reversed_chosen_number){
        console.log(`\nO número ${chosen_number} é um Palíndromo: `)
    } else{
        console.log(`\nO número ${chosen_number} não é um palíndromo`)
    }
    again = prompt(`\nDeseja continuar? Responda com [sim] ou [não]\n`)
}