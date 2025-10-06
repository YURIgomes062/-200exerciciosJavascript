// Exercício 39: Usando um laço for, crie um programa que calcule o fatorial de um número.
const prompt = require("prompt-sync")()

let number = parseInt(prompt(`\nDigite seu número: `))
let result_fatorial = 1

if(number == 1 || number < 0){
        console.log("\nO resultado é 1 : ")
        
    }

for(let num = 1; num < number;number--){
    result_fatorial = result_fatorial * number
    
}
console.log(`\nO resultado do número fatorial é ${result_fatorial}\n`)