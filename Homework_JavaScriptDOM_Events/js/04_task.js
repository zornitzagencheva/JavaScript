function numbersOnly() {
    var func = function(e) {
        if (e.charCode < 48 || e.charCode > 57) {
            var colorBackground = 'red';
            e.preventDefault();
            setTimeout(change(colorBackground), 1000)
        }else {
            colorBackground = 'white';
            setTimeout(change(colorBackground), 1000);
        }
    };

    var inputNumbers = document.getElementById('numbers');
    inputNumbers.addEventListener('keypress', func, false);

    function change(colorBackground) {
        document.getElementById('numbers').style.backgroundColor=colorBackground;
    }
}