let money,
	name,
 	time,
	price, 
	employers;

function start() {
	money = prompt("Ваш бюджет?","");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?","");
	}
	name = prompt("Название вашего магазина?",""). toUpperCase();
	time = 18;
}

start();

let mainList = {
	buget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discoint: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) { 
	let a = prompt("Какой тип товаров будем продавать?");
			
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a !='' && a.length < 50) {
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				} else {
					i = i - 1;
			}
		}
	},		
	workTime: function workTime(time) {
			 if (time < 0) {
			 console.log('Такого просто не может быть',"");
			} else if(time > 8 && time < 20) {
			console.log('Время работать!',"");
			mainList.open = true;
			  } else if(time < 24) {
			console.log("Уже слишком поздно!","");
				} 	else {
					console.log("В сутках только 24 часа!","");
				  } 
	},
	budgetPerDay: function budgetPerDay() {
		alert("Ежедневный бюджет " + mainList.buget / 30);
	},

	disointPrice: function disointPrice() {
		if (mainList.discoint == true)	 {
			price = (price/100)*80;
		}
	},

	employersInvite: function employersInvite() {
	for (let i = 0; i < 4; i++) {
		let name = prompt("Имя сотрудника");
		mainList.employers[i] = name;
		} 
	},

	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары","");
	mainList.shopItems = items.split(",");
	mainList.shopItems.push(prompt("Подождите, еще ",""));
	mainList.shopItems.sort();
    for(let i = 0; i < mainList.shopItems.length; i++) {
     		if ((typeof(mainList.shopItems[i])) === 'string' && (typeof(mainList.shopItems[i])) != null && mainList.shopItems[i] != '') {
						console.log('Все верно!');
                } 
            }
        }
};

mainList.employersInvite;

let shopGoodsArr = mainList.shopItems;
shopGoodsArr.forEach(function(item, i, arr) {
    document.write("<p> У нас вы можете купить: " + (i+1) + ":" + item + "</p> </br>");
});
console.log(mainList);




