// Exercício 46: Escreva uma função que aceite dois números como argumentos e retorne sua soma.
const prompt = require(`prompt-sync`)()

let num1 = parseInt(prompt(`Digite o primeiro número:`))
let num2 = parseInt(prompt(`Digite o segundo número:` ))

function somar(num,numm){
    let result = num + numm
    console.log(`----------------------------`)
    console.log(`${num} + ${numm} = ${result}`)
    console.log(`----------------------------`)
}
somar(num1, num2)
console.log(`Obrigado por usa o sistema de soma!!`)