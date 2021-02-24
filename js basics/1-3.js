function is_divisible(number) {
    var is2 = number % 2 == 0;
    var is3 = number % 3 == 0;
    var is5 = number % 5 == 0;
    var is7 = number % 7 == 0;
    if (is2 && is5) {
        return 10;
    } else if (is2 && is3) {
        return 6;
    } else if (is7) {
        return 7;
    } else if (is5) {
        return 5;
    } else if (is3) {
        return 3;
    } else if (is2) {
        return 2;
    }
    else {
        return 0;
    }
}

function is_divisible_verbose(number) {
    var res = is_divisible(number);
    if (res) {
        return `Число делится на ${res}`;
    } else {
        return "Не делится";
    }
}

console.log(is_divisible_verbose(30));
console.log(is_divisible_verbose(15));
console.log(is_divisible_verbose(12));
console.log(is_divisible_verbose(1643));