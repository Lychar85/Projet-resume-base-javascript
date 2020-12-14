const 
    text = document.getElementById('text'),
    textreverse = document.getElementById('textreverse');


display()

function display() {
    text.textContent = "wesh pelo";
    textreverse.textContent = text.textContent.split('').reverse().join('');
}

