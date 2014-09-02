function findMinAndMax(arrayOfNumbers) {
    var min = Math.min.apply(Math, arrayOfNumbers);
    var max = Math.max.apply(Math, arrayOfNumbers);
    console.log("Min -> " + min);
    console.log("Max -> " + max);
}

function parseArray(arrayOfStrings) {
    for(var i = 0; i < arrayOfStrings.length; i++) {
        arrayOfNumbers[i] = parseInt(arrayOfStrings[i]);
    }
}