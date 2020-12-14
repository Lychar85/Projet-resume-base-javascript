//interface

const
    bodybtn = document.querySelector("#btn1"),
    body = document.querySelector("body"),

    boxbtnred = document.getElementById("btn2"),
    boxred = document.getElementById("box1"),

    boxbtntxt = document.getElementById("btn3"),
    boxtxt = document.getElementById("box2"),

    boxbtntitre = document.getElementById("btn4"),
    boxtitre = document.getElementById("box3");

//navigation = document.getElementById("li");

//Aplication

display()

function display() {

    //body en gris
    bodybtn.addEventListener('click', backgroundGrey);
    //box 1 en rouge
    boxbtnred.addEventListener('click', backgroundboxred);
    //box 2 texte
    boxbtntxt.addEventListener('click', ajoutText);
    //box 3 titre
    boxbtntitre.addEventListener('click', ajoutTitre);
    //navigation
    //navigation.addEventListener('mouseover', hoverNav);
}



//style

//body
function backgroundGrey(e) {
    if(body.style.backgroundColor === "grey") {
        body.style.backgroundColor = "white"
    }
        else body.style.backgroundColor = "grey"
    
}
//box 1
function backgroundboxred() {
    if(boxred.style.backgroundColor === "red") {
        boxred.style.backgroundColor = "white"
    }
        else boxred.style.backgroundColor = "red"
}
//box 2 
function ajoutText() {
    if(boxtxt.innerHTML === `<p>Salut l'équipe</p>`) {
        boxtxt.innerHTML = ` `
    }
        else boxtxt.innerHTML = `<p>Salut l'équipe</p>`
}
//box 3 
function ajoutTitre() {

    if(boxtitre.innerHTML === `<h1>John Forever</h1>`) {
        boxtitre.innerHTML = ` `
    }
    else boxtitre.innerHTML = `<h1>John Forever</h1>`
}
/*
//navigation
function hoverNav(e) {
    navigation.style.backgroundColor = "Blue"
}
*/
function mouseover() {
    let li = document.getElementsByTagName('li')
    if (document.getElementsByTagName('li') === "LI") {
        target.style.color = "green"
    }
}
let list = document.getElementById('list');
list.addEventListener('mouseover', function (e) {
    if (e.target.nodeName === "LI") {
        e.target.style.color = "green";
    }
})
list.addEventListener('mouseout', function (e) {
    e.target.style.color = "";
})