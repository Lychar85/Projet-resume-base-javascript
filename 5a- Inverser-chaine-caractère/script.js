const 
    text = document.getElementById('text'),
    textreverse = document.getElementById('textreverse'),
    input = document.getElementById('input'),
    button = document.getElementById('button'),
    result = document.getElementById('result');


display()

function display() {
    text.textContent = "wesh pelo";
    textreverse.textContent = text.textContent.split('').reverse().join('');
    button.addEventListener('click', addtxt);





}


function addtxt(e) {
    result.innerHTML = input.value.split('').reverse('').join('');

    e.preventDefault();
}
