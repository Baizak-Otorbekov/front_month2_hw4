//основное задание
function isEven(number) {
    return number % 2 === 0
}
console.log(isEven(4));
console.log(isEven(7));

//дополнительное задание
function arraySum(num){
let sum = 0;
for(let i = 0; i < num.length; i++){
sum += num[i];
}
return sum;
}
console.log(arraySum ([1,2,3,4,5]));
console.log(arraySum ([10, 20, 30]));