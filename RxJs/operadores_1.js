// Os dois tipos de operadores...

// 1. Operadores de criação
const { of, from } = require('rxjs');

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, first, map } = require('rxjs/operators');

from([1, 2, 'ana', false, 'ultimo'])
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`),
    )
    .subscribe(function(valor) {
        console.log(`O valor gerado foi: ${valor}`);    
    });