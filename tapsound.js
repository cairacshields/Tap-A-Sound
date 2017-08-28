function person(name, age, weight){
	this.weight = weight;
	this.name = name;
	this.age = age;
}

var newPerson = new person(200,"emaily", 13);



console.log(newPerson.name);