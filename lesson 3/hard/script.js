/* Vsriables */
let str = 'урок-3-был слишком легким';
let arr = [20, 33, 1, 'Человек', 2, 3];

/* Functions */
function firstUppercase(str) {
    str = str.charAt(0).toUpperCase() + str.substr(1);
    str = str.split('-').join(' ');
    a = str.match('легким');
    a = a[0].slice(0,a[0].length - 2) + 'о';
    str = str.split('легким').join(' ' + a);
    alert(str);
};
function powArrElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'number') {
            arr[i] = Math.pow(arr[i], 3);
        };
    }; 
};
function summArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'number') {
            sum += arr[i];
        };
    }; 
    return sum;
};
function sqrtArr(sum) {
    sqrtArr = Math.sqrt(sum);
    console.log(sqrtArr);
};
function checked() {
    let  mes = prompt('Введите исходное сообщение.');
    if(mes === null || mes == '') {
        alert('Вы ввели пустую строку!')
    } else {
        mes = mes.replace(/^\s+|\s+$/g, "");
        console.log(mes.length)
        if(mes.length > 50) {
            a = mes.substr(0,50) + '...';
            console.log(a);
        } else {
            console.log(mes);
        }
    }
}


/* Call functions */
firstUppercase(str);
let arrFihish = powArrElem(arr);
arrFihish = summArr(arr);
sqrtArr(arrFihish);
checked();
