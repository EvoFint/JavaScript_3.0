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

/* disabled btn */
btn.disabled = true;
goodsBtn.disabled = true;
budgetBtn.disabled = true;
employersBtn.disabled = true;
/* disabled btn */


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
        budgetValue.style.backgroundColor = 'grey';

        name = prompt('Введите название Вашего магазина.', '');
        while (name == '' || name == null) {
            name = prompt('Введите название Вашего магазина.', '');
        }
        nameValue.textContent = name.toUpperCase();
        nameValue.style.backgroundColor = 'grey';

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
        goodsValue.style.backgroundColor = 'grey';
    }
});
chooseItem.addEventListener('change', () => {
    if(mainList.open == true) {
        let items = chooseItem.value;
        if(items != '') {
            checkItems(items);
        }
        itemsValue.textContent = mainList.shopItems.join(', ');
        itemsValue.style.backgroundColor = 'grey';
    }
});
timeValue.addEventListener('change', () => {
    mainList.open = isMainListOpen(timeValue.value);
    if(mainList.open == true) {
        isOpenValue.style.backgroundColor = 'green';
    } else {
        isOpenValue.style.backgroundColor = 'red';
    }
    if(mainList.open == true) {
        btn.disabled = false;
        goodsBtn.disabled = false;
        budgetBtn.disabled = false;
        employersBtn.disabled = false;
    } else {
        btn.disabled = true;
        goodsBtn.disabled = true;
        budgetBtn.disabled = true;
        employersBtn.disabled = true;
    }
});
budgetBtn.addEventListener('click', () => {
    if(mainList.open == true) {
        countBudgetValue.value = money / 30;
    }
    countBudgetValue.disabled = true;
});
employersBtn.addEventListener('click', () => {
    if(mainList.open == true) {
        employersValue.textContent = '';
        let emptyInputs = [];
        let notEmptyInputs = [];
        let fullStringInput = '';
        for(let i = 0; i < hireEmployersItem.length; i++) {
            let emptyName = hireEmployersItem[i].value;
            let name;
            if(typeof(emptyName) === 'string' && typeof(emptyName) != null) {
                name = emptyName.match(/[а-яё]/ig)
                if(name != null) {
                    emptyInputs[i] = emptyName;
                } else {
                    alert('Имя может содержать только символы русского алфавита!\n' + emptyName + ' - Неверное имя!');
                } 
            } else {
                i--;
            }
        }
        fullStringInput = emptyInputs.join();
        notEmptyInputs = fullStringInput.match(/[а-яА-ЯёЁ']+/g);
        for(let i = 0; i < notEmptyInputs.length; i++) {
            mainList.employees[i] = notEmptyInputs[i];
            employersValue.textContent += mainList.employees[i] + ', ';
        }
        employersValue.style.backgroundColor = 'grey';
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