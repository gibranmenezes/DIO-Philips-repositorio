const students = [
	{
		name: 'Tony',
		grade: 5,
		class: '1B',
	},
	{
		name: 'Jany',
		grade: 9,
		class: '1B',
	},
	{
		name: 'Jessy',
		grade: 6,
		class: '2C',
	},
];

function aprovedStudents(students, average) {
	let aproved = [];

	for (let i = 0; i < students.length; i++) {
		let { grade, name } = students[i];

		if (grade >= average) {
			aproved.push(name);
		}
	}

	return aproved;
}

console.log(aprovedStudents(students, 5));