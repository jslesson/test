let age = document.getElementById('age'),
	 surname = 'Popov',
	 name = 'Alex';	
 
let user = {
	surname: surname,
	name: name,
	age: age.value,
	showUser: function showUser(surname, name) {
	   alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.age);
	}
}

user.showUser();

console.log(user);
 
