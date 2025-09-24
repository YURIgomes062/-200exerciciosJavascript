// Exercício 6: Declare duas variáveis e atribua valores booleanos a elas. Use os operadores lógicos AND, OR e NOT para realizar operações lógicas entre as variáveis. Imprima os resultados.

const lampada1 = true
const lampada2 = false

if( lampada1 && lampada2 == true){
    console.log("Os dois estão ligados: ")
} 
else if(lampada1 || lampada2 == true){
    console.log("Somente uma lampada está ligada: ")
} else{
    console.log("Nenhuma está ligada: ")
}