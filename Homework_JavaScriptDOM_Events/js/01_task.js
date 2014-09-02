function changeText() {
    var button = document.getElementById('button');
    var text = button.innerText;
    if(text === 'Like') {
        button.innerText = 'Unlike';
    }else {
        button.innerText = 'Like';
    }
}



