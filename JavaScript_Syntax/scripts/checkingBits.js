function bitChecker(num) {
    var resultNumber = num >> 3;
    if(resultNumber % 2 == 0) {
        console.log(false);
    }else {
        console.log(true);
    }
}