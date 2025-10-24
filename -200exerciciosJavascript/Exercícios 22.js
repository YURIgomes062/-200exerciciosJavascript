// Exercício 22: Escreva um programa que determina o número de dias em um mês.
let chosen_day = prompt("Digite seu Mês:")

let days31 = [`janeiro`,`março`,`maio`,`julho`,`agosto`,`outubro`,`dezembro`]
let days30 = [`junho`,`setembro`,`novembro`]
let days28 = "fevereiro"

if(days31.includes(chosen_day)){
    console.log("O mês descrito tem 31 dias:")
}
else if(days30.includes(chosen_day)){
    console.log("O mês descrito tem 30 dias")
} 
else if(days28.includes(chosen_day)){
    console.log("O mesmo descrito é fevereiro e ele possui 28 ou 29 dias se for um ano bissexto: ")
}


