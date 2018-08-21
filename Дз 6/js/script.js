let open = document.getElementById('open-btn'),
	 name_value = document.getElementsByClassName('name-value')[0],
	 budget_value = document.getElementsByClassName('budget-value')[0],
	 goods_value = document.getElementsByClassName('goods-value')[0],
	 items_value = document.getElementsByClassName('items-value')[0],
	 employers_value = document.getElementsByClassName('employers-value')[0],
	 discount = document.getElementsByClassName('discount-value'),
	 isopen_value = document.getElementsByClassName('isopen-value')[0],
	 goods_item = document.getElementsByClassName('goods-item'),
	 goods_btn = document.getElementsByTagName('button')[1],
	 budget_btn = document.getElementsByTagName('button')[2],
	 employers_btn = document.getElementsByTagName('button')[3],
	 choose_item = document.querySelector('.choose-item'),
	 time_value = document.querySelector('.time-value'),
	 count = document.querySelector('.count-budget-value'),
	 hire = document.querySelectorAll('.hire-employers-item'); 

let money,
	 price;

goods_btn.disabled = true;
budget_btn.disabled = true;
employers_btn.disabled = true;
count.disabled = true;

open.addEventListener('click', () => {
	money = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет на месяц?", "");
	}

	budget_value.textContent = money;

	name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

	budget_btn.disabled = false;
});

for(let i = 0; i < goods_item.length; i++) {

	goods_item[i].addEventListener('change', () => {
		if (goods_item[i].value == '') {
			goods_btn.disabled = true;
		} else {
			goods_btn.disabled = false;
		}
	});

}

for(let i = 0; i < hire.length; i++) {

	hire[i].addEventListener('change', () => {
		if (hire[i].value == '') {
			employers_btn.disabled = true;
		} else {
			employers_btn.disabled = false;
		}
	});

}

goods_btn.addEventListener('click', () => {

	for (let i = 0; i < goods_item.length; i++) {

		let a = goods_item[i].value;
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
			i = i - 1;
		}

	}

});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		mainList.open = false;
	} else {
		console.log('В сутках 24 часа!');
		mainList.open = false;
	}

	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
	}
});

budget_btn.addEventListener('click', () => {
	count.value = money / 30;
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire.length; i++) {
		let name = hire[i].value;
		mainList.employers[i] = name;
		
		employers_value.textContent += mainList.employers[i] + ', ';
	}
});

let mainList = {
	budget: money,
	name: name,
	shopGoods: [],
	employers : {},
	open: false,
	discount: true,
	shopItems: [],
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = price * 0.8;
		}
	}
}

console.log(mainList);


