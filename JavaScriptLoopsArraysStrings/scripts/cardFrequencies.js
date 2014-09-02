function findCardFrequency(inputCards) {
    var arrayOfInputCards = inputCards.split(' ');
    var arrOfElements = [];
    var arrOfFrequency = [];

    for(var i = 0; i < arrayOfInputCards.length; i++) {
        var currentCard = arrayOfInputCards[i];
        var currentCount = 0;
        var currentChar = currentCard[0];

        for(var j = 0; j < arrayOfInputCards.length; j++) {
            var current = arrayOfInputCards[j];

            if(currentChar == current[0]) {
                currentCount++;
            }
        }

        var frequency = (currentCount / arrayOfInputCards.length) * 100;
        arrOfElements.push(currentChar);
        arrOfFrequency.push(frequency);
    }

    for(var i = 0; i < arrOfElements.length; i++) {
        var range = arrOfElements.slice(0, i);
        var isInRange = range.indexOf(arrOfElements[i]);
        if(isInRange == -1) {
            if(arrOfElements[i] == 1) {
                console.log(arrOfElements[i] + '0' + ' -> ' + arrOfFrequency[i] + '%');
            }else {
                console.log(arrOfElements[i] + ' -> ' + arrOfFrequency[i] + '%');
            }
        }
    }
}
