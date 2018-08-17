let btn = document.getElementById('open-btn');

/* left column */
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];
let isOpenValue = document.getElementsByClassName('isopen-value')[0];
/* end left column */

/* right column */
let goodsItem = document.getElementsByClassName('goods-item');
let goodsBtn = document.querySelector('.main-functions').getElementsByTagName('button')[0];
let budgetBtn = document.querySelector('.main-functions').getElementsByTagName('button')[1];
let employersBtn = document.querySelector('.main-functions').getElementsByTagName('button')[2];
let chooseItem = document.querySelector('.choose-item');
let timeValue = document.querySelector('.time-value');
let countBudgetValue = document.querySelector('.count-budget-value');
let hireEmployersItem = document.querySelectorAll('.hire-employers-item');
/* end right column */

/* variables */
let money;
let name;
let price;
var mainList = {
    money: money,
    name: name,
    shopGoods: [],
    shopItems: [],
    employees: {},
    open: false,
    discount: false
};
/* end variables */

countBudgetValue.onkeypress = function (e) {
    return false;
};
btn.addEventListener('click', () => {
    if(mainList.open == true) {
        money = prompt('Введите Ваш бюджет.', '');
        while (isNaN(money) || money == '' || money == null) {
            money = prompt('Введите Ваш бюджет.', '');
        }
        budgetValue.textContent = money; 

        name = prompt('Введите название Вашего магазина.', '');
        while (name == '' || name == null) {
            name = prompt('Введите название Вашего магазина.', '');
        }
        nameValue.textContent = name.toUpperCase();

        let discount = prompt('У вас имеется дисконтная карта? Введите "Да" или "Нет"', '');
        checkDiscount(discount)
    }
});
goodsBtn.addEventListener('click', () => {
    if(mainList.open == true) {
        let emptyInputs = [];
        let fullStringInput = '';
        for(let i = 0; i < goodsItem.length; i++) {
            let currentItem = goodsItem[i].value;
            if(typeof(currentItem) === 'string' && typeof(currentItem) != null && currentItem.length < 50) {
                emptyInputs[i] = currentItem;
            } else {
                i--;
            }
        }
        fullStringInput = emptyInputs.join();
        mainList.shopGoods = fullStringInput.match(/[\wа-яё]+/ig);
        goodsValue.textContent = mainList.shopGoods.join(', ');
    }
});
chooseItem.addEventListener('change', () => {
    if(mainList.open == true) {
        let items = chooseItem.value;
        if(items != '') {
            checkItems(items);
        }
        itemsValue.textContent = mainList.shopItems.join(', ');
    }
});
timeValue.addEventListener('change', () => {
    mainList.open = isMainListOpen(timeValue.value);
    if(mainList.open == true) {
        isOpenValue.style.backgroundColor = 'green';
    } else {
        isOpenValue.style.backgroundColor = 'red';
    }
});
budgetBtn.addEventListener('click', () => {
    if(mainList.open == true) {
        countBudgetValue.value = money / 30;
    }
});
employersBtn.addEventListener('click', () => {
    if(mainList.open == true) {
        let emptyInputs = [];
        let notEmptyInputs = [];
        let fullStringInput = '';
        for(let i = 0; i < hireEmployersItem.length; i++) {
            let name = hireEmployersItem[i].value;
            if(typeof(name) === 'string' && typeof(name) != null) {
                emptyInputs[i] = name;
            } else {
                i--;
            }
        }
        fullStringInput = emptyInputs.join();
        notEmptyInputs = fullStringInput.match(/[\wа-яА-ЯёЁ']+/g);
        for(let i = 0; i < notEmptyInputs.length; i++) {
            mainList.employees[i] = notEmptyInputs[i];
            employersValue.textContent += mainList.employees[i] + ', ';
        }
    }
});

function checkDiscount(discount) {
    if(discount.toUpperCase() == 'ДА') {
        mainList.discount = true;
        discountValue.style.backgroundColor = 'green';
    } else {
        mainList.discount = false;
        discountValue.style.backgroundColor = 'red';
    }
}
function checkName(name) {
    name = name.match(/[\wа-яА-ЯёЁ'][^\s]+/g);
}
function isMainListOpen(time) {
    return time > 8 && time < 20
}
function checkItems(items) {
    let itemsArray = items.match(/\d*[^\D]+/g);
    if(itemsArray == null) {
        mainList.shopItems = items.split(/\,\s*/g);
        mainList.shopItems.sort();
    } else {
        alert('Вы не можете использовать в названии товара цифры или специальные символы!');
    }
}