/* As várias maneiras de declarar funções em JavaScript

Declaração de função (Function Hoisting):

function falaOi(){
    console.log('Oie');
}

First-Class objects (Objetos de primeira classe)

Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
}

souUmDado();

function executaFuncao (funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}

executaFuncao(souUmDado);

Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow funtion.');
};

funcaoArrow();

Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando .......');
    }
}

const obj = {
    falar(){
        console.log('Estou falando .......');
    }
}

obj.falar();

*/

/* Parâmetros da função:
Funções em javascript tem um objeto arguments é uma variável especial disponível dentro de funções em JavaScript. 
Ele contém todos os argumentos passados para a função, independentemente do número de parâmetros declarados na 
assinatura da função.

function funcao() {
    console.log('Oie');
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao() {
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao(a, b = 0, c = 4) {
    console.log(a + b + c);
}

funcao(2,10);

Desestruturação de um array:

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

const obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};

funcao(obj);

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
}

conta('+', 0, 20, 30, 40, 50);

const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
}

conta('+', 0, 20, 30, 40, 50);

*/

/* Retorno da função:
O retorno de uma função em JavaScript é o valor que a função produz quando é chamada. 
Você pode usar a palavra-chave return para especificar o valor que deseja retornar.

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function criaMultiplicador (multiplicador){
    return function(n){
        return n *multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

*/

/* Escopo léxico:
O escopo léxico em JavaScript refere-se à maneira como as funções procuram variáveis em seu ambiente de criação
(ou seja, onde a função foi definida). Aqui estão os pontos-chave:

Definição:
    O escopo léxico é estático e determinado pela estrutura do código.
    As funções “lembram” o ambiente em que foram criadas, mesmo quando são executadas em locais diferentes.

Cadeia de Escopo:
    As funções podem acessar variáveis definidas em seu próprio escopo, no escopo pai 
    (onde foram criadas) e assim por diante.
    Isso permite a criação de closures e garante que as variáveis permaneçam acessíveis.

Evite Variáveis Globais:
    Use escopo léxico para evitar poluição do escopo global.
    Prefira declarar variáveis dentro de funções ou blocos para limitar sua visibilidade.


*/

/* Closures:
Closures em JavaScript são funções que “lembram” o ambiente em que foram criadas, incluindo as variáveis
disponíveisnaquele momento. Aqui estão os pontos-chave:

Definição:
    Um closure é uma função interna que tem acesso às variáveis de sua função externa (escopo pai).
    Ele “captura” essas variáveis, mesmo após a função externa ter concluído sua execução.
Uso Comum:
    Closures são frequentemente usados para criar funções com estado (como contadores) ou para encapsular dados privados.
    Eles permitem criar escopos isolados e proteger variáveis de acesso direto.

function contador() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const incrementar = contador();
incrementar(); // 1
incrementar(); // 2

function retornaFuncao(nome){
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

console.log(funcao(), funcao2());

*/

/* Funções de callback
Funções de callback em JavaScript são funções que são passadas como argumentos para outras funções. 
Aqui estão os pontos-chave:

Definição:
    Uma função de callback é executada após a conclusão de uma operação assíncrona ou quando um evento ocorre.
    Elas são amplamente usadas em APIs assíncronas, como setTimeout, fetch, e manipulação de eventos.

Flexibilidade e Modularidade:
    As funções de callback permitem maior flexibilidade e modularidade no código, facilitando a reutilização e 
    composição de funcionalidades.

Exemplo Simples:

function processarDados(dados, callback) {
    // Processamento dos dados...
    callback(resultado);
}

function mostrarResultado(resultado) {
    console.log("Resultado:", resultado);
}

processarDados(dados, mostrarResultado);

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;

    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        });
    });
});

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá mundo!');
}

f1(f1Callback);

*/

