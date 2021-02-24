function age_string(age) {
    if (age <= 2) {
        return "младенец";
    } else if (age <= 13) {
        return "ребенок";
    } else if (age <= 19) {
        return "подросток";
    } else if (age <= 65) {
        return "взрослый";
    } else {
        return "пожилой";
    }
}

console.log(age_string(20));
console.log(age_string(1));
console.log(age_string(100));