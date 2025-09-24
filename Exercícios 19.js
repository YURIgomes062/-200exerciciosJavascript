// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.

//  Intervalo = 0 até 19


let numero = parseInt(prompt(`Digite seu número`))
let max = 200
let min = 1


function verificador(numero, max, min){
   if(numero > 200 || numero < 1){
        console.log("O número não está presente no intervalo")
    }
    return numero >= min && numero <= max
} 
 verificador(numero, max, min)