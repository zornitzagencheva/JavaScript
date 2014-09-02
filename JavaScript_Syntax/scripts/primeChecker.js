function isPrime(number) {
    var isPrime = true;
    var squareRootOfNumber = Math.sqrt(number);
    for(var i = 2; i <= squareRootOfNumber; i++) {
        if(number % i == 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}