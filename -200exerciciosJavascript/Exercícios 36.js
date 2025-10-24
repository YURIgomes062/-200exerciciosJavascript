// Exercício 36: Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisor, incluindo 1 mas não ele mesmo, é igual ao próprio número).

/*Não entendi muito bem */

console.log("\nIrei imprimir todos os número perfeitos de 1 a 100:")
for(let numero = 1; numero <= 100;numero++){
    let soma_divisores = 0
    
    for(let divisor = 1; divisor < numero; divisor++){
        
        if(numero % divisor == 0){
            soma_divisores += divisor; // += soma o valor de uma variavel a outra, nesse caso, soma o valor do divisor ao soma_divisores.
        }
    }
    
    if(soma_divisores == numero){  
        console.log(numero)
    }
    



}