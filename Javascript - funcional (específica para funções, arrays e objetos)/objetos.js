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


