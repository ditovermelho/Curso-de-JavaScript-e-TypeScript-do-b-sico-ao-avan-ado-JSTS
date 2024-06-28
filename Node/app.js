/* Módulos:

Módulos em JavaScript são arquivos independentes que contêm um conjunto de funcionalidades relacionadas.
Eles permitem que os desenvolvedores dividam o código em partes menores e mais gerenciáveis, facilitando a manutenção
e a colaboração em projetos de grande escala.
Além disso, os módulos JavaScript promovem a reutilização de código.

const mod = require('./mod');

console.log(mod);

const mod = require('./mod');
const falaNome = mod.falaNome;

console.log(falaNome());

const falaNome = require('./mod').falaNome;

console.log(falaNome());

const {nome, sobrenome, falaNome} = require('./mod');
console.log(nome, sobrenome);
console.log(falaNome());

npm init -y
npm i axios

const axios = require('axios')
const { Pessoa } = require('./mod');

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1.falaNome());

axios('https://www.google.com')
    .then(response => console.log(response.data))
    .catch(e => console.log9e);

const n = require('./mod');

console.log(n(2,2));

const Cachorro = require('./mod');
const cachorrinho = new Cachorro('Dog');

console.log(cachorrinho.latir());

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..',  'Modelo - Webpack'));

*/

/* Listando arquivos com FS e Recursão mútua
Módulo de Sistema de Arquivos (FS):
    O módulo fs do Node.js permite interagir com o sistema de arquivos.
    Ele oferece várias APIs para ler, escrever, criar, renomear e excluir arquivos e diretórios.
    As operações podem ser síncronas ou assíncronas.

Listando Arquivos com Recursão:
    Para listar arquivos em uma pasta (incluindo subpastas), podemos usar uma abordagem recursiva.
    Começamos lendo os arquivos na pasta atual e, se encontrarmos subpastas, chamamos a mesma função recursivamente para essas subpastas.
    Assim, percorremos toda a árvore de diretórios.

Exemplo de Listagem de Arquivos:
const fs = require('fs');
const path = require('path');

async function listarArquivos(dir) {
  try {
    const files = await fs.promises.readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isFile()) {
        console.log(filePath); // Exibe o caminho do arquivo
      } else if (stats.isDirectory()) {
        await listarArquivos(filePath); // Chamada recursiva para subpastas
      }
    }
  } catch (error) {
    console.error('Erro ao listar arquivos:', error.message);
  }
}

listarArquivos('/caminho/da/pasta'); // Substitua pelo caminho desejado

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/\node_modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    if (!/\.html$/g.test(fileFullPath)) continue;

    console.log(file, stats.isDirectory());
  }
}

readdir('../Curso-de-JavaScript-e-TypeScript-do-basico-ao-avancado-JSTS/');

Observações:
  Use readdir para obter a lista de arquivos/diretórios em uma pasta.
  Verifique se o item é um arquivo ou uma pasta usando stat.

Escrevendo e lendo arquivos:

const path = require('path');
const pathFile = path.resolve(__dirname, '.', 'teste.json');
const write = require('./modules/write');
const read = require('./modules/read');

const pessoas = [
  {nome: 'João'},
  {nome: 'Maria'},
  {nome: 'Eduardo'},
  {nome: 'Luiza'},
  {nome: 'Jonas'},
]

const json = JSON.stringify(pessoas, '', 2)

write(pathFile, json);

async function readFile (path) {
  const dados = await read(path);
  dado(dados);
}

function dado(dados){
  dados = JSON.parse(dados);

  dados.forEach(val => {
    console.log(val.nome);
  });
}

readFile(pathFile);

*/

/* Express:
O Express.js é um framework para desenvolvimento web em Node.js. Ele simplifica a criação de aplicativos e APIs,
oferecendo recursos como roteamento, middleware e gerenciamento de solicitações e respostas. O Express é amplamente
utilizado devido à sua simplicidade, flexibilidade e desempenho, tornando o desenvolvimento de servidores web mais
ágil e limpo

*/