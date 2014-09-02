function find_min(arrayOfNumbers) {
    var min = arrayOfNumbers[0];
    var len = arrayOfNumbers.length;
    for (var i = 1; i < len; i++) {
        if (arrayOfNumbers[i] < min) {
            min = arrayOfNumbers[i];
        }
    }
    return min;
}

function sortArray(arrayOfNumbers) {
    var resultArray = [];
    var len = arrayOfNumbers.length;
    for (var i = 0; i < len; i++) {
        var min = find_min(arrayOfNumbers);
        var index = arrayOfNumbers.indexOf(min);
        arrayOfNumbers.splice(index,1);
        resultArray.push(min);
        min = 0;
    }
    console.log(resultArray);
}


