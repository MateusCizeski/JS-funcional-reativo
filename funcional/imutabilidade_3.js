const pessoa = {
    nome: 'Mateus',
    altura: 1.86,
    cidade: 'Criciúma',
    end: {
        rua: 'feliz'
    }
};

//Atribuição por referência
const novaPessoa1 = pessoa;

//Passagem por referência (Função impura!)
function alterarPessoa(pessoa) {
    const novaPessoa = { ...pessoa };
    novaPessoa.nome = 'mateus teste';
    novaPessoa.cidade = 'cidade teste';
    novaPessoa.end.rua = 'ABC'
    return novaPessoa;
}

const novaPessoa2 = alterarPessoa(pessoa)
console.log(pessoa);
console.log(novaPessoa2);

let a = 3;
let b = a; // atribuição por valor (copia)!

a++;
b--;

console.log(a, b);