// Exercício 50: Escreva uma função que aceite uma string como argumento e retorne a string invertida.

const prompt = require(`prompt-sync`)()

const chosen_word = prompt(`Digite sua palavra: \n`)

function word_inverter(word){
    inverted_word = chosen_word.split('').reverse().join('')
    console.log(`\nA palavra escrita de forma invertida ficou [${inverted_word}]\n`)
}
word_inverter(chosen_word)