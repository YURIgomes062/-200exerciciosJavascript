// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.

// A ideia é criar uma variavel para cada estação do ano, que recebe os determinados meses que ocorrem as estações.
// {{{toLowerCase == Passa uma string para caixa baixa}}}


function divisor_estações(){


alert(`Olá, seja bem vindo :`)
alert(`Escolha algum mês abaixo para informar qual a estação dele:(Aperte OK)`)
alert(`janeiro / Fevereiro / Março
       Abril   / Maio      / Junho
       Julho   / Agosto    / setembro 
       Outubro / Novembro  / Dezembro `)
let chosen_month = prompt(`Digite o Mês desejado`)

let verao = [`dezembro`,`janeiro`,`fevereiro`,`março`]
let outono = [`março`,`abril`,`maio`,`junho`]
let inverno = [`junho`,`julho`,`agosto`,`setembro`]
let primavera = [`setembro`,`outubro`,`novembro`,`dezembro`]

  if(verao.includes(chosen_month.toLowerCase())){
    console.log("\nO mês está no verão")
} if(outono.includes(chosen_month.toLowerCase())){
    console.log("\nO mês está no Outono")
} if(inverno.includes(chosen_month.toLowerCase())){
    console.log("\nO mês está no Inverno")
} if(primavera.includes(chosen_month.toLowerCase())){
    console.log("\nO mês está na Primavera")
}

if(chosen_month == "março"){
    console.log("\nAi depende veja só -> Outono começa no dia 20 de março, às 06h02 e o verão acaba no dia 20 de março 06h02:")
} else if(chosen_month == "junho"){
    console.log("\nAi depende veja só -> ,Inverno  começa no dia 20 de junho às 23h42 e o Outono acaba no dia 20 de junho às 23h42:")
} else if(chosen_month == "setembro"){
    console.log("\nAi depende veja só -> ,Primavera começa no dia 22 de setembro às 15h19 e o Inverno acaba no dia 22 de setembro às 15h19:")
} else if(chosen_month == "dezembro"){
    console.log("\nAi depende veja só -> ,Verão começa no dia 21 de dezembro às 12h03 e a Primavera acaba no dia 21 de Dezembro às 12h03:")
}
}
divisor_estações()
