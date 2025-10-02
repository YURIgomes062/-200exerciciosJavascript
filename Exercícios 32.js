// Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

const prompt = require("prompt-sync")()

console.log(`Seja bem Vindo ao Jogo de Pedra, Papel e Tesoura`)
console.log(`O jogo vai acontecer pelo terminal, pressione o botão [ok]`)
const options = ["pedra","papel","tesoura"]
let revanche = true

do{ 

const chosen_people = prompt(`Escolha algum deles: [Pedra] | [Papel] | [Tesoura]`).toLowerCase()    
const indice_aleatorio = Math.floor(Math.random() * options.length); // { Math.random() } gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusive).
const chosen_pc = options[indice_aleatorio];

if(chosen_people == "pedra" && chosen_pc == "papel"){
        console.log("\nparabéns, você ganhou :{")
} if(chosen_people == "pedra" && chosen_pc == "pedra"){
        console.log(`\nDeu empate, -_-`)
} if(chosen_people == "papel" && chosen_pc == "papel"){
        console.log(`\nDeu empate, -_-`)
} if(chosen_people == "tesoura" && chosen_pc == "tesoura"){
        console.log(`\nDeu empate, -_-`)
} else if(chosen_people == "papel" && chosen_pc == "pedra"){
       console.log("\nVocê perdeu :]")
} else if(chosen_people == "tesoura" && chosen_pc == "papel"){
       console.log("\nparabéns, você ganhou :{")
} else if(chosen_people == "papel" && chosen_pc == "tesoura"){
       console.log("\nVocê perdeu :]")
} else if(chosen_people == "tesoura" && chosen_pc == "pedra"){
       console.log("\nVocê perdeu :]")
} else if(chosen_people == "pedra" && chosen_pc == "tesoura"){
       console.log("\nparabéns, você ganhou :{")
}
console.log(`\nO computador escolheu ${chosen_pc}`)

if(chosen_people == "pedra" || chosen_people == "papel" || chosen_people == "tesoura" ){
    let pergunta = prompt(`Deseja continuar? Reponda com [sim] ou [não]`)
    if(pergunta == "sim"){
        revanche = true
    } else{
        revanche = false
    }
}
}while(revanche)