

interface Cards {
    symbol: string;
    value: number;
}


var cardsComputer: Cards[] = [];

var cardsPerson: Cards[] = [];

var cardsAufnahme: Cards[] = [];

var cardsAblage: Cards[] = [];


window.addEventListener("load", function(): void {

function init (){
    const testObj: Cards = <Cards> {
        symbol: "Test",
        value: 10
    }

    
    const testObj2: Cards = <Cards> {
        symbol: "Test2",
        value: 4
    }

    console.log(cardsAufnahme);
    cardsAufnahme.push(testObj);
    cardsAufnahme.push(testObj2);

    var test = shuffle(cardsAufnahme);
    console.log(test);
};

//Funktion Shuffle mit einem Parameter cardsAufnahme (Array), For-Schleife generiert z
function shuffle (cardsAufnahme: Cards[]) {
    var j, x, i;
    for (i = cardsAufnahme.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cardsAufnahme[i];
        cardsAufnahme[i] = cardsAufnahme[j];
        cardsAufnahme[j] = x;
    }
    return cardsAufnahme;
};





} );

