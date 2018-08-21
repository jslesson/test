let budget,
	 shopName,
	 time,
	 price

function start() {
	budget = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt("Ваш бюджет на месяц?", "");
	}

	shopName = prompt("Название вашего магазина?", "").toUpperCase();
	time = 21;
}

// start();

let mainList = {
	budget: budget,
	name: shopName,
	shopGoods: [],
	employers : {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {

			let a = prompt("Какой тип товаров будем продавать?", "");
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}

		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time >8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно');
		} else {
			console.log('В сутках 24 часа!');
		}
	},
	budgetOnDay: function budgetOnDay() {
		alert("Ваш бюджет на 1 день: " + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = price * 0.8;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 5; i++) {

			let a = prompt("Введите имя " + i + "-го сотрудника", "");
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
				mainList.employers["employer" + i] = a;
			} else {
				i = i - 1;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите товары через запятую");

			if ((typeof(items)) == 'string' && items != '' && items != null && isNaN(items)) {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите", ""));
				mainList.shopItems.sort();
			} else {
				i = i - 1;
			}
		}	
	}
}

mainList.shopItems.forEach(function(item,i,arr) {
	console.log(++i + ': ' + item + '(массив:' + arr + ')');
})

console.log("Наш магазин включает в себя: ");
for (let key in mainList) {
	console.log(key);
}

console.log(mainList);