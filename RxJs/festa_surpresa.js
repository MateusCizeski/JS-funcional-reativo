const readLine = require('readline');

function obterResposta(pergunta) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp);
            rl.close();
        });
    });
}

//Observer
function namorada(evento) {
    console.log('N: Apagar as luzes');
    console.log('N: Pedir silêncio');
    console.log('N: Surpresa!!!');
}

//Observer
function sindico() {
    console.log('S: Monitorando o barulho');
}

//subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)');
        
        if(resp.toLowerCase() === 's') {
            //os observadores são notificados
            (interessados || []).forEach(obs => obs());
        } else if(resp.toLowerCase() === 'q') {
            break;
        }
    }
}

/* Chamada da função -> Registra dois observadores
   Os observadores são: [namorada, sindico]
   O subject é o porteiro!
*/
porteiro([namorada, sindico]); 