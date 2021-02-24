function digit_sum(number) {
    var sum = 0;
    while (number > 0) {
        var d = number % 10;
        number = Math.floor(number / 10)
        sum += d;
    }
    return sum;
}

console.log(digit_sum(245678));
console.log(digit_sum(97561));
console.log(digit_sum(543));