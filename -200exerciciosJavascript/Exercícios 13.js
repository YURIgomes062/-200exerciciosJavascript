// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

let peso = parseInt(prompt(console.log("Digite aqui o seu peso(ex: 80 kg)")))
let altura = parseFloat(prompt(console.log("Digite aqui sua altura(ex: 1.65)")))

let imc =  peso /(altura*altura)

if(imc >= 18.5 && imc < 25){
    console.log("Peso Adequado")
} if(imc >= 25 && imc < 30){
    console.log("Sobrepeso")
} if(imc >= 30 && imc < 35){
    console.log("Obesidade Grau 1")
} if(imc >= 35 && imc < 40 ){
    console.log("Obsidade grau  2")
} if (imc >= 40){
    console.log("Obesidade grau 3")
}if(imc < 18.5){
    console.log("Baixo peso")
}