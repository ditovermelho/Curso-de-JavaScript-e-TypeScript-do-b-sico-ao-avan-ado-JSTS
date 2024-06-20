/*
const nome = 'Luiz';
const sobrenome = 'Otavio';
const idade = 30;

function soma(x=0, y=0) {
    return x + y;
}

export {nome, sobrenome, idade, soma};
*/

export const nome = 'Luiz';
export const sobrenome = 'Otavio';
export const idade = 30;

export default function soma(x=0, y=0) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}