getNow();
getDay();

document.querySelector('.btn').onclick = function () {
    let a = document.getElementsByTagName('input')[0];
    let b = document.getElementsByTagName('input')[1];

    var date1 = new Date(a.value);
    var date2 = new Date(b.value);

    alert(Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)));
}

function getDay() {
    let nowDay = new Date().getDay();
    switch (nowDay) {
        case 0:
            alert('Воскресенье');
            break;

        case 1:
            alert('Понедельник');
            break;

        case 2:
            alert('Вторник');
            break;

        case 3:
            alert('Среда');
            break;

        case 4:
            alert('Четверг');
            break;

        case 5:
            alert('Пятница');
            break;

        case 6:
            alert('Суббота');
            break;

        default:
            break;
    }
}
function getNow() {
    let nowHours = new Date().getHours();
    let nowMinuts = new Date().getMinutes();
    let nowSeconds = new Date().getSeconds();
    let nowDate = new Date().getDate();
    let nowMonth = new Date().getMonth();
    let nowYear = new Date().getFullYear();

    alert(nowHours + ':' + nowMinuts + ':' + nowSeconds + ' ' + checkDate(nowDate) + '.' + checkMonth(nowMonth) + '.' + nowYear);
}
function checkDate(date) {
    let a = String(date);
    if(a.length < 2) {
        a = 0 + a;
        return a;
    } else {
        return date;
    }
}
function checkMonth(month) {
    let a = String(month);
    if(a.length < 2) {
        a = 0 + a;
        return a;
    } else {
        return month;
    }
}
