/* ES6 Modules:
* ES6 Modules permitem organizar arquivos JavaScript em módulos.
* Use a palavra-chave 'export' para exportar variáveis, funções e classes de um módulo.
* Use a palavra-chave 'import' para importar esses elementos de outros módulos.
* Existem dois tipos de exportação: 'named export' e 'default export'.

- Exemplos: 
import { nome as nome2, sobrenome, idade, soma } from './modulo1';

const nome = 'João';

console.log(nome, nome2, sobrenome, idade);
console.log(soma(5,5));

import { nome, sobrenome, idade, soma, Pessoa } from './modulo1';

const p1 = new Pessoa(nome, sobrenome, idade);

console.log(p1);
console.log(soma(5,5));

import * as meuModulo from './modulo1';

const p1 = new meuModulo.Pessoa(meuModulo.nome, meuModulo.sobrenome, meuModulo.idade);

console.log(p1);
console.log(meuModulo.default(5,5));

*/

import meuModulo from './modulo1';

console.log(meuModulo(5,5));