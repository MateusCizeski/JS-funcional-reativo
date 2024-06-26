const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Prmise é bem legal');
});

promise.then(console.log);

const obs = new Observable(subscriber => {
    subscriber.next('Observer');
    subscriber.next('é');
    subscriber.next('bem');
    setTimeout(() => {
        subscriber.next('legal');
        subscriber.complete();
    });
});

obs.subscribe(console.log);
obs.subscribe(texto => console.log(texto.toUpperCase()));