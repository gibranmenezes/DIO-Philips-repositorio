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
        name: 'Lucy',
        grade: 6,
        class: '2C',
    },
];

function aprovedStudents(arr, result) {
    let aproved = [];

    for (let i = 0; i < arr.lenght; i++) {
        
        const { grade, name } = arr[i];

        if (grade >= result) {
            aproved.push(name);
        }
    }

    return aproved;
}

console.log(aprovedStudents(students, 6));