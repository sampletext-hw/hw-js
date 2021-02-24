var prices = {
    students: [8.45, 9.80, 10.46],
    corporate: [10.90, 15.60, 16],
    regular: [15, 20, 22.50]
};

function day_str_to_index(day) {
    switch (day) {
        case "Friday":
            return 0;
        case "Saturday":
            return 1;
        case "Sunday":
            return 2;
    }
}

function calculate(count, category, day) {
    var price = prices[category.toLowerCase()][day_str_to_index(day)];
    var total = price * count;

    if (category == "Students" && count >= 30) {
        total *= 0.85;
    }
    else if (category == "Corporate" && count >= 100) {
        total -= price * 10;
    }
    else if (category == "Regular" && count >= 10 && count <= 20) {
        total *= 0.95;
    }
    return total;
}

function calculate_verbose(count, category, day){
    var total = calculate(count, category, day);
    return `Total price: ${total.toFixed(2)}`;
}

console.log(calculate_verbose(30, "Students", "Sunday"));
console.log(calculate_verbose(40, "Regular", "Saturday"));