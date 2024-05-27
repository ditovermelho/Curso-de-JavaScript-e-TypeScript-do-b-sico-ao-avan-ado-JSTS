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
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);

alunos[0] = 'Eduardo'; // Adiciona/Altera em um local especifico do arrays
alunos[3] = 'Luiza'; // Adiciona/Altera em um local especifico do arrays

console.log(alunos);

alunos[alunos.length] = 'Eduardo'; // Adiciona no fim do arrays
alunos[alunos.length] = 'Luiza'; // Adiciona no fim do arrays
alunos[alunos.length] = 'Fábio'; // Adiciona no fim do arrays

console.log(alunos);

alunos.push('Otávio'); // Adiciona no fim do arrays
alunos.push('Fábio'); // Adiciona no fim do arrays

console.log(alunos);

alunos.unshift('Luiza'); // Adiciona no inicio do arrays
alunos.unshift('Otávio'); // Adiciona no inicio do arrays

console.log(alunos);

alunos.pop(); //Remove o ultimo elemento do arrays e retorna o elemento removido
alunos.shift(); //Remove o primeiro elemento do arrays e retorna o elemento removido

console.log(alunos);

delete alunos[1]; // Remove o elemento de um index do array mas mantem o index

console.log(alunos);

console.log(alunos.slice(0, -1)); // Acessa interlalos pre definidos do array

// Funções
function saudacao(nome){
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');

console.log(variavel);

function soma(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const Raiz = function (n) {
    return n ** 0.5;
};

console.log(Raiz(9));
console.log(Raiz(16));
console.log(Raiz(25));

const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// OBjetos (Basico)

const pessoa =  {
    nome: '',
    sobrenome: '',
    idade: 
};

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maira', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);

function criaPessoa (nome, sobrenome, idade) {
    return{ nome, sobrenome, idade};
}

const pessoa1 = {
    nome: 'Luiz',
    sobremone: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobremone} está falando oi...`);
    },

    incrementaIdade() {
        this.idade++;
    },

    falaIdade(){
        console.log(`A minha idade atual é ${this.idade}`)
    }
};

pessoa1.fala();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();

// Tipos de dados Primitivos (imutáveis): 
    string, number, boolean, undefined, null (bigint, symbol)

// Tipos de dados Referência (mutável):
    array, object, function
*/

