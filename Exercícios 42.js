// Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.
// Esse eu fiquei feliz
const prompt = require(`prompt-sync`)()
console.log(`\nConversor de número Binário para Número Decimal:\n `)

let num_binario = parseInt(prompt(`Digite seu número Binário: `))
num_binario_invert = num_binario.toString().split('').reverse()//[num_binario] vira string, depois array e inverter a ordem dele.
let num_dec = 0;

for(let i = 0; i < num_binario_invert.length; i++){
    num_dec += ((2 ** i )*num_binario_invert[i])
}
console.log(`\nO número binário [${num_binario}] corresponde em número decimal como [${num_dec}]\n`)