//Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

let chosen_number = parseInt(prompt(console.log("Digite seu número aqui: ")))

if(chosen_number > 0 ){
    console.log("\nO número é positivo: :|")
} else if(chosen_number == 0){
    console.log("O número é zero: :|")
}else{
    console.log("Ele é negativo: :|")
} 