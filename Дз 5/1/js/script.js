let item = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('ul'),
	body = document.querySelector('body'),
	title = document.getElementById('title'),
	column = document.querySelectorAll('.column'),
	adv = document.querySelector('.adv'),
	humanAnswer = document.querySelector('.prompt');

menu.insertBefore(item[2], item[1]);

body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = "Мы продаем только подлинную технику Apple ";

column[1].removeChild(adv);

let answer = prompt("Какого ваше отношение к технике Apple?", "");

humanAnswer.textContent = answer;