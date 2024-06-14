/* Uma função pura é uma função em que o valor
   de retorno é determinado APENAS por seus valores
   de entrada, sem efeito colaterais observáveis
*/ 

const PI = 3.14;

//!impura - o PI é um valor externo!
function areacCirc(raio) {
    return raio * raio * PI;
}

console.log(areacCirc(10));
console.log(areacCirc(10));
console.log(areacCirc(10));
console.log(areacCirc(10));

//*PURA
function areacCircPura(raio, pi) {
    return raio * raio * pi;
}

console.log(areacCircPura(10, 3.14));
console.log(areacCircPura(10, 3.14));