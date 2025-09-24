// Exercício 17: Escreva um programa que determina se um número é par ou ímpar.

let number = parseInt(prompt(`Digite seu número`))

if(number % 2 == 0){
    console.log(`O ${number} é par`)
} else{
    console.log(`O número é Impar`)
}