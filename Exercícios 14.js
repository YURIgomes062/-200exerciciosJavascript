// Exercício 14: Escreva um programa que verifica se um ano é bissexto.

let ano = parseInt(prompt(console.log("Escreva o seu ano aqui:")))


if(ano % 4 == 0 && ano % 100 != 0){
    console.log(`${ano} é bissexto`)
} else if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
    console.log(`${ano} é bissexto e centenário`)
} else{
    console.log(`${ano} não é bissexto: :|`)
}