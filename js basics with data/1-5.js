function bin_to_dec(bin) {
    var sum = 0;
    var pow = 1;
    while (bin.length) {
        var d = ~~bin[bin.length - 1];
        if (d) {
            sum += pow;
        }
        pow *= 2;
        bin = bin.substring(0, bin.length - 1);
    }
    return sum;
}

console.log(bin_to_dec("00001001"));
console.log(bin_to_dec("11110000"));