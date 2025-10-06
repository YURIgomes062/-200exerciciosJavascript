// Exercício 38: Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais.
console.log("Soma dos cubos dos primeiros 10 números naturais: ")
/*Foi mais tranquilo tambem*/
let tt = 1
let soma_cubos = 0

do {
    soma_cubos += (tt ** 3)
    console.log(soma_cubos)
    tt++
} while (tt <= 10)