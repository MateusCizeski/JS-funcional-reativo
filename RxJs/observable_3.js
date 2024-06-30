// desafio!
//Criar um stream de numeros
//entre min e max com Observable!
const { Observable, noop } = require('rxjs');

function entre(min, max) {
    return new Observable(subscriber => {
        for(let i = min; i <= max; i++) {
            subscriber.next(i);
        }
        subscriber.complete();
    })
}

entre(5, 25)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')
    )