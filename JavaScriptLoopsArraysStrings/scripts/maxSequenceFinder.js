function findMaxSequence(arr) {
    var currentArray = [];
    var resultArray = [];
    var maxCount = 1;
    var currentCount = 1;
    //[3, 5, 4, 6, 1, 2, 3, 6, 10, 32]

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < arr[i + 1]) {
            currentArray.push(arr[i]);
            currentCount++;
        }else {
            currentArray.push(arr[i]);
            if(currentCount >= maxCount) {
                maxCount = currentCount;
                resultArray = currentArray;
                currentArray = [];
                currentCount = 1;
            }
        }
    }
    if(maxCount == 1) {
        console.log("no")
    }else {
        console.log("[" + resultArray.toString() + "]");
    }
}