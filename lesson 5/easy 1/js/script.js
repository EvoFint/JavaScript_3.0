let menu = document.querySelector('.menu');
let li2 = document.querySelectorAll('.menu-item')[1];
let li3 = document.querySelectorAll('.menu-item')[2];
let title = document.querySelector('.title');
let column = document.querySelectorAll('.column')[1];
let advertising = document.querySelector('.adv');

menu.insertBefore(li3, li2);
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
title.textContent = 'Мы продаем только подлинную технику Apple';
column.removeChild(advertising);
getAttitudes(getQuestionUser());

function getQuestionUser() {
    let a = prompt('Какое у вас отношение к технике Apple?');
    return a;
}
function getAttitudes(a) {
    let idPrompt = document.querySelector('.prompt');
    idPrompt.textContent = 'Ваше отношение к технике Apple: ' + a;
}