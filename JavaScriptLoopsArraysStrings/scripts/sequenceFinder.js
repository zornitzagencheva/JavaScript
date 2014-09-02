var result = "";
var current = "";
var currentCount = 1;
var maxCount = 1;
var resultArray = [];

function findMaxSequence(inputArray) {
    for(var i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] === inputArray[i + 1]) {
            currentCount++;
            current = inputArray[i].toString();
        }else {
            if(currentCount >= maxCount){
                maxCount = currentCount;
                result = current;
            }
            currentCount = 1;
        }
        if(i == inputArray.length - 2) {
            if(currentCount >= maxCount){
                maxCount = currentCount;
                result = current;
            }
        }
    }

    if(inputArray.length == 1) {
        result = inputArray;
        maxCount = 1;
    }
}

function printMaxSequence(result) {
    for(var i = 0; i < maxCount; i++) {
        resultArray.push(result);
    }
    console.log("['" + resultArray.toString() + "']");
}