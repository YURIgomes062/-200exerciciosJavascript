// Exercício 23: Escreva um programa que verifica as cores de um semáforo.
let situacao1 = prompt(`Digite a cor do Sinal:`)
let situacao = situacao1.toLocaleLowerCase()
    let red = "Wait"
    let yellow = "attention"
    let green = "Go"



function situacao_sinal(situacao){
    
    red = "vermelho"
    yellow = "amarelo"
    green = "verde"   

    if(situacao == red){
        console.log("PARAR")
    } else if(situacao == yellow){
        console.log("ATENÇÃO")
    } else if(situacao == green){
        console.log("IR")
    }
}
situacao_sinal(situacao)