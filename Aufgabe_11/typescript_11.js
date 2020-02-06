var cardsComputer = [];
var cardsPerson = [];
var cardsAufnahme = [];
var cardsAblage = [];
window.addEventListener("load", function () {
    function init() {
        var testObj = {
            symbol: "Test",
            value: 10
        };
        var testObj2 = {
            symbol: "Test2",
            value: 4
        };
        console.log(cardsAufnahme);
        cardsAufnahme.push(testObj);
        cardsAufnahme.push(testObj2);
        var test = shuffle(cardsAufnahme);
        console.log(test);
    }
    ;
    //Funktion Shuffle mit einem Parameter cardsAufnahme (Array), For-Schleife generiert z
    function shuffle(cardsAufnahme) {
        var j, x, i;
        for (i = cardsAufnahme.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cardsAufnahme[i];
            cardsAufnahme[i] = cardsAufnahme[j];
            cardsAufnahme[j] = x;
        }
        return cardsAufnahme;
    }
    ;
});
//# sourceMappingURL=typescript_11.js.map