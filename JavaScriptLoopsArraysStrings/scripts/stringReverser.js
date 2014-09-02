function reverseString(stringInput) {
    var resultString = [];
    for(var i = stringInput.length - 1, j = 0; i >= 0 ; i--, j++) {
        resultString.push(stringInput[i]);
    }
    var result = resultString.join('');
    console.log(result);
}