function calculateAge(years) {
	return `In ${years} years, ${this.name} will be ${
		this.age + years
	} years old.`;
}

const person1 = {
	name: 'Jessy',
	age: 23,
};

const person2 = {
	name: 'Mary',
	age: 20,
};

const person3 = {
	name: 'John',
	age: 13,
};

console.log(calculateAge.call(person1, 5));
console.log(calculateAge.apply(person2, [6]));