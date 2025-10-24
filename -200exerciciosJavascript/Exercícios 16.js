// Exercício 16: Escreva um programa que determina o maior entre três números.

let a = parseInt(prompt(`Digite seu número`))
let b = parseInt(prompt(`Digite seu número`))
let c = parseInt(prompt(`Digite seu número`))

if(a > b && a > c){
    console.log("O primeiro número é o maior:")
}else if( b > a  && b > c){
    console.log("O Segundo número é o maior:")
}else if(c > a && c > b){
    console.log("O Terceiro número é o maior:")
}