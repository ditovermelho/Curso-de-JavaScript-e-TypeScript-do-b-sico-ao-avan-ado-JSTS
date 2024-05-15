/* 
let num = 15; // variavel 
let name = 'Carlos Daniel'; // variavel 
console.log('Hello world!', "Good Day"); // print no console do navegador

// Quest/Task
console.log('My name is ', name, '\nI am learn JavaScript a', num, 'the afternoon') // print no console do navegador

console.log('This text is being displayed in the browser console') // print no console do navegador

//
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924 
Luiz Otávio nasceu em 1980 o ano atual e 2019
//

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
const anoAtual = 2019;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = anoAtual - idade; 

console.log('O IMC de', nome, sobrenome, 'é', indiceMassaCorporal, 'e seu ano de nacimento é',  anoNascimento)
console.log(`O ${nome} ${sobrenome} tem ${alturaEmM} de altura é pesas ${peso} seu IMC e de 
${indiceMassaCorporal}, ele possui ${idade} de idade e naceu em ${anoAtual}`)

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
// let varAux;

varAux = varA;
varA = varB;
varB = varC;
varC = varAux;
//
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

Ajuste de precisão em casas decimais
// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

// Forma 1
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

// Resultado equivalente
// num1 = parseFloat(num1.toFixed(2));
// num1 = Number(num1.toFixed(2));


// Forma 2
const cem = 100;

num1 = ((num1 * cem)+(num2 * cem)) / cem; // 0.8
num1 = ((num1 * cem)+(num2 * cem)) / cem; // 0.9
num1 = ((num1 * cem)+(num2 * cem)) / cem; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

// Arredondamento
let num1 = 9.54478;
// let num2 = Math.floor(num1); // Arredonda para baixo
// let num2 = Math.ceil(num1); // Arredonda para cima
// let num2 = Math.round(num1); // Arredonda para cima

console.log(num2)

console.log(Math.max(1,2,3,4,5,-10,-50,1500)); // Maior valor
console.log(Math.min(1,2,3,4,5,-10,-50,1500)); // Menor valor

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Gerando número aleatorio
console.log(aleatorio);

console.log(Math.pow(2, 10)); // pontencialização
console.log(2 ** 10); // pontencialização

console.log(9 ** (1/2)); // Raiz quadrada
console.log(9 ** (0.5)); // Raiz quadrada

console.log(100 / 0); // valor infinito, quanto mais proximo do zero absoluto for o resultado sera infinito, esse retorno e True

// Arrays (Básico)

*/

