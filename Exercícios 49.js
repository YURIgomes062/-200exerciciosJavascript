// Exercício 49: Escreva uma função que aceite três números como argumentos e retorne o maior deles.

const prompt = require(`prompt-sync`)()

let num1 = parseInt(prompt(`Digite o número escolhido:\n `));
let num2 = parseInt(prompt(`Digite o número escolhido:\n `));
let num3 = parseInt(prompt(`Digite o número escolhido:\n `));

function greatest_number(a, b, c){
    if(a > b && a > c){
        console.log(`\nO primeiro número que é ${a} é o maior deles\n`)
    } else if(b > a && b > c){
        console.log(`O segundo número que é ${b} é o maior deles\n`)
    } else if(c > b && c > a){
        console.log(`O terceiro número que é ${c} é o maior deles\n`)
    }
}
greatest_number(num1, num2, num3)