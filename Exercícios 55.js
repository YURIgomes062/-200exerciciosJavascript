// Exercício 55: Escreva uma função que retorne o menor número em um array de números.

let arrayA = [7, 8, 9, 3, 2, 5, 4, 55]

let i = 0
let j = 1


function menor_numero(array) {
    while (i < array.length) {
        if(arrayA[i] == arrayA[j]){
            j++
        }else if (array[i] > array[j]) {
            i++
        }else if (array[i] < array[j]) {
            j++
        }
    }
     let menorr_numero = array[i]
    console.log(`O menor número do array é o [${menorr_numero}]`)
}
menor_numero(arrayA)