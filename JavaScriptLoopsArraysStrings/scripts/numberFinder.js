function findMostFreqNum(inputArray) {
    var currentCount = 0;
    var mostFrequentNumber = 0;
    var maxCount = 0;

    for(var i = 0; i < inputArray.length; i++) {
        var currentNumber = inputArray[i];

        for(var j = 0; j < inputArray.length; j++) {
            if(currentNumber == inputArray[j]) {
                currentCount++;
            }
        }

        if(currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequentNumber = currentNumber;
        }
        currentCount = 0;
    }

    console.log(mostFrequentNumber + " (" + maxCount + " times)");
}