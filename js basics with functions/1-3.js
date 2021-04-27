function matrix(n) {
    for (var i = 0; i < n; i++) {
        var line = ""
        for (let j = 0; j < n; j++) {
            line += n + " "
        }
        console.log(line);
    }
}

matrix(3)
matrix(7)
matrix(2)