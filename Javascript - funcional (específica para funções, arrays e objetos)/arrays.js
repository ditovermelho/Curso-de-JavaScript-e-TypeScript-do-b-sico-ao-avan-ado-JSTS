/* Revisão do básico em Arrays:
Definição:
    Arrays são estruturas de dados que armazenam coleções ordenadas de elementos.
    Os elementos podem ser de qualquer tipo (números, strings, objetos, etc.).
Operações Comuns:
    Acesse elementos por índice: array[0].
    Adicione elementos:
        array.push(valor).
    Remova elementos:
        array.pop() (do final) ou array.shift() (do início).
Iteração:
    Use loops (como for ou forEach) para percorrer os elementos do array.

Exemplo simples:

const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Gabriel', 'Júlia'];
const novo = [...nomes];
nomes[6] = 'João';
novo.push(nomes.pop());
const novo2 = novo.slice(0,3);
console.log(nomes);
console.log(novo);
console.log(novo2);

const nome = 'Luiz Otávio Miranda';
const nomes = nome.split(' ');
const nome2 = nomes.join(' ');
console.log(nomes);
console.log(nome2);
*/

/* Método Splice:
O método splice() em JavaScript permite adicionar novos elementos e remover elementos existentes de um array 
simultaneamente. Ele aceita pelo menos três argumentos: o índice de início, o número de elementos a serem excluídos
e os elementos a serem inseridos. Lembre-se de que o splice() modifica o array original e retorna os elementos 
removidos como um novo array.

nomes.splice(índice, delete, elem1, elem2, elem3);

const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Gabriel', 'Júlia'];
const removidos = nomes.splice(-2, 2, 'Otávio', 'José');
removidos.splice(2, 0, 'Luiz');
console.log(nomes, removidos);
*/

/* Concatenando arrays:
A concatenação de arrays em JavaScript envolve combinar dois ou mais arrays em um único array. Você pode usar
o método concat() para fazer isso:

Definição:
    O método concat() cria um novo array combinando os elementos de arrays existentes.
    Ele não modifica os arrays originais, mas retorna um novo array.

Exemplo:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...a1, 'Luiz', ...a2, [7, 8, 9]]
const resultado = array1.concat(array2); // [1, 2, 3, 4, 5, 6]

console.log(resultado, array3);

*/

/* Filter - Filtrando o array:
O método filter() em JavaScript é usado para criar um novo array contendo apenas os elementos que atendem a uma
determinada condição. Aqui estão os pontos-chave:

Definição:
    O método filter() itera sobre cada elemento do array e executa uma função de teste.
    Ele retorna um novo array com os elementos que passam no teste.

Exemplo:

const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
// Resultado: [2, 4]

Retorne os números maiores que 10:

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFliter (valor) {
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFliter);
console.log(numerosFiltrados);

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

Retorne as pessoas:
    que tem o nome com 5 letras ou mais;
    as pessoas com mais de 50 anos;
    as pessoas cujo nome termina com a;

function view(obj){
    for(let i of obj) console.log(`${i.nome} tem ${i.idade} anos.`);
}

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length>=5);
console.log("As pessoas que tem o nome com 5 letras ou mais, são: ");
view(pessoasComNomeGrande);

const pessoasComVelhas = pessoas.filter(obj => obj.idade >= 50);
console.log('\nAs pessoas com mais de 50 anos, são: ');
view(pessoasComVelhas);

const pessoasUltimaLetra = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log('\nAs pessoas cujo nome termina com a, são: ');
view(pessoasUltimaLetra);
*/

/* Map - Mapeando o array:
O método map() em JavaScript é usado para criar um novo array aplicando uma função a cada elemento do array original.
Aqui estão os pontos-chave:

Definição:
    O método map() itera sobre cada elemento do array e aplica uma função a cada um.
    Ele retorna um novo array com os resultados das transformações.

Exemplo:

const numeros = [1, 2, 3];
const quadrados = numeros.map(numero => numero ** 2);
// Resultado: [1, 4, 9]

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

Para cada elemento:
    retorne apenas uma string com o nome da pessoa.
    remova apenas a chave "nome" do objeto.
    adicione uma chave id em cada objeto.

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const pessoasIds = pessoas.map((obj, id) => {
    const newObj = {id: id,...obj};
    return newObj;
});

const pessoasIds = pessoas.map((obj, id) => ({id: id,...obj}));

console.log(pessoasIds);
console.log(pessoas);

*/

/* Reduce - Reduzindo o array:
O método reduce() em JavaScript é usado para reduzir um array a um único valor, aplicando uma função acumuladora a
cada elemento. Aqui estão os pontos-chave:

Definição:
    O método reduce() itera sobre cada elemento do array e acumula um valor com base na função fornecida.
    Ele retorna o resultado final da operação de redução.

Exemplo:

const numeros = [1, 2, 3, 4];
const somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// Resultado: 10 (1 + 2 + 3 + 4)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total =  numeros.reduce((acumulador, valor) => acumulador += valor, 0);

console.log(total);
console.log(numeros);

Retorne a pessoa mais velha:

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
*/

/* Filter + Map + Reduce:
retoner a soma do cobro de totos os pares:
-> Filtrar pares.
-> Dobrar os valores.
-> Somar tudo.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaTudo = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac += valor, 0);

console.log(numeros);
console.log(somaTudo);
*/

/* ForEach:
O método forEach() em JavaScript é usado para iterar sobre os elementos de um array e executar uma função para
cada elemento. Aqui estão os pontos-chave:

Definição:
    O forEach() percorre cada elemento do array e aplica uma função a cada um.
    Ele não cria um novo array, mas é útil para executar uma ação em cada elemento.

Exemplo:

const numeros = [1, 2, 3];
numeros.forEach(numero => console.log(numero));
// Resultado: 1, 2, 3 (imprime cada número)

*/
