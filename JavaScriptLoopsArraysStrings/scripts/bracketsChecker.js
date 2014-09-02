function checkBrackets(expressionWithBrackets) {
    var leftBracketsCounter = 0;
    var rightBracketsCounter = 0;
    var length = expressionWithBrackets.length;

    for(var i = 0; i < length; i++) {
        if(expressionWithBrackets[i] == '(') {
            leftBracketsCounter++;
        }
        if(expressionWithBrackets[i] == ')') {
            rightBracketsCounter++;
        }
    }

    if((rightBracketsCounter == leftBracketsCounter) &&
        expressionWithBrackets[0] != ')' &&
        expressionWithBrackets[length - 1]) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}