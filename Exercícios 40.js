// Exercício 40: Usando um laço while, crie um programa que inverta uma string.
// Não existe um metodo específico para inverter uma string, devemos então passar a string para um array, inverter a ordem dele e passar para string novamente.
// .split(" ").reverse().join()
const prompt = require("prompt-sync")()

function string_Inverter() {
    const prompt = require("prompt-sync")()
    // Não existe um metodo específico para inverter uma string, devemos então passar a string para um array, inverter a ordem dele e passar para string novamente.
    // .split(" ").reverse().join()
    const chosen_word = prompt(`\nDigite sua string: \n`)

    while (typeof chosen_word == "string") {
        console.log(typeof chosen_word)
        let inverted_word = chosen_word.split('').reverse().join('')
        console.log(`\nA palavra invertida ficou [${inverted_word}]\n`)
        break;
    }
}
string_Inverter()