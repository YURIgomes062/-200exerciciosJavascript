// Exercício 53: Escreva uma função que verifique se um número é primo.

const prompt = require(`prompt-sync`)()

console.log(`--------------------------------`)
console.log(`\nVerificador de números Primos:`)
console.log(`--------------------------------`)
let num = parseInt(prompt(`\nDigite o número que deseja verficar:\n`))

function checker_num_primo(num){
    
    if(num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13 || num == 17 ){
        console.log(`\nnúmero ${num} é um primo.`)
    } else if(num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0 && num % 11 != 0 && num % 13 != 0 && num % 17 != 0){
        console.log(`\nO número ${num} é um número primo.`)
    } else{
        console.log(`\nO número ${num} não é um número primo.`)
    }
}
checker_num_primo(num)