// Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade

let idade = parseInt(prompt(console.log("Digite aqui a sua idade -> Ex: 1, 2")))

if(idade >= 18 && idade <= 70){
    console.log("Você possui voto obrigatorio: ")
}
else if(idade < 18 && idade > 16 || idade >= 70){
    console.log("Você possui voto facultativo: ")
} 
else if(idade < 16){
    console.log("Sem permição de voto: ")
}