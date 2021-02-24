function my_round(number, digits) {
    return (~~(number * Math.pow(10, digits))) / Math.pow(10, digits);
}

console.log(my_round(3.1415926535897932384626433832795, 2));