var budget = +prompt("Ваш бюджет на месяц?", ""),
	shopName = prompt("Название вашего магазина?", ""),
	product1 = prompt("Какой тип товаров будем продавать?", ""),
	product2 = prompt("Какой тип товаров будем продавать?", ""),
	product3 = prompt("Какой тип товаров будем продавать?", ""),

mainList = {
	budget: budget,
	name: shopName,
	shopGoods: [product1,product2,product3],
	employers : {

	},
	open: true
}

alert("Ваш бюджет на 1 день: " + budget / 30);	