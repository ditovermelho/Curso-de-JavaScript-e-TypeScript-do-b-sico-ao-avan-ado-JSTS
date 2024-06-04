/* Operadores de comparação:
> Maior que
>= Maior que ou igual a
< menor que
<= Menor que ou igual a
== Igualdade (valor) Não recomendado
=== Igualdade estrita (valor e tipo)
!= Diferente (valor) Não recomendado
!== Diferente estrito (valor e tipo)

const num = 10;
const num1 = '10';
const comp = num === num1;
console.log(comp);
*/

/* Operadores Lógicos:
&& -> ANd -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Precisam que uma das expressões seja verdadeira para retornar true
! -> NOT -> NÂO ->

const expressaoAnd = true && true && true && true;
const expressaoAnd = true && true && true && false;
console.log(expressaoAnd);

const expressaoOr = false || false || false || true;
const expressaoOr = false || false || false || false;
console.log(expressaoOr);

const usuario = 'Luiz'; // form digitado pelo usuário
const senha = '123456'; // form digitado pelo usuário

const vaiLogar = usuario === 'Luiz' && senha === '123456';

console.log(vaiLogar);
*/

/* Operadores condiçionais:
if -> Se a condição desse bloco for verdadeira, executa o bloco da condição
else if -> Se a condição do outro bloco não for verdadeiro e a desse bloco for verdadeiro, executa esse bloco da condição
else -> Se a condição do bloco não for verdadeira, executa esse o bloco da condição

Entre 0 - 11: Bom Dia
Entre 12 - 17: Boa Tarde
Entre 18 - 23: Boa Noite

const hora = Math.round(Math.random() * (24 - 5) + 5);

console.log(hora);

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia');
}else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
}else {
    console.log('Olá');
}

const tenhoGrana = true;

if (tenhoGrana){
    console.log('Vou sair de casa');
}else{
    console.log('Não vou sair de casa');
}
*/

/* Operação ternária:
? :

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);
*/

/* Objeto Date:

const data = new Date();

console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000; 
const data = new Date(0 + tresHoras + umDia);

const data = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mês, dia, hora, minuto, segundo, milissegundo
const data = new Date('2019-04-20 20:20:59');

const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milissegundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());

function zeroAEsquerda (num){
    return num >= 10 ? num :`0${num}`;
}

function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);
*/

/* Switch/Case:

const data = new Date('1987-04-21 00:00:00')
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
}else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}else{
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto)

switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemana = '';
}

function getDayWeek (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemana = '';
            return diaSemanaTexto
    }
}

const data = new Date('1987-04-21 00:00:00')
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeek(diaSemana);

console.log(diaSemana, diaSemanaTexto)
*/

/* Mais diferenças entre var e let/const:

let tem escopo de bloco {... bloco};
var só tem escopo de função

const verdadeira = true;

let nome = 'Luiz'; // criando
var nome2 = 'Otávio'; // criando

console.log(nome, nome2);

if (verdadeira){
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclatando

    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'; // criando
        var nome2 = 'Outra coisa'; // redeclatando

        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

*/

/* Atribuição via desestruturação (Arrays):
... rest, ... spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, ...resto] = numeros;

console.log(um, tres, cinco);
console.log(resto);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] =numeros;
console.log(seis);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [list1, list2, list3] =numeros;
console.log(list2[2]);
*/

/* Atribuição via desestruturação (Objetos):
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome: teste = '', sobrenome, endereco: { rua, numero }, ...resto } = pessoa;

console.log(teste, sobrenome, rua, numero, resto);

*/

/* For - Clássico - Estrutura de repetição:
Geralmente com iteráveis (array ou strings)
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`)
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`O número ${i} é ${par}`)
}

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`O item ${i} é ${frutas[i]}`)
}

For simplificado
nome.forEach(function(valor, indice){
    console.log(`${indice}: ${valor}`);
});

*/

/* For - in - Estrutura de repetição:
Retorna o índice ou chave (string, array ou objetos)
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30,
};

for (let chaves in pessoa) {
    console.log(`${chaves}: ${pessoa[chaves]}`);
}

const nome = ['Luiz', 'Otávio', 'Henrique'];

*/

/* For - of - Estrutura de repetição:
Retorna o valor em si (iteráveis, arrays ou strings)
for (let i of nome) {
    console.log(i);
}

*/

/* While e Do While - Estrutura de repetição: 
const nome = 'Luiz';

let i = 0;

while ( i <= nome.length) {
    console.log(i);
    i++;
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('----------------------------------------');

do {
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);
*/

