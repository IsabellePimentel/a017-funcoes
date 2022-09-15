// Exercicio 2
// A
function recebendoValor (num1,num2){
const soma = num1 + num2
console.log(soma)
}
 recebendoValor(5,5)

 //B
 function numeros (num3,num4){
const entrada = num3 >= num4
console.log("O primeiro número é maior ou igual ao segundo:" + entrada)}

numeros(3,3)

//C
function resultado(num){
if(num%2=== 0){
console.log("O número é par ")
}else {
console.log("O número é impar")
}}
resultado(4)

//D
function mensagem(user){
    console.log(`Quantidade de letras na palavra: ${user.length}`)
    console.log(`${user.toUpperCase()}`)
}
mensagem(prompt("Digite uma palavra:"))
    