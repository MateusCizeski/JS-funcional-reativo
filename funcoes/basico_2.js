function bomDia() {
    console.log('bom dia!');
}

const boaTarde = function() {
    console.log('boa tarde');
};

// 1
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn();
    }
}

executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));