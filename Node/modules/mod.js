/* Módulos:

Módulos em JavaScript são arquivos independentes que contêm um conjunto de funcionalidades relacionadas.
Eles permitem que os desenvolvedores dividam o código em partes menores e mais gerenciáveis, facilitando a manutenção
e a colaboração em projetos de grande escala.
Além disso, os módulos JavaScript promovem a reutilização de código.

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);

const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () =>  `${nome} ${sobrenome}`;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falaNome(){
        return `${this.nome} ${this.sobrenome}`;
    };
}

exports.Pessoa = Pessoa;

module.exports = (x, y) => x * y;

*/

module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        return `${this.nome} está latindo!`;
    }
};