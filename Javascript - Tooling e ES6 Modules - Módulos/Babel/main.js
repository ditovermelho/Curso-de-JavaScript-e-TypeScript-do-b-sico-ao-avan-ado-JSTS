/* Babel:
O Babel é uma ferramenta de transpilação de código JavaScript que permite aos desenvolvedores escreverem código em uma
versão mais recente do JavaScript e transformá-lo em uma versão compatível com navegadores e ambientes mais antigos.
Em resumo, o Babel é fundamental para o desenvolvimento de projetos web modernos, permitindo aproveitar os recursos
modernos do JavaScript enquanto garante a compatibilidade com uma ampla variedade de navegadores.

const nome = 'luiz';
const obj = {nome};
const novoObj = {...nome};

console.log(novoObj);

*/

class Pessoa{
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}