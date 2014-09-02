function hideOddElementInTable() {
   var table = document.getElementsByTagName('table')[0];
   var length = table.rows.length;

    for (var i = 0; i < length; i+=2) {
        table.rows[i].style.display = 'none';
    }
}

var button = document.getElementById('btnHideOddRows');
button.addEventListener('click', hideOddElementInTable, false);

