const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exbirConteudo(err, conteudo) {
    console.log(conteudo.toString());
}

fs.readFile(caminho, exbirConteudo);