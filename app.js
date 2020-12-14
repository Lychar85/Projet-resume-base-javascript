// var, let, const

//Var

var firstName = "vlad";
console.log(firstName);

//let

let user = "Emilien";
console.log(user);

//const

const dateofbirth = 1999
console.log(dateofbirth);





/////////////////////////////////////////////////////////////////////




//data type

//string
let firstname = "karl";

//number
let age = 34;


//undefined
let pays;

//null
let email = null;

console.log(email);



//array

let groupe1 = ["vlad", "Quentin", "charly"];

//onsole.log(groupe1[1]);

//objet litteral
let user2 = {
    name: "quentin",
    age: 18
}


console.log(user2.name);




/////////////////////////////////////////////////////////////////////






//operator

let yearPaul = 2020 - 1987;
//console.log(yearPaul);

let year, yearJack;
year = 2020;
yearJack = year - 1996;
//console.log(yearJack);

const yearThauvin = 1993
let agethauvin = year - yearThauvin
console.log(agethauvin);



/////////////////////////////////////////////////////////////////////


//type coercion

const a = 6 + 66
console.log(a);


/////////////////////////////////////////////////////////////////////


//template literral

const name = "Jeremy";
const city = "la roche sur yon";

const hello = `salut ! c'est ${name} et j'habite à ${city}.`
console.log(hello);


/////////////////////////////////////////////////////////////////////



//les arrays

let arinfo = ["Emilien", "stephane", "Vlad", "Benjamin", "mickael", "Jeremy", "Quentin", "Karl", "charly"]
console.log(arinfo);

let user3 = ["charly", {
        frère: 2,
        soeurs: 2
    },
    [1, 2, 3]
]
console.log(user3);


/////////////////////////////////////////////////////////////////////


//les objets

const user4 = {
    firstname: "paul",
    age: 20,
    city: "Antibes",

    birthday: function () {
        return 2019 - this.age
    }
}

let z = user4.birthday();
console.log(z);

/////////////////////////////////////////////////////////////////////



//les dates

const date = new Date();

let today;
today = date;


let month = new Array();
month[0] = "janvier";
month[1] = "février";
month[2] = "mars";
month[11] = "décembre";

//let mois = date.getMonth()

let mois = month[date.getMonth()];

console.log(mois)


/////////////////////////////////////////////////////////////////////


//les conditions

let numloto = 65;

if (numloto == 65) {
    console.log(`bien jouer !`);
} else {
    console.log(`t'es nul !`);
}

 
let departement = 06;

if (departement === 06) {
    console.log(`tu viens du sud ! `);
} else if (departement === 85) {
    console.log(`t'es vendéen`)
} else {
    console.log(`t'es pas francais`);
}

/////////////////////////////////////////////////////////////////////

//swith


let job = "cariste";

switch (job) {
    case "cariste":
        console.log(`range les palettes`);
        break;
    case "préparateur":
        console.log(`prépare les commandes`);
        break;

    default:
        console.log(`t'es au chomage`);
        break;

}


/////////////////////////////////////////////////////////////////////

//les fuctions


let superficie = function (largeur, longueur) {
    return `ma maison fait ${largeur * longueur} m2.`
}

console.log(superficie(10, 7));


/////////////////////////////////////////////////////////////////////



//les boucles

for (let distancemarathon = 15; distancemarathon <= 42; distancemarathon++);

    //console.log(distancemarathon);

let user6 = ["pierre", "paul", "jack"]
for (let i = 0; i < 2; i++) {
   // console.log(user6[i]);
}


for (let i = 0; i < 3; i++) {
    if (user6[i] === "paul") {
        //console.log(`${user6[1]} a perdu`);
    }
}


let fruit = ["pomme", "fraise", "banane"];
//
while (i <= fruit.length) {
    //console.log(fruit[2]);
    i++
}



let i = 0
while (i <= 5) {
    console.log(i);
    i++;
}