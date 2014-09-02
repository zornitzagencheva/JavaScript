function countSubstringOccur(inputArray) {
    var substring = inputArray[0].toLowerCase();
    var text = inputArray[1].toLowerCase();
    var counter = 0;

    for(var i = 0; i < text.length; i++ ){
        var currentSubString = text.substr(i, substring.length);
        if(currentSubString == substring) {
            counter++;
        }
    }

    console.log(counter);
}