function findLargestBySumOfDigits(num) {
    var maxSum = 0;
    var maxIndex = 0;
    var currentSum = 0;
    var currentIndex = 0;
    var counter = 0;

    for (var i = 0; i < num.length; i++) {
        var currentNumber = parseInt(num[i]);

        if(num[i].toString().split('').indexOf('.') > -1 ||
            isNaN(currentNumber) == true ||
            typeof currentNumber === 'string')
        {
            continue;
        } else {
            currentNumber = currentNumber.toString().split('');
            currentSum = 0;
            currentIndex = 0;

            for (var j = 0; j < currentNumber.length; j++) {
                if(currentNumber[j] !== '-') {
                    currentSum += parseInt(currentNumber[j]);
                    currentIndex = i;
                    counter++;
                }
            }

            if(currentSum > maxSum) {
                maxSum = currentSum;
                maxIndex = currentIndex;
            }
        }
    }

    if(counter <= 2) {
        console.log('undefined');
    } else {
        console.log(num[maxIndex]);
    }
}