function findPalindromes(input) {
    var arrayOfWords = input.split(/[(?:,.!| )]+/);
    var length = arrayOfWords.length;
    var result = [];

    for(var i = 0; i < length; i++) {
        var currentWord = arrayOfWords[i].toLowerCase();
        var currentLength = Math.round(currentWord.length / 2);
        var index = currentWord.length - 1;
        var currentCount = 0;

        for(var j = 0; j < currentLength; j++, index--) {
            if(currentWord[j] == currentWord[index]) {
                currentCount++;
            }
        }

        if(currentCount == currentLength) {
            result.push(currentWord);
        }
        currentCount = 0;
    }
    console.log(result);
}