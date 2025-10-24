// Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.
const prompt = require(`prompt-sync`)()

let word = prompt("Write your word");


  // 2. Converte a string em um array -> ( .split('') ), inverte o array -> ( .reverse() ) , junta novamente em uma string -> ( .join('') )
  // const var_exemple = var_exemple.split('').reverse().join('');

const word_normal = word.split("").reverse().join("");

if(word_normal == word){
    console.log(`Sim a palavra ${word} é um Palíndromo `)
} else{
    console.log(`Não, a palavra ${word} não é um Palíndromo `)
}

