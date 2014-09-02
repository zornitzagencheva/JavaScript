
function divisionBy3(num) {
    var sum = 0;
    var remainder = 0;

    while(num != 0) {
        remainder = num % 10;
        num = Math.floor(num / 10);
        sum += remainder;
    }

    if (sum % 3 == 0){
        console.log("the number is divided by 3 without remainder");
    }else {
        console.log("the number is not divided by 3 without remainder");
    }
}