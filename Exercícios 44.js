// Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.
// [Para se haver uma soma de matrizes elas precisam ter a mesma quantidade de linhas e colunas.]

// Tive bastante dificuldade
const prompt = require(`prompt-sync`)();


let matrizA = [];
let matrizB = [];
let matrizSOMA = [];


let linhasA, colunasA, linhasB, colunasB;


function preencherMatriz(matriz, nome, linhas, colunas) {
    console.log(`\n--- Preenchimento da Matriz ${nome} ---`);
    
    for (let i = 0; i < linhas; i++) { 
        matriz[i] = []; // cria os arrays dentro do array.
        
        for (let j = 0; j < colunas; j++) { 
            let valor = parseInt(prompt(`Digite o valor para ${nome}[${i}][${j}]: `));
            matriz[i][j] = valor; 
        }
    }
}



do {
    linhasA = parseInt(prompt(`\nDigite a quantidade de linhas que a primeira matriz (A) terá:\n`));
    colunasA = parseInt(prompt(`Digite o número de colunas que a primeira matriz (A) terá\n`));
    
    linhasB = parseInt(prompt(`\nDigite a quantidade de linhas que a segunda matriz (B) terá:\n`));
    colunasB = parseInt(prompt(`Digite o número de colunas que a segunda matriz (B) terá\n`));

    // Validação
    if (linhasA !== linhasB || colunasA !== colunasB) {
        console.log(`\n[ERRO] Não é possível realizar a soma dessas matrizes. As dimensões devem ser iguais. Digite novamente.`);
    }

// A condição para REPETIR é: Se as dimensões forem DIFERENTES.
} while (linhasA !== linhasB || colunasA !== colunasB); 

// Preenchendo as matrizes A e B
preencherMatriz(matrizA, 'A', linhasA, colunasA);
preencherMatriz(matrizB, 'B', linhasB, colunasB);


for (let i = 0; i < linhasA; i++) { 
    matrizSOMA[i] = []; // Garante que a linha da matriz Soma está criada
    
    for (let j = 0; j < colunasA; j++) {
        // Soma elemento a elemento
        matrizSOMA[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}


console.log(`\nMatriz A:`, matrizA);
console.log(`\nMatriz B:`, matrizB);
console.log(`\nRESULTADO DA SOMA (Matriz C):\n`);
console.log(matrizSOMA);
