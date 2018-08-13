/* variables */
// var budget = prompt("Ваш Бюджет на месяц?");
// var nameShop = prompt("Название вашего магазина?");
var mainList = {
    // money: budget,
    // name: nameShop,
    shopGoods: [],
    shopItems: [],
    employees: {
        empNuber: [],
        empSurname: [],
        empName: [],
        empPatr: []
    },
    open: true,
    discount: true
};
var price = 75000; 

/* functions */
function selectionOfGoods() {
    for(let i = 0; i < 3; i++) {
        let a = prompt("Какой тип товаров будем продавать?");
        if(typeof(a) === 'string' && a != '' && a.length < 50) {
            mainList.shopGoods[i] = a;
        } else {
            alert('Необходимо ввести тип товара!');
            i--;
        }
    };
};
function checkDiscount(price, discount) {
    if(discount == true){
        let a = price * 0.8;
        return a;
    };
    return price;
};
function calcOneDayBudget(money) {
    return money / 30;
};
function hiringEmployees() {
    for(let i = 0; i < 4; i++) {
        let empName = prompt("Напишите Ваше ФИО.");
        if(empName === null) {
            alert('Необходимо ввести ФИО!')
            i--;
        } else {
            if(empName != '') {
                empName = empName.match(/[\wа-яА-ЯёЁ'][^\s]+/g);
                if(empName.length === 3) {
                    mainList.employees.empNuber[i] = i + 1;
                    empName[0] = empName[0].charAt(0).toUpperCase() + empName[0].substr(1).toLowerCase();
                    mainList.employees.empSurname[i] = empName[0];
                    empName[1] = empName[1].charAt(0).toUpperCase() + empName[1].substr(1).toLowerCase();
                    mainList.employees.empName[i] = empName[1];
                    empName[0] = empName[2].charAt(0).toUpperCase() + empName[2].substr(1).toLowerCase();
                    mainList.employees.empPatr[i] = empName[2];
                } else if(empName.length < 3) {
                    alert('Необходимо ввести полное ФИО!');
                    i--;
                } else {
                    alert('Необходимо ввести ТОЛЬКО Фамилию Имя и Отчество!');
                    i--;
                }
            } else {
                alert('Вы ввели пустое поле. Необходимо ввести ФИО!')
                i--;
            }
        }
    }
};
function checkItems(arr) {
    let a = arr.match(/\d*[^\D]+/g);
    if(a == null) {
        mainList.shopItems = arr.split(/\,\s*/g);
        return false;
    } else {
        alert('Вы не можете использовать в названии товара цифры или специальные символы!');
        return true;
    };
};
function chooseShopItems() {
    let inputIsIncorrect = true;
    while(inputIsIncorrect) {
        let items = prompt('Перечислите через запятую товары.', '');
        if(items == null || items == '') {
            alert('Необходимо ввести названия товаров!');
            inputIsIncorrect = true;
        } else {
            inputIsIncorrect = checkItems(items);
        };
    };
};
function showItems(arr) {
    arr.forEach((item, i, arr) => {
        alert('У нас вы можете купить: ' + (i + 1) + ') ' + item);
    });
};
function showInConsole(arr) {
    for(let i in arr) {
        console.log('Наш магазин включает в себя: ' + arr[i]);
    };
}
/* End functions */

/* selectionOfGoods();
hiringEmployees();
console.log(mainList.employees.empName);
alert('Ваш бюджет на 1 день составляет: ' + calcOneDayBudget(mainList.money)); */
chooseShopItems();
showItems(mainList.shopItems);
showInConsole(mainList.shopItems);