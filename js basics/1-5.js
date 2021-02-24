function is_leap_year(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return "yes";
    }
    return "no";
}

console.log(is_leap_year(1984));
console.log(is_leap_year(2003));
console.log(is_leap_year(4));