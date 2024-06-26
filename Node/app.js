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

/* Nodemon:
O Nodemon automatiza a execução do servidor web.
Sua função é reiniciar o servidor toda vez que um arquivo é alterado, facilitando o desenvolvimento contínuo.
Com o Nodemon, você não precisa reiniciar manualmente o servidor após cada modificação no código3.
*/

/* Express - req.params, req.query e req.body:
req.params:
  Usado para capturar parâmetros dinâmicos na URL.
  Exemplo: Se você tem uma rota como /users/:id, pode acessar o valor do parâmetro id usando req.params.id.
  Útil para obter informações específicas com base em IDs ou outros valores na URL.
req.query:
  Usado para recuperar dados da string de consulta (parte após o ? na URL).
  Exemplo: Para a URL /search?term=express, você pode acessar o valor de term usando req.query.term.
  Útil para filtrar, classificar ou paginar resultados.
req.body:
  Usado para acessar dados enviados no corpo da solicitação (geralmente em formulários ou requisições POST).
  É necessário usar um middleware de análise de corpo (como express.json() ou express.urlencoded()) para processar o corpo da solicitação.
  Útil para receber dados enviados por formulários, APIs ou aplicativos cliente.
*/

/* Express - Router e Controllers:
Express Router:
  O Express Router é uma parte fundamental do framework Express.js. Ele permite organizar e gerenciar rotas em
  aplicativos Node.js.
  Com o Router, você pode agrupar rotas relacionadas em um único arquivo ou módulo.
  Exemplo de uso:

// routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Página inicial');
});

module.exports = router;
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.

Controllers:
  Os controllers são responsáveis por lidar com a lógica de negócios de uma rota específica.
  Eles separam a manipulação de solicitações e respostas do roteamento.
  Exemplo de uso:

// userController.js
exports.getUser = (req, res) => {
  // Lógica para obter dados do usuário
  res.send('Detalhes do usuário');
};

exports.updateUser = (req, res) => {
  // Lógica para atualizar dados do usuário
  res.send('Usuário atualizado');
};

Integração:
  No arquivo de roteamento, você pode importar os controladores e associá-los às rotas.
  Exemplo:

// routes.js
const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/user', userController.getUser);
router.put('/user', userController.updateUser);

module.exports = router;

*/

/* Express Views:
As views no Express.js são responsáveis por renderizar o conteúdo HTML e apresentá-lo ao usuário.
O Express permite usar diferentes mecanismos de visualização (view engines) para gerar as páginas HTML.
Alguns mecanismos populares incluem EJS (Embedded JavaScript), Pug (anteriormente conhecido como Jade) e Handlebars.
Exemplo de configuração com EJS:

const express = require('express');
const app = express();

// Configuração do mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para renderizar uma página
app.get('/', (req, res) => {
  res.render('index', { title: 'Minha Página' });
});

Uso nas Rotas:
  Nas rotas, você pode usar res.render() para renderizar uma página específica.
  Passe dados (como variáveis) para a visualização para personalizar o conteúdo.
  Exemplo:

app.get('/profile', (req, res) => {
  const user = { name: 'Alice', age: 30 };
  res.render('profile', { user });
});

Arquivos de Visualização:
  Crie arquivos de visualização (por exemplo, index.ejs, profile.ejs) na pasta especificada (geralmente views).
  Use a sintaxe do mecanismo de visualização escolhido para inserir dados dinâmicos no HTML.
  Exemplo em EJS:

<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Bem-vindo à <%= title %></h1>
</body>
</html>

*/

/* Express - Arquivos estáticos:
No Express.js, arquivos estáticos (como CSS, JavaScript, imagens) são servidos diretamente pelo servidor, sem processamento adicional.
Esses arquivos não mudam dinamicamente com base nas solicitações do usuário.
Exemplo de configuração para servir arquivos estáticos:

const express = require('express');
const app = express();

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

Estrutura de Pastas:
  Crie uma pasta chamada ‘public’ (ou outro nome de sua escolha) na raiz do projeto.
  Coloque seus arquivos estáticos (CSS, imagens, scripts) dentro dessa pasta.

Exemplo: 
projeto/
├── public/
│   ├── styles.css
│   ├── logo.png
│   └── script.js
└── server.js

Uso nas Páginas HTML:
  Em suas páginas HTML, referencie os arquivos estáticos usando URLs relativas.

Exemplo:
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <img src="/logo.png" alt="Logo">
  <script src="/script.js"></script>
</body>
</html>

*/

/* Express + Webpack:
Para usar o Express com o Webpack:
  Configure o Webpack para gerar um bundle (arquivo JavaScript) contendo todo o código do cliente.
  Coloque esse bundle em uma pasta (por exemplo, ‘dist’) acessível pelo Express.
  No servidor Express, use express.static('dist') para servir os arquivos estáticos (como o bundle) para o cliente.

Estrutura de pastas:

projeto/
├── dist/
│   └── bundle.js
├── server.js
└── ...

No server.js:

const express = require('express');
const app = express();

// Configuração para servir arquivos estáticos da pasta 'dist'
app.use(express.static('dist'));

// Rotas, middlewares, etc.
// ...

// Inicie o servidor
app.listen(8080, () => {
  console.log('Servidor Express iniciado na porta 8080');
});


*/

/* Express Middlewares:
O que são Middlewares?
  No Express.js, funções de middleware têm acesso aos objetos de solicitação (req), resposta (res) e à próxima função
  de middleware no ciclo de solicitação-resposta do aplicativo.
  Elas podem executar qualquer código, fazer alterações nos objetos req e res e detectar erros.
  Os middlewares são essenciais para estender a funcionalidade do Express.

Tipos de Middlewares no Express:
  Middleware de nível do aplicativo:
    Vinculam-se à instância do objeto app usando app.use() ou app.METHOD().
    Executam para todas as solicitações recebidas pelo aplicativo.

  Middleware de nível de roteador:
    Montados em um caminho específico usando app.use('/caminho', middleware).
    Executam para solicitações no caminho especificado.

  Middleware de manipulação de erros:
    Usados para tratar erros durante o processamento de solicitações.

  Middleware integrado:
    Fornecidos pelo Express, como express.json e express.static.

  Middleware de terceiros:
    Criados por desenvolvedores externos.

Exemplo de Uso:
  Middleware de log de tempo:

  const express = require('express');
  const app = express();

  app.use((req, res, next) => {
    console.log('Hora:', Date.now());
    next();
  });

  Middleware para rota específica:

  app.use('/user/:id', (req, res, next) => {
    console.log('Tipo de Solicitação:', req.method);
    next();
  });

  app.get('/user/:id', (req, res) => {
    res.send('Usuário');
  });

*/

/* 

*/