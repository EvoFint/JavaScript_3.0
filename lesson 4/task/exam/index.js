function getFriendlyNumbers(start, end) {
    let finish = [];
    if(start > 0 && start < end && typeof(start) == 'number' && typeof(end) == 'number') {
        for(let i = start; i < end; i++) {
            sum1 = getDivisorsSum(i);
            sum2 = getDivisorsSum(sum1);
            if(sum2 == i && sum1 != sum2 && sum1 > i) {
                let c = writeInArr(sum2, sum1);
                let ar = finish.push(c);
            }
        }
        return finish;
    } else if(start == end) {
        return [];
    } else {
        return false;
    }
}
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
    let arr = [];
    let c = arr.push(a, b);
    return arr;
}


module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}