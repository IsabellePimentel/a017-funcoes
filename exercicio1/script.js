// Exercicio 1
//A
// function digaSeuNome(nome){
//     console.log(`Olá, ${nome}`)
// }
// digaSeuNome("isabelle")

// //B
// let array = [1,2,3,4,5,6,7,8,9,10]
// let num =1
// function tabuada(){
//     for(let i in array){
//         console.log( num + "x"+ "6" + "=" + array[i]*6)
//         num = num + 1
//     }}
// tabuada(6)

//C - Utilizando o arrow functions
const digaSeuNome = (nome) => {
console.log(`Olá, ${nome}`)
}
digaSeuNome("isabelle")


let array = [1,2,3,4,5,6,7,8,9,10]
let num =1
const tabuada = () => {
for(let i in array){
console.log( num + "x"+ "6" + "=" + array[i]*6)
num = num + 1
}}
tabuada(6)