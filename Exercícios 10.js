//Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

let nota1 = parseFloat(prompt(console.log("(escreva um número de 1 a 10 no formato -> 1 , 2..): ")))
let nota2 = parseFloat(prompt(console.log("(escreva um número de 1 a 10 no formato -> 1 , 2..)): ")))

function media_duas_notas(){
    let media = ((nota1*nota2) / 2)
    if(media >= 7){
        console.log("Você foi aprovado: :|")
    } else{
        console.log("Você não foi aprovado: :|")
    }
    console.log(`A média das notas é${media}`)
}
media_duas_notas(nota1, nota2)
