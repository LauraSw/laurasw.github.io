window.addEventListener("load", function () {
    var todos = ["todo Nummer 1", "todo Nummer 2", "todo Nummer 3"];
    var i = 0;
    while (todos.length > i) {
        document.querySelector("#todos").innerHTML += "<p>" + todos[i] + "</p>";
        i++;
    }
});
var myVar = 123;
function varTest() {
    var x = 31;
    if (true) {
        var x = 71; // gleiche Variable!
        console.log(x); // 71
    }
    console.log(x); // 71
}
function letTest() {
    var x = 31;
    if (true) {
        x++;
        console.log(x); // 71
        x++;
    }
    console.log(x); // 31
}
letTest();
var animal;
animal = "Dog";
var animal; // bad coding style, but ok
var myConst = 123;
var name1 = "Pingu";
var age1 = 2;
var food1 = ["Seelachs", "Dorade", "Red Snapper"];
var placeOfBirth1 = "Südpol";
var currentLocation1 = "Hamburg";
var name2 = "Leon";
var age2 = 12;
var food2 = ["Antilope", "Gazelle", "Zebra", "Gnu"];
var placeOfBirth2 = "Afrika";
var currentLocation2 = "Stuttgart";
var name3 = "Ele";
var age3 = 28;
var food3 = ["Gras", "Früchte", "Zweige", "Rinde"];
var placeOfBirth3 = "Afrika";
var currentLocation3 = "München";
var penguin = {
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
var people = [
    {
        name: "Peter",
        age: 23
    },
    {
        name: "Michael",
        age: 12
    }
];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].name);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var person1 = {
    name: "Peter",
    age: 12
};
var person2 = {
    name: "Gustav",
    age: 35
};
var peoples = [{
        name: "Gustav",
        age: 35
    }, {
        name: "Peter",
        age: 12
    }];
for (var index = 0; index < peoples.length; index++) {
    console.log(peoples[index].name);
}
//# sourceMappingURL=script.js.map