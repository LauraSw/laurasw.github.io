window.addEventListener("load", function (): void {

    var todos: string[] = ["todo Nummer 1", "todo Nummer 2", "todo Nummer 3"];

    var i: number = 0;

    while (todos.length > i) {
        document.querySelector("#todos").innerHTML += "<p>" + todos[i] + "</p>";
        i++;
    }


});



const myVar: number = 123;


function varTest(): void {
    var x: number = 31;
    if (true) {
        var x: number = 71;  // gleiche Variable!
        console.log(x);  // 71
    }
    console.log(x);  // 71
}



function letTest(): void {
    let x: number = 31;
    if (true) {
        x++;
        console.log(x);  // 71
        x++;
    }
    console.log(x);  // 31
}

letTest();


var animal: string;
animal = "Dog";

var animal: string; // bad coding style, but ok


const myConst: number = 123;




var name1: string = "Pingu";
var age1: number = 2;
var food1: string[] = ["Seelachs", "Dorade", "Red Snapper"];
const placeOfBirth1: string = "Südpol";
var currentLocation1: string = "Hamburg";

var name2: string = "Leon";
var age2: number = 12;
var food2: string[] = ["Antilope", "Gazelle", "Zebra", "Gnu"];
const placeOfBirth2: string = "Afrika";
var currentLocation2: string = "Stuttgart";

var name3: string = "Ele";
var age3: number = 28;
var food3: string[] = ["Gras", "Früchte", "Zweige", "Rinde"];
const placeOfBirth3: string = "Afrika";
var currentLocation3: string = "München";

interface Animal {
    name: string;
    age: number;
    food: string[];
    placeOfBirth: string;
    currentLocation: string;
}

var penguin: Animal = {
    name: "Leon",
    age: 12,
    food: ["Antilope", "Gazelle", "Zebra", "Gnu"],
    placeOfBirth: "Afrika",
    currentLocation: "Stuttgart"
};

penguin.name = "test";

console.log(penguin.name); // Zugriff lesend

penguin.age++; // Zugriff schreibend 
penguin.currentLocation = "Stuttgart"; // Zugriff schreibend 






interface People {
    name: string;
    age: number;
}


var people: People[] = [
    {
        name: "Peter",
        age: 23
    },
    {
        name: "Michael",
        age: 12
    }
];

for (let index: number = 0; index < people.length; index++) {
    console.log(people[index].name);

}


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter = new Greeter("world");










interface Person {
    name: string;
    age: number;
}

var person1: Person = {
    name: "Peter",
    age: 12
};

var person2: Person = {
    name: "Gustav",
    age: 35
};

var peoples: Person[] = [{
    name: "Gustav",
    age: 35
}, {
    name: "Peter",
    age: 12
}];

for (let index: number = 0; index < peoples.length; index++) {
    console.log( peoples[index].name );
    
}

