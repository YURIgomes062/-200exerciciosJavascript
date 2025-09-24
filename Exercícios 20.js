// Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.

let nota = parseInt(prompt(`Digite a nota`))

console.log
    (`\nClassificação de notas:
        nota 9 e 10: Parabéns
        nota 8: Execelente
        nota 7: Acima da média
        nota 6: Na média
        nota < 6: nota baixa/ recuperação`)

switch(nota) {
    case nota = 1:
        console.log(`\nnota baixa / [recuperação]`)
        break;

    case nota = 2:
        console.log(`\nSua classificação é nota [baixa / recuperação]`)
        break;

    case nota = 3:
        console.log(`\nSua classificação é nota [baixa / recuperação]`)
        break;

    case nota = 4:
        console.log(`\nSua classificação é nota [baixa / recuperação]`)
        break;

    case nota = 5:
        console.log(`\nSua classificação é nota [baixa / recuperação]`)
        break;

    case nota = 6:
        console.log("\nSua classificação é [média]")
        break;
    
    case nota = 7:
        console.log("\nSua classificação é [Acima da média]")
        break;
    
    case nota = 8:
        console.log("\nSua classificação é [Excelente]")
        break;

    case nota = 9:
        console.log("\nSua classificação é [Parabéns]")
        break;

    case nota = 10:
        console.log("\nSua classificação é [Parabéns]")
        break;

}