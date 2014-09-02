function findNthDigit(arr) {
    var index = Number(arr[0]);
    var number = arr[1];
    var arrOfDigits = number.toString().split('');
    for (var i = 0; i < arrOfDigits.length; i++) {
        if(arrOfDigits[i] == '.') {
            arrOfDigits.splice(i, 1);
        }
    }

    arrOfDigits.reverse();
    var num = parseInt(arrOfDigits[index - 1]);
    if(typeof num === 'number') {
        console.log(num);
    }else {
        console.log("undefined");
    }
}