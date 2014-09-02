function printNumbers(n) {
    for(var i = 1; i <= n; i++) {
        if((i % 4 != 0) && (i % 5 != 0)) {
            console.log(i + ",");
        }
    }
}