/* Funções imediatas (IIFE):
Funções IIFE (Immediately Invoked Function Expressions) em JavaScript são expressões de função que são executadas
imediatamente após serem definidas. Aqui estão os pontos-chave:

Definição:
    Uma IIFE é criada envolvendo uma função anônima entre parênteses e, em seguida, chamando-a imediatamente.
    Elas são usadas para criar escopos isolados e evitar poluição do escopo global

Benefícios:
    Isolamento de variáveis: Variáveis dentro da IIFE não afetam o escopo externo.
    Modularidade: Útil para carregar scripts assíncronos ou criar módulos independentes.

Exemplo Simples:

(function() {
    // Código da IIFE
    console.log("Executado imediatamente!");
})();

(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    
    function criaNome(nome){
        return nome + " " + sobrenome;
    }

    function falaNome () {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.8);
*/

/* Funções fábrica (Factory Functions):
Funções fábrica (Factory Functions) em JavaScript são funções que retornam objetos personalizados.
Aqui estão os pontos-chave:

Definição:
    Uma Factory Function cria e retorna objetos com propriedades e métodos específicos.
    Elas permitem criar instâncias de objetos com base em um modelo.

Exemplo Simples:

function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        saudacao() {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    };
}

const pessoa1 = criarPessoa("Ana", 30);
pessoa1.saudacao(); // "Olá, meu nome é Ana e tenho 30 anos."

function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'Nada') {
            return `${nome} está falando sobre ${assunto}.`;
        },

        altura,
        peso,

        // Getter
        get imc(){
            const imc = this.peso / (this.altura **2);
            return imc.toFixed(2);
        }
    };
}

const p1 = criarPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criarPessoa('Maria', 'Otávio', 1.6, 42);
console.log(p1.fala('JS'));
console.log(p1.imc);
console.log(p2.nomeCompleto);
p2.nomeCompleto = 'Maria Oliveira Silva';
console.log(p2.nome);
console.log(p2.sobrenome);

*/

/* Funções construtoras (constructor functions):
Funções construtoras (constructor functions) em JavaScript são funções que atuam como modelos para criar objetos.
Aqui estão os pontos-chave:

Definição:
    Uma função construtora é chamada com new para criar instâncias de objetos.
    Elas geralmente têm propriedades e métodos definidos no this.

Exemplo Simples:

function Pessoa(nome, sobrenome) {
    // Atributo ou método privados
    const id = 1;
    const metodoInterno = function(){};

    // Atributo ou método prúblicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.apresentar = function () {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`);
    };
}

const pessoa1 = new Pessoa("Ana", 30);
pessoa1.apresentar(); // "Olá, meu nome é Ana e tenho 30 anos."

*/

/* Funções recursivas:
Funções recursivas em JavaScript são aquelas que chamam a si mesmas durante a execução.
Aqui estão os pontos-chave:

Definição:
    Uma função recursiva resolve um problema dividindo-o em subproblemas menores e resolvendo-os de forma semelhante.
    Ela deve ter uma condição de parada (caso base) para evitar recursão infinita.

Exemplo Simples (Fatorial):

function fatorial(n) {
    if (n === 0) {
        return 1; // Caso base
    }
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // 120

function recursiva(max){
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);

*/

/* Funções geradoras:
Funções geradoras em JavaScript são funções especiais que permitem a criação de iteradores personalizados.
Aqui estão os pontos-chave:

Definição:
    Uma função geradora é declarada com function* e contém a palavra-chave yield.
    Ela pausa a execução e retém seu estado, permitindo iterações controladas.

Exemplo Simples (Contagem):

function* contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const iterador = contador();
console.log(iterador.next().value); // 0
console.log(iterador.next().value); // 1

function* geradora1(){
    // Código qualquer ....
    yield 'Valor 1';
    // Código qualquer ....
    yield 'Valor 2';
    // Código qualquer ....
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1){
    console.log(valor);
}

function* geradora2() {
    // Código qualquer ....
    yield function () { console.log('Vim do y1') };

    // Código qualquer ....
    yield function () { console.log('Vim do y2') };
}

const g2 = geradora2();
const func1 = g2.next().value;
const func2 = g2.next().value;
func1();
func2();
*/

