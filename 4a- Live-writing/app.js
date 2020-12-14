
const 
    twit = document.getElementById("inText"),
    result = document.getElementById("result"),
    count = document.getElementById("count"),
    countContent = Number(count.textContent);



display()

function display(){

    twit.addEventListener('keyup', visible);

}

function visible() {
   result.textContent = twit.value;

   count.innerHTML = countContent - twit.value.length
}
