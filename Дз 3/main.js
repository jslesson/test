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

start();

let mainList = {
	budget: budget,
	name: shopName,
	shopGoods: [],
	employers : {},
	open: true,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товаров будем продавать?", "");
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}

	}
}
chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time >8 && time < 20) {
		console.log('Время работать');
	} else if (time < 24) {
		console.log('Уже слишком поздно');
	} else {
		console.log('В сутках 24 часа!');
	}
}
// workTime(18);

function budgetOnDay() {
	return budget / 30;
}
alert("Ваш бюджет на 1 день: " + budgetOnDay());

function discountPrice() {
	price = 100;

	if (mainList.discount == true) {
		return price * 0.8;
	} else {
		return price;
	}
}
alert(discountPrice());

function employers() {
	for (let i = 1; i < 5; i++) {

		let a = prompt("Введите имя " + i + "-го сотрудника", "");
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
			mainList.employers["employer" + i] = a;
		} else {
			i = i - 1;
		}
	}
}
employers();

console.log(mainList);