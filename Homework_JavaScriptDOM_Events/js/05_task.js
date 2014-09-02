function coordinatesOfMouse() {
    var currentCoordinates = 'X:' + event.clientX +  ' Y:' + event.clientY ;
    var currentDate = new Date();
    var textArea = document.getElementById('text');
    textArea.value += "" + currentCoordinates + " Time:" + currentDate + '\n';
}

window.addEventListener('mousemove', coordinatesOfMouse, false);
