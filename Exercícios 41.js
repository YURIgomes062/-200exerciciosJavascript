// Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.
// Vou dividir o número decimal por 2 várias vezes até o quociente ser zero, após isso, irei guardar os restos da divisão em um array e irei imprimi-lô

/*Passos do Algoritmo

Divida o número decimal por 2.

Anote o Resto (que será sempre 0 ou 1).

Pegue o Quociente da divisão e repita o processo a partir do Passo 1.

Continue dividindo até que o Quociente se torne 0.

O número binário final é formado pelos Restos lidos na ordem inversa (do último para o primeiro).*/

/* A sequência binária é formada lendo os restos na ordem inversa*/
const prompt = require("prompt-sync")()

function transformer_NumDec_forBinario() {

    let chosen_number = parseInt(prompt(`\nDigite seu número:\n `))
    let binario = "" // array para onde vou inserir os modulos.

    do{
            let resto = chosen_number % 2
            binario = resto + binario // important
            chosen_number = Math.floor(chosen_number / 2)

        }while (chosen_number > 0)
            console.log(`\nO número em formato de números binários é : [${binario}]\n`)
}

transformer_NumDec_forBinario()

