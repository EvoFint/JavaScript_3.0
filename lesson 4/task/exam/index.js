let finish = [];
let start = 1;
let end = 300;
function getFriendlyNumbers(start, end) {
    for(let i = start; i < (end - 1); i++) {
        sum1 = summNumber(start);
        sum2 = summNumber(sum1);
        if(sum2 == start && sum1 != start && sum1 > start) {
            writeInArr(sum1, sum2);
        }
    }
    return [];
}
function summNumber(num) {
    let sum = 0;
    for(let  i = 1; i < (num - 1); i++) {
        if(num % i == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
function writeInArr(a, b) {
    let c = a + ', ' + b;
    finish.push(c);
}

getFriendlyNumbers(start, end);

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}