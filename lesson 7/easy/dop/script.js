let timerBox = document.querySelector('.timer-box');

timer();

function timer()
{
    setTimeout( () => {
        let nowHours = getNowHours();
        let nowMinuts = getNowMinuts();
        let nowSeconds = getNowSeconds();

        console.log(nowHours + ':' + nowMinuts + ':' + nowSeconds);

        timerBox.textContent = nowHours + ':' + nowMinuts + ':' + nowSeconds;

        timer();
    }, 1000);
}
function getNowHours() {
    let nowHours = new Date().getHours();
    if(String(nowHours).length == 1) {
        return '0' + nowHours;
    } else {
        return nowHours;
    }
}
function getNowMinuts() {
    let nowMinuts = new Date().getMinutes();
    if(String(nowMinuts).length == 1) {
        return '0' + nowMinuts;
    } else {
        return nowMinuts;
    }
}
function getNowSeconds() {
    let nowSeconds = new Date().getSeconds();
    if(String(nowSeconds).length == 1) {
        return '0' + nowSeconds;
    } else {
        return nowSeconds;
    }
}

getNowHours();