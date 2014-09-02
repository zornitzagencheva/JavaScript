function checkDigit(num) {
    var firstPartOfNum = Math.floor(num / 100);
    var thirdDigit = firstPartOfNum % 10;

    if(thirdDigit === 3){
        console.log(true);
    }else {
        console.log(false);
    }
}