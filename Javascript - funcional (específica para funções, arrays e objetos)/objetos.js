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
Object.defineProperties():
    Adiciona ou modifica várias propriedades em um objeto.
    Útil para configurar várias propriedades de uma vez.


*/