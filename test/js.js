let openBtn = document.getElementById('open-btn'),
	nameValue = document.querySelector('.name-value'),
	budgetValue = document.querySelector('.budget-value'),
	goodsValue = document.querySelector('.goods-value'),
	itemsValue	= document.querySelector('.items-value'),
	employersValue = document.querySelector('.employers-value'),
	discountValue = document.querySelector('.discount-value'),
	isopenValue = document.querySelector('.isopen-value'),
	goodsItem = document.querySelectorAll('.goods-item'),
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
	goodsBtn = document.getElementsByTagName('button')[1];
	twoBtn = document.getElementsByTagName('button')[2];
	freebBtn = document.getElementsByTagName('button')[3];

let money,
    price;

openBtn.addEventListener('click', () => {
    money = prompt("Ваш бюджет?","");
    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?","");
    }
    budgetValue.textContent = money;
    
    nameValue.textContent = prompt("Название вашего магазина?","").toUpperCase(); 
});


goodsBtn.addEventListener('click', () => {
    
    for (let i = 0; i < goodsItem.lenght; i++) {
        let a = goodsItem[i].value;

            if ((typeof(a)) === 'string' && (typeof(a)) != null  && a.length < 50) {
                console.log('Все верно!');
                mainList.shopGoods[i] = a;
                goodsValue.textContent = mainList.shopGoods;
            } else {
                i = i - 1;
        }
    }
});

chooseItem.addEventListener('change', () => {
    let items = chooseItem.value;
    
    if (isNaN(items) && items != "" ) { 
    mainList.shopItems = items.split(",");
    mainList.shopItems.sort();
   
    itemsValue.textContent = mainList.shopItems;
   }
});

timeValue.addEventListener('change', () => {
    let time = timeValue.value;
    if (time < 0) {
                console.log('Такого просто не может быть',"");
                mainList.open = false;
                } else if(time > 8 && time < 20) {
                console.log('Время работать!',"");
                mainList.open = true;
                  } else if(time < 24) {
                    console.log("Уже слишком поздно!","");
                    mainList.open = false;
                    }   else {
                      console.log("В сутках только 24 часа!","");
                      mainList.open = false;
                      } 

    if (mainList.open == true) {
        isopenValue.style.backgroundColor = 'green';
    } else{
        isopenValue.style.backgroundColor = 'red';
    }
});

twoBtn.addEventListener('click', () => {
    countBudgetValue.value = money/ 30;   
});

freebBtn.addEventListener('click', () => {
for (let i = 0; i < hireEmployersItem.length ; i++) {
            let name = hireEmployersItem[i].value;
            mainList.employers[i] = name;
            
            employersValue.textContent += mainList.employers[i] + ', ';
            } 
});




let mainList = {
	buget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discoint: false,
	shopItems: [],
        disointPrice: function disointPrice() {
            if (mainList.discoint == true)	 {
                price = (price/100)*80;
            }
        }
};    
console.log(mainList.shopItems);







console.log(openBtn);
console.log(nameValue);
console.log(budgetValue);
console.log(goodsValue);
console.log(itemsValue);
console.log(employersValue);
console.log(discountValue);
console.log(isopenValue);
console.log(goodsItem);
console.log(chooseItem);
console.log(timeValue);
console.log(countBudgetValue);
console.log(hireEmployersItem);
console.log(goodsBtn[1]);
console.log(twoBtn[2]);
console.log(freebBtn[3]);