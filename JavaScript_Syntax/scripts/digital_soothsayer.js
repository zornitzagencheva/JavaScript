function soothsayer(arrOfNumbers, arrOfProgramingLanguages, arrOfCities, arrOfCars) {
    var arrOfAllArrays = [arrOfNumbers, arrOfProgramingLanguages, arrOfCities, arrOfCars];
    var result = [];
    for(var i = 0; i < 4; i++) {
        var currentRandom = Math.floor(Math.random() * 4) + 0;
        var currentArray = arrOfAllArrays[i];
        result[i] = currentArray[currentRandom];
    }
    console.log("You will work " + result[0] + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3]);
}