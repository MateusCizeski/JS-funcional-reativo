function ordernar(array) {
    return [...array].sort(); //gera uma função pura com o clone do array, não gerando efeito colateral
}
const nums = [3, 1, 7, 9, 4, 6];
const numsOrdenados = ordernar(nums);

console.log(nums, numsOrdenados);