// Exercício 54: Escreva uma função que ordene um array de números em ordem decrescente.
const prompt = require(`prompt-sync`)()

console.log(`\n----------------------------------------------------------------`)
const chosen_numm = prompt(`Digite o array de números: no formato -> 1,2,4,5,3,6,7,8,9\n`)
console.log(`----------------------------------------------------------------\n`)
let chosen_number = chosen_numm.split('')
let chosen_numberr = chosen_number.map(Number);

function ordem_crescente() {
    let inverted_chosen_num = chosen_numberr.sort((a, b) => b - a);
    console.log(inverted_chosen_num);
}
ordem_crescente(chosen_numberr);