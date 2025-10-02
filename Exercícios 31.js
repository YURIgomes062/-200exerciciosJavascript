//Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.

alert(`Irei adivinhar o número que você pensou por meio do método de busca binária.`)

alert(`Para prosseguir aperte [ok]`)

let inicio = 1
let fim = 100
let metade = Math.floor((inicio + fim) / 2)
let alavanca = false // está variavel boolean será utilizada para parar o lupin

while (!alavanca) {
    let metade = Math.floor((inicio + fim) / 2)
    let user_responce = prompt(`seu número é [menor], [maior] ou [igual] a ${metade}?`).toLowerCase() // nesse caso a metade é 50
    if (user_responce == "igual") {
        console.log(`Encontrei seu número, ele é ${metade}`) // trocar para else
        alavanca = true

    } else if (user_responce == "menor"){
        fim = metade - 1 // a metade é 50, se o usuario responder menor, o novo limte é a metade - 1, que é 49.

    } else if(user_responce == "maior"){
        inicio = metade + 1 // a metade é 50, se o usuario responder maior, o novo limite é a metade + 1, que é 51.
    }
}
