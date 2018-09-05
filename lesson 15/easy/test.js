function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

var each = function(startArr, f){return f(startArr)};
// var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

var assert = require('chai').assert;

describe('sum', function () {
    it('Проверяем функцию sum', function() {
        assert.equal(sum, 'true');
    });
});
describe('num', function() {
    it('Проверяем num', function () {
        assert.equal(num, '5');
    });
});
// describe('each', function() {
//     it('Проверяем тип each', function () {
//         assert.typeOf(each(arr, myFunc), 'array');
//     });
//     it('Проверяем длину возвращаемого массива', function() {
//         assert.lengthOf(each(arr, myFunc), '5');
//     });
// });