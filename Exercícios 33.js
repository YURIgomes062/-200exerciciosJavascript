// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

//var = var + var2

//  0, 1, 1, 2, 3, 5, 8, 13, 21
let termo1 = 0
let termo2 = 1

for(let i = 0; i < 10; i++){
    console.log(termo1)
    let temp = termo1
    termo1 = termo2
    termo2 = temp + termo2
}