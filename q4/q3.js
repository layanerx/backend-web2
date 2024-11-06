import chalk from 'chalk';
import  fs from 'fs';

const arquivo= ('WEB2\Atividade1\q3\node_modules\chalk\readme.md')

function estiloDoc(texto) {
    return texto.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, textoLink, url) =>
      `${chalk.blue(textoLink)} (${chalk.green(url)})`
    );
  }
  
  fs.readFile(arquivo, 'utf8', (erro, dados) => {
    if (erro) {
      console.error(chalk.red('Erro ao ler o arquivo:', erro));
      return;
    }
  
    console.log(estiloDoc(dados));
  });