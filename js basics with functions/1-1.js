function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(min(min(2, 5), 3))
console.log(min(min(600, 342), 123))
console.log(min(min(25, 21), 4))