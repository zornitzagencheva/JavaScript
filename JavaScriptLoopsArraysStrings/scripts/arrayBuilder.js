function createArray(arrayOfIntegers) {

    for(var i = 0; i < arrayOfIntegers.length; i++) {
        arrayOfIntegers[i] = i * 5;
    }
}

function printArrayOnConsole(arrayOfIntegers) {
    for(var int in arrayOfIntegers) {
        console.log(arrayOfIntegers[int]);
    }
}