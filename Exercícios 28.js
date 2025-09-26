// Exercício 28: Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.

// A variavel (soma) irá armazenar o valor da adição de todos os números

// A variavel ( i ) irá ter seu valor aumentado em 1 toda vez que o luping rodar , e a soma dela com a variavel (soma) gera o valor da variavel soma em sim
let i = 1
let soma = 0

while(i <= 100){
  soma = soma + i
  console.log(soma) 
  i++;
  
}