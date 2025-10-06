// Exercício 37: Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.
// Esse foi mais tranquilo !!!
console.log("Soma dos quadrados dos primeiros 10 números naturais: ")
// Esse foi mais tranquilo !!!
let i = 0 /* Elevar cada número nataural de 1 até 10 ao quadrado e somar o resultado*/
let soma_quadrados = 0
while(i < 10){
    i++
    soma_quadrados += (i**2)
    console.log(soma_quadrados)
}