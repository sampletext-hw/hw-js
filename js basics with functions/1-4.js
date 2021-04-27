function progress_bar(percent) {
    if (percent == 100) {
        console.log("100% Complete!");
    }
    else {
        var line = percent + "% [";
        for (var i = 0; i < ~~(percent / 10); i++) {
            line += "%";
        }
        for (var i = ~~(percent / 10); i < 10; i++) {
            line += ".";
        }
        line += "]";
        console.log(line);
        console.log("Still loading...");
    }
}

progress_bar(10);
progress_bar(20);
progress_bar(50);
progress_bar(80);
progress_bar(100);