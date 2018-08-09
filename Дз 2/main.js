let budget = +prompt("Ваш бюджет на месяц?", ""),
	shopName = prompt("Название вашего магазина?", "");

let mainList = {
	budget: budget,
	name: shopName,
	shopGoods: [],
	employers : {

	},
	open: true
}

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?", "");
	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}

}

alert("Ваш бюджет на 1 день: " + budget / 30);	

console.log(mainList);

// Первый цикл

/*let i = 0;

while (i < 5) {

	let a = prompt("Какой тип товаров будем продавать?", "");

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
 		console.log('Все верно!');
 		mainList.shopGoods[i] = a;
 		i++;
	}

}*/

// Второй цикл

/*let i = 0;

do {

	let a = prompt("Какой тип товаров будем продавать?", "");

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
 		console.log('Все верно!');
 		mainList.shopGoods[i] = a;
 		i++;
	}
	
} while (i < 5); */