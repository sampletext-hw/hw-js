function calc(par1, op, par2) {
    switch (op) {
        case '+':
            return par1 + par2;
        case '-':
            return par1 - par2;
        case '*':
            return par1 * par2;
        case '/':
            return par1 / par2;
    }
    return 0;
}

console.log(calc(10, '+', 10).toFixed(2));
console.log(calc(10, '-', 10).toFixed(2));
console.log(calc(10, '*', 10).toFixed(2));
console.log(calc(10, '/', 10).toFixed(2));