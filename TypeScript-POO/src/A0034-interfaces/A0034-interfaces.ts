/* Interfaces
São uma parte fundamental do TypeScript e são usadas para definir contratos ou formas que os objetos devem seguir.

Definição:
Uma interface é uma estrutura que descreve a forma de um objeto, especificando quais propriedades e métodos ele deve ter.
Ela não gera código JavaScript; é apenas uma verificação de tipo durante a compilação.

Propriedades:
Você pode definir propriedades obrigatórias ou opcionais em uma interface.

Métodos:
Interfaces também podem definir métodos que um objeto deve implementar.

Implementação:
Quando uma classe ou objeto implementa uma interface, ele deve seguir exatamente a estrutura definida pela interface.

Extensão:
Interfaces podem estender outras interfaces, permitindo a composição de funcionalidades.

Flexibilidade:
Interfaces são flexíveis e podem ser usadas para descrever objetos, classes, funções e até mesmo tipos genéricos.
*/
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto { }

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) { }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Luiz',
  sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
