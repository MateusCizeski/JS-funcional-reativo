function somar(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3;
        }
    }
}

let resultado = somar(4)(5)(10)
console.log(resultado);

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y);
        }
    }
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);

console.log(r1);
console.log(r2);