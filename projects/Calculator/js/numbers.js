function number (num) {
    var textbox = document.getElementById('number-input');
    var current = textbox.value;
    textbox.value = current + num;
    if (current == 0) {
        textbox.value = num;
    }
    else {
        textbox.value = current + num;
    }
}

function clearInput() {
    document.getElementById('number-input').value = 0;
    document.getElementById('operation-input').value = "";
    document.getElementById('previous').value = "";
}