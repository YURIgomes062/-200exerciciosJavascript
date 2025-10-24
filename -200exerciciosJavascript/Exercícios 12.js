// Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

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
console.log(`A média das notas é${media}`)

