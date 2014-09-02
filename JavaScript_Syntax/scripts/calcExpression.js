function calcExpression() {
    var result = 0;
    var inputValue = document.getElementById("input").value;
    result = eval(inputValue);
    var displayResult =  document.getElementById("paragraph");
    displayResult.innerHTML = result;
}
