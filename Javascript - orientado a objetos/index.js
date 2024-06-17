/* Criando classes:
* Classes em JavaScript são 'syntactical sugar' sobre o protótipo existente e oferecem uma maneira mais clara e simples
de criar objetos.
* Elas são declaradas com a palavra-chave 'class' e podem conter construtores, métodos, getters e setters para
manipular dados.
* A herança é facilitada pelo uso de 'extends', permitindo que classes filhas herdem de classes pais.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda');
console.log(pessoa1);

*/

/* Getters e Setters:
* Getters (acessores) são métodos que permitem ler valores de propriedades, enquanto setters (mutadores)
permitem alterá-los.
* Eles proporcionam uma interface para interagir com os dados internos de um objeto de maneira controlada
e segura.
* Getters e setters são úteis para encapsulamento e validação de dados, garantindo a integridade dos
objetos.

const __velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor < 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;

        this[_velocidade]++;
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return;

        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    carro1.acelerar();
}

console.log(carro1);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome}  ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda');
console.log(pessoa1.nomeCompleto);

*/

/* Herança com classes:
* Herança com classes permite que uma classe filha herde propriedades e métodos de uma classe pai.
* A palavra-chave 'extends' é usada na declaração da classe filha para estabelecer a relação de herança.
* Isso facilita a reutilização de código e a manutenção, pois comportamentos comuns são definidos na classe pai.

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligadar() {
        if (this.ligado) {
            return console.log(`Seu ${this.nome} já está ligado`);
        }
        this.ligado = true;
    }

    desligadar() {
        if (!this.ligado) {
            return console.log(`Seu ${this.nome} já está desligado`);
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
}

function divisao(valor = 55){
    const divisao = '-'.repeat(valor);
    console.log(divisao);
}

const dispositivo = new Smartphone('Samsung', 'preto', 'Galaxy S10');
const tablet = new Tablet('iPad', true);
dispositivo.ligadar();
dispositivo.ligadar();
dispositivo.desligadar();
console.log(dispositivo);
divisao(55);
console.log(tablet);
*/

/* Métodos de instância e estáticos:
* Métodos de instância são funções definidas em protótipos de objetos e acessíveis através de instâncias da classe.
* Métodos estáticos são definidos diretamente na função construtora e não são acessíveis pelas instâncias, mas pela
própria classe.
* Enquanto métodos de instância operam em dados específicos da instância, métodos estáticos trabalham em nível de
classe.

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instancia
    aumentarVolume(){
        if(this.volume >= 100) return;
        this.volume += 2;
    }

    diminuirVolume(){
        if(this.volume <= 0) return;
        this.volume -= 2;
    }

    //Método estático
    static desligaTV(){
        console.log('TV desligada');
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
console.log(controle);

*/
