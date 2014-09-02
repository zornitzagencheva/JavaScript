function findMostFreqWord(input) {
    var inputArray = input.split(/[(?:,.!| )]+/)

    for(var i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].toLowerCase();
    }

    inputArray = inputArray.sort(function(a, b) {
        return a > b;
    });

    var length = inputArray.length;
    var resultArray = [];
    var resultCounts = [];
    var currentCount = 0;

    for(var i = 0; i < length; i++) {
        var currentWord = inputArray[i].toLowerCase();
        var currentIndex= resultArray.indexOf(currentWord, 0);
        if(currentIndex == -1) {
            resultArray.push(currentWord);

            for(var j = 0; j < length; j++) {
                if(currentWord == inputArray[j].toLowerCase()) {
                    currentCount++;
                }
            }
            resultCounts.push(currentCount);
        }

        currentCount = 0;
    }

    var counter = 0;

    var maxCount = Math.max.apply(Math, resultCounts);

    for(var i = 0; i < resultCounts.length; i++) {
        if(resultCounts[i] == maxCount) {
            console.log(resultArray[i] + " -> " + resultCounts[i] + " times");
        }
    }
}