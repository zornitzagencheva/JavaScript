function calcSupply(age, maximumAge, food, favoriteFood) {
    var result = Math.floor(((maximumAge - age) * food) * 365);
    var message = result + "kg of " + favoriteFood + " would be enough until You are " + maximumAge + " years old."
    return message;
}