var budget = prompt("Ваш Бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");
var mainList = {
    money: budget,
    name: nameShop,
    shopGoods: [],
    employers: {},
    open: true
};

for(let i = 0; i < 3; i++) {
    let a = prompt("Какой тип товаров будем продавать?");
    if(typeof(a) === 'string' && a != '' && a.length < 50) {
        mainList.shopGoods[i] = a;
    } else {
        alert('Необходимо ввести тип товара!');
        i--;
    }
};

/* 
let i = 0;
while(i < 3) {
    let a = prompt("Какой тип товаров будем продавать?");
    if(typeof(a) === 'string' && a != '' && a.length < 50) {
        mainList.shopGoods[i] = a;
    } else {
        alert('Необходимо ввести тип товара!');
        i--;
    };
    i++;
};
do {
    let a = prompt("Какой тип товаров будем продавать?");
    if(typeof(a) === 'string' && a != '' && a.length < 50) {
        mainList.shopGoods[i] = a;
    } else {
        alert('Необходимо ввести тип товара!');
        i--;
    };
    i++;
} while (i < 3);
 */
var oneDayBudget = mainList.money / 30;
alert('Ваш бюджет на 1 день составляет: ' + oneDayBudget);