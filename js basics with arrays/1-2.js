function find_duplicates(array1, array2) {

    let duplicates = new Set();

    for (let value of array1) {
        if (array2.includes(value)) {
            duplicates.add(value);
        }
    }

    for (let value of array2) {
        if (array1.includes(value)) {
            duplicates.add(value);
        }
    }

    return [...duplicates];
}

console.log(
    find_duplicates(
        ['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2']
    ).join('\n')
);

console.log(
    find_duplicates(
        ['R', 'u', 's', 's', 'i', 'a'],
        ['R', 'u', 't']
    ).join('\n')
);