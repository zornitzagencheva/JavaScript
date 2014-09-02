function reverseWordsInString(str)  {
    var stringArray = str.split(' ');

    for (var i = 0; i < stringArray.length; i++) {
        var current = stringArray[i].split('').reverse();
        stringArray[i] = current.join('');
    }

    console.log(stringArray.join(' '));
}