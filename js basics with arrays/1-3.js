function rotate_array(array, shift) {
    shift %= array.length; // rotation for more that array size are duplicate rotations
    for (let s = 0; s < shift; s++) {
        let first = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array[array.length - 1] = first;
    }
    return array;
}

console.log(rotate_array([51, 47, 32, 61, 21], 2).join());
console.log(rotate_array([32, 21, 61, 1], 4).join());
console.log(rotate_array([2, 4, 15, 31], 5).join());
