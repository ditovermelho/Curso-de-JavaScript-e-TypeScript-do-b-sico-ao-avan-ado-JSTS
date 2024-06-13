/* Revisando Objetos:
Definição:
    Objetos são estruturas de dados que armazenam pares chave-valor.
    Cada valor é acessado por uma chave (nome da propriedade).

Exemplo:

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30,
    saudacao() {
        return(`Olá, meu nome é ${this.nome}.`);
    },
    getDataNacimento(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

console.log(pessoa.getDataNacimento());

Factory:

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}


const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

Constructor:

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
*/

/* Object.defineProperty() e Object.defineProperties():
Object.defineProperty():
    Define ou modifica uma propriedade diretamente em um objeto.
    Permite controlar detalhes como mutabilidade, enumerabilidade e valor da propriedade.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: false // configurável
    });
    
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

Object.defineProperties():
    Adiciona ou modifica várias propriedades em um objeto.
    Útil para configurar várias propriedades de uma vez.

function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // pode alterar
            configurable: false // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode alterar
            configurable: false // configurável
        },
        estoque: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // pode alterar
            configurable: false // configurável
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
*/

/* Getters e Setters:
Getters:
    Getters são métodos que obtêm o valor de uma propriedade privada de um objeto. 
    Eles permitem o acesso controlado aos dados.

Setters:
    Setters são métodos que definem ou atualizam o valor de uma propriedade privada de um objeto.
    Eles permitem a validação antes da atribuição.

Utilizar getters e setters promove o encapsulamento e protege a integridade dos dados do objeto,
evitando alterações diretas.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        configurable: false, // configurável
        get: function()  {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }
            
            estoque = valor;
        }
    });
    
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5;
console.log(p1.estoque);
*/

/* Métodos úteis para objetos:

.assign():
* Object.assign(destino, ...origens) copia propriedades enumeráveis de objetos origens para o objeto destino.
* Utilizado para combinar objetos ou adicionar/atualizar propriedades, resultando em uma cópia rasa das propriedades.
* Não copia propriedades não-enumeráveis, métodos ou propriedades de getter/setter, apenas valores simples.


const produto = new Produto('Camiseta', 20, 3);
const outroProduto = {...produto};
const outroProduto = Object.assign({}, produto, {material: 'porcelana'});

outroProduto.nome = 'Outro nome';
outroProduto.preco = 2.5;

console.log(produto);
console.log(outroProduto);

.getOwnPropertyDescriptor():
* Object.getOwnPropertyDescriptor(obj, prop) retorna um objeto descrevendo a configuração de uma propriedade.
* O objeto retornado inclui informações sobre valor, enumerabilidade, configurabilidade e acessibilidade da propriedade.
* É útil para inspeção de propriedades e para garantir a conformidade com certas condições de propriedade em objetos.

console.log(Object.getOwnPropertyDescriptor(produto, 'estoque'));

.entries():
* Object.entries(objeto) retorna um array de pares [chave, valor] das propriedades enumeráveis do objeto.
* É útil para iterações com 'for...of' ou para transformar objetos em Mapas, mantendo a associação chave-valor.
* A ordem dos elementos no array é a mesma que seria se fossem iterados as propriedades do objeto manualmente.

console.log(Object.entries(produto));

for (let entry of Object.entries(produto)){
    console.log(entry);
}

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

*/

/* Prototypes:
* Prototypes são um mecanismo pelo qual objetos em JavaScript herdam características uns dos outros.
* Eles são usados para definir métodos e propriedades que podem ser compartilhados por todas as instâncias 
de uma função construtora.
* O uso de prototypes promove eficiência na memória, pois métodos são armazenados uma única vez, não em cada objeto.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { 
    return `${this.nome} ${this.sobrenome}`; 
};

const pessoa1 = new Pessoa('Luiz', 'Miranda');
const pessoa2 = new Pessoa('Maria', 'Miranda');

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());
*/

/* Manipulando Prototypes:
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = {
    chaveC: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const produto1 = new Produto('Camiseta', 50);
const produto2 = {
    nome: "Caneca",
    preco: 15
}

Object.setPrototypeOf(produto2, Produto.prototype);

produto1.desconto(20);
produto2.aumento(20);

console.log(produto1);
console.log(produto2);

const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'game'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 131
    }
});

produto3.aumento(20);

console.log(produto3);

*/

/* Herança:
Herança em JavaScript é um princípio que permite que um tipo de objeto herde métodos e propriedades de outro.
Utiliza-se a propriedade 'prototype' para estabelecer a herança entre construtores, permitindo reutilização de código.
Isso facilita a manutenção e a escalabilidade do código, pois objetos filhos herdam funcionalidades de objetos pais.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material =  material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gel', 15);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Jade', 60, 'Porcelana', 5);

console.log(produto);
console.log(camiseta);
console.log(caneca);

*/

/* Polimorfismo:
O polimorfismo é um conceito da programação orientada a objetos que permite que diferentes objetos 
possam ser tratados de forma intercambiável, usando a mesma interface. Em JavaScript, isso é 
frequentemente alcançado através de herança e interfaces comuns.

Existem dois tipos principais de polimorfismo:
1. Polimorfismo de Sobrecarga (Overloading): Não é diretamente suportado em JavaScript, mas pode 
ser simulado através de diferentes implementações de funções, verificando o número e tipo de argumentos.
2. Polimorfismo de Substituição (Overriding): Acontece quando uma classe derivada implementa um método 
que substitui um método da classe base. Isto permite que um método da classe base seja chamado através 
de uma referência à classe base, mas a implementação da classe derivada é usada.

Exemplos:

// Exemplo de Polimorfismo de Substituição (Overriding)
class Animal {
    speak() {
        console.log('Animal sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Meow!');
    }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
// Output:
// Animal sound
// Woof!
// Meow!

Neste exemplo, cada classe derivada (Dog e Cat) implementa sua própria versão do método `speak`. 
Ao iterar sobre um array de objetos do tipo `Animal`, cada objeto chama sua própria versão do método 
`speak`, demonstrando polimorfismo.


Exemplo conta:

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        return console.log('Saldo insuficiente!'), this.verSaldo();
    }

    this.saldo -= valor;
    return console.log('Operação realizada com sucesso!'), this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    if (typeof valor !== 'number' || valor <= 0) return console.log('Valor invalido!');
    this.saldo += valor;
    return console.log('Operação realizada com sucesso!'), this.verSaldo();

};

Conta.prototype.verSaldo = function () {
    return console.log(`Saldo disponivel em conta é de R$ ${this.saldo}.`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        return console.log('Saldo insuficiente!'), this.verSaldo();
    } else if (this.saldo < valor) {
        valor -= this.saldo;
        this.saldo = 0;
        this.limite -= valor;
        return console.log('Operação realizada com sucesso!'), this.verSaldo();
    }

    this.saldo -= valor;
    return console.log('Operação realizada com sucesso!'), this.verSaldo();
};

ContaCorrente.prototype.verSaldo = function () {
    return console.log(`Saldo disponivel é de R$ ${this.saldo}.\nLimite disponivel é de R$ ${this.limite}`);
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new ContaCorrente('BB', '2022', 10, 1000);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(331);
console.log('---------------------------------------------');
const conta2 = new ContaPoupanca('Caixa', '2222', 100, 1000);
conta2.depositar(11);
conta2.depositar(10);
conta2.sacar(331);
*/

/* Factory Functions + Prototypes
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },
    
        comer() {
            console.log(`${this.nome} está comendo.`)
        },
    
        beber() {
            console.log(`${this.nome} está bebendo.`)
        },
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const pessoaPrototype = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },

    comer() {
        console.log(`${this.nome} está comendo.`)
    },

    beber() {
        console.log(`${this.nome} está bebendo.`)
    },
}

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    },
};

//const pessoaPrototype = {...falar, ...beber, ...comer};
const pessoaPrototype = Object.assign({}, falar, beber, comer);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const pessoa1 = criaPessoa("Luiz", 'Otavio');
const pessoa2 = criaPessoa('Maria', 'Carolina');

console.log(pessoa1);
pessoa1.falar();
pessoa1.beber();
pessoa1.comer();
console.log(pessoa2);
pessoa2.falar();
pessoa2.beber();
pessoa2.comer();

*/

/* Objeto Map()
O objeto `Map` em JavaScript é uma coleção de pares chave-valor, onde qualquer valor (objetos e 
valores primitivos) pode ser usado como chave ou valor. `Map` mantém a ordem de inserção dos elementos, 
o que significa que a iteração sobre um `Map` retornará os elementos na ordem em que foram adicionados.

O `Map` é especialmente útil quando se precisa de uma coleção ordenada de pares chave-valor com 
chaves de qualquer tipo, incluindo objetos.


Principais características e métodos de `Map`:

1. Criação:
    const map = new Map();

2. Adicionar elementos:
    map.set(key, value);
    - Adiciona um par chave-valor ao `Map`.

3. Acessar elementos:
    map.get(key);
    - Retorna o valor associado à chave especificada.

4. Verificar existência:
    map.has(key);
    - Retorna `true` se a chave especificada existir no `Map`, caso contrário, retorna `false`.

5. Remover elementos:
    map.delete(key);
    - Remove o par chave-valor associado à chave especificada.

6. Tamanho:
    map.size;
    - Retorna o número de pares chave-valor no `Map`.

7. Limpar todos os elementos:
    map.clear();
    - Remove todos os pares chave-valor do `Map`.

8. Iteração:
    - map.keys(): Retorna um iterador sobre as chaves.
    - map.values(): Retorna um iterador sobre os valores.
    - map.entries(): Retorna um iterador sobre os pares chave-valor [key, value].
    - map.forEach((value, key) => { ... }): Itera sobre cada par chave-valor no `Map`.

Exemplo:
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

console.log(map.get('name')); // Output: John
console.log(map.has('age'));  // Output: true

map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30

const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = {};

for (const{id, nome} of pessoas){
    novasPessoas[id] = {id, nome};
}

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);

const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2));

for (const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}

*/

