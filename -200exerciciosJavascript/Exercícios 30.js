// Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.

/*for está definido para repetir 100x*/

for(let i = 0; i <= 100; i++){ /* O que é um número primo? Um número primo é aquele que só é divido por 1 e por ele mesmo.*/
   
    
    if(i == 2 || i == 3 || i == 5 || i == 7 || i == 11 || i == 13){
        console.log(i)
    }

    else if(i > 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0 && i % 13 !== 0){ /* O objetivo desta linha é definir os números primos da sequência.*/
        console.log(i)
    }
}