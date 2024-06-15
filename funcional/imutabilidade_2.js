const nums = [4, 8, 3, 2, 9, 1, 9, 3];
let total = 0;

//#3 - Recursividade
function somarArray(array, total = 0) {
    if(array.length === 0) {
        return total;
    }

    return somarArray(array.slice(1), total + array[0]);
}
total = somarArray(nums);
console.log(total);

//#2 - Reduce - Funcional 
const somar = (a, b) => a + b;
total = nums.reduce(somar);
console.log(total);

// #1 - Dados mutáveis!
for(let i = 0; i < nums.length; i++) {
    total += nums[i]; 
}
console.log(total);