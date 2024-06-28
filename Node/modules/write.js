const fs = require('fs').promises;

module.exports = (path, dados) => {
    fs.writeFile(path, dados,  {flag: 'w', encoding: 'utf-8'}, (err) => {
        if (err) {
          console.error('Erro ao escrever no arquivo:', err.message);
        } else {
          console.log('Arquivo escrito com sucesso!');
        }
      });
}