function getFriendlyNumbers(start, end) {
    let finish = [];
    for(let i = start; i < end; i++) {
        sum1 = getDivisorsSum(i);
        sum2 = getDivisorsSum(sum1);
        if(sum2 == i && sum1 != sum2 && sum1 > start) {
            let c = writeInArr(sum1, sum2);
            finish = finish.push(c);
        }
    }
    return finish;
}
console.log(getFriendlyNumbers(1, 300));
function getSumm(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function getDivisors(num) {
    let arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
function getDivisorsSum(num) {
    return getSumm(getDivisors(num));
}
function writeInArr(a, b) {
    let c = a + ', ' + b;
    return c;
}


module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}

//getFriendlyNumbers(1, 300);