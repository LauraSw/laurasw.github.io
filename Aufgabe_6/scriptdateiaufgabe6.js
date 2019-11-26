window.addEventListener("load", function () {
    document.getElementById("africa").addEventListener("click", Afrika, false);
    document.getElementById("europe").addEventListener("click", Europa, false);
    document.getElementById("southamerica").addEventListener("click", Südamerika, false);
    document.getElementById("northamerica").addEventListener("click", Nordamerika, false);
    document.getElementById("asia").addEventListener("click", Asien, false);
    document.getElementById("australia").addEventListener("click", Australien, false);
}, false);
function Afrika() {
    //2018
    var afrikaemission2018 = 1235.5;
    var südamerikaemission2018 = 1261.5;
    var europaemission2018 = 4209.3;
    var nordamerikaemission2018 = 6035.6;
    var asienemission2018 = 16274.1;
    var australienemission2018 = 2100.5;
    //2008
    var afrikaemission2008 = 1028;
    var südamerikaemission2008 = 1132.6;
    var europaemission2008 = 4965.7;
    var nordamerikaemission2008 = 6600.4;
    var asienemission2008 = 12954.7;
    var australienemission2008 = 1993;
    //Rechnung
    var gesamtemission2018 = afrikaemission2018 + europaemission2018 + südamerikaemission2018 + nordamerikaemission2018 + asienemission2018 + australienemission2018;
    var anteilafrika2018 = (afrikaemission2018 / gesamtemission2018) * 100;
    var wachstumafrikavon2008zu2018absolut = afrikaemission2018 - afrikaemission2008;
    var wachstumafrikavon2008zu2018prozentual = ((wachstumafrikavon2008zu2018absolut / afrikaemission2008) * 100);
    //Text ändern
    zeigeDatenAn(afrikaemission2018, anteilafrika2018, wachstumafrikavon2008zu2018prozentual, wachstumafrikavon2008zu2018absolut, "Africa");
}
;
function Europa() {
    //2018
    var afrikaemission2018 = 1235.5;
    var südamerikaemission2018 = 1261.5;
    var europaemission2018 = 4209.3;
    var nordamerikaemission2018 = 6035.6;
    var asienemission2018 = 16274.1;
    var australienemission2018 = 2100.5;
    //2008
    var afrikaemission2008 = 1028;
    var südamerikaemission2008 = 1132.6;
    var europaemission2008 = 4965.7;
    var nordamerikaemission2008 = 6600.4;
    var asienemission2008 = 12954.7;
    var australienemission2008 = 1993;
    //Rechnung
    var gesamtemission2018 = afrikaemission2018 + europaemission2018 + südamerikaemission2018 + nordamerikaemission2018 + asienemission2018 + australienemission2018;
    var anteileuropa2018 = (europaemission2018 / gesamtemission2018) * 100;
    var wachstumeuropavon2008zu2018absolut = europaemission2018 - europaemission2008;
    var wachstumeuropavon2008zu2018prozentual = ((wachstumeuropavon2008zu2018absolut / europaemission2008) * 100);
    //Text ändern
    zeigeDatenAn(europaemission2018, anteileuropa2018, wachstumeuropavon2008zu2018prozentual, wachstumeuropavon2008zu2018absolut, "Europe");
}
;
function Südamerika() {
    //2018
    var afrikaemission2018 = 1235.5;
    var südamerikaemission2018 = 1261.5;
    var europaemission2018 = 4209.3;
    var nordamerikaemission2018 = 6035.6;
    var asienemission2018 = 16274.1;
    var australienemission2018 = 2100.5;
    //2008
    var afrikaemission2008 = 1028;
    var südamerikaemission2008 = 1132.6;
    var europaemission2008 = 4965.7;
    var nordamerikaemission2008 = 6600.4;
    var asienemission2008 = 12954.7;
    var australienemission2008 = 1993;
    //Rechnung
    var gesamtemission2018 = afrikaemission2018 + europaemission2018 + südamerikaemission2018 + nordamerikaemission2018 + asienemission2018 + australienemission2018;
    var anteilsüdamerika2018 = (südamerikaemission2018 / gesamtemission2018) * 100;
    var wachstumsüdamerikavon2008zu2018absolut = südamerikaemission2018 - südamerikaemission2008;
    var wachstumsüdamerikavon2008zu2018prozentual = ((wachstumsüdamerikavon2008zu2018absolut / südamerikaemission2008) * 100);
    //Text ändern
    zeigeDatenAn(südamerikaemission2018, anteilsüdamerika2018, wachstumsüdamerikavon2008zu2018prozentual, wachstumsüdamerikavon2008zu2018absolut, "Southamerica");
}
;
function Nordamerika() {
    //2018
    var afrikaemission2018 = 1235.5;
    var südamerikaemission2018 = 1261.5;
    var europaemission2018 = 4209.3;
    var nordamerikaemission2018 = 6035.6;
    var asienemission2018 = 16274.1;
    var australienemission2018 = 2100.5;
    //2008
    var afrikaemission2008 = 1028;
    var südamerikaemission2008 = 1132.6;
    var europaemission2008 = 4965.7;
    var nordamerikaemission2008 = 6600.4;
    var asienemission2008 = 12954.7;
    var australienemission2008 = 1993;
    //Rechnung
    var gesamtemission2018 = afrikaemission2018 + europaemission2018 + südamerikaemission2018 + nordamerikaemission2018 + asienemission2018 + australienemission2018;
    var anteilnordamerika2018 = (nordamerikaemission2018 / gesamtemission2018) * 100;
    var wachstumnordamerikavon2008zu2018absolut = nordamerikaemission2018 - nordamerikaemission2008;
    var wachstumnordamerikavon2008zu2018prozentual = ((wachstumnordamerikavon2008zu2018absolut / nordamerikaemission2008) * 100);
    //Text ändern
    zeigeDatenAn(nordamerikaemission2018, anteilnordamerika2018, wachstumnordamerikavon2008zu2018prozentual, wachstumnordamerikavon2008zu2018absolut, "Northamerica");
}
;
function Asien() {
    //2018
    var afrikaemission2018 = 1235.5;
    var südamerikaemission2018 = 1261.5;
    var europaemission2018 = 4209.3;
    var nordamerikaemission2018 = 6035.6;
    var asienemission2018 = 16274.1;
    var australienemission2018 = 2100.5;
    //2008
    var afrikaemission2008 = 1028;
    var südamerikaemission2008 = 1132.6;
    var europaemission2008 = 4965.7;
    var nordamerikaemission2008 = 6600.4;
    var asienemission2008 = 12954.7;
    var australienemission2008 = 1993;
    //Rechnung
    var gesamtemission2018 = afrikaemission2018 + europaemission2018 + südamerikaemission2018 + nordamerikaemission2018 + asienemission2018 + australienemission2018;
    var anteilasien2018 = (asienemission2018 / gesamtemission2018) * 100;
    var wachstumasienvon2008zu2018absolut = asienemission2018 - asienemission2008;
    var wachstumasienvon2008zu2018prozentual = ((wachstumasienvon2008zu2018absolut / asienemission2008) * 100);
    //Text ändern
    zeigeDatenAn(asienemission2018, anteilasien2018, wachstumasienvon2008zu2018prozentual, wachstumasienvon2008zu2018absolut, "Asia");
}
;
function Australien() {
    //2018
    var afrikaemission2018 = 1235.5;
    var südamerikaemission2018 = 1261.5;
    var europaemission2018 = 4209.3;
    var nordamerikaemission2018 = 6035.6;
    var asienemission2018 = 16274.1;
    var australienemission2018 = 2100.5;
    //2008
    var afrikaemission2008 = 1028;
    var südamerikaemission2008 = 1132.6;
    var europaemission2008 = 4965.7;
    var nordamerikaemission2008 = 6600.4;
    var asienemission2008 = 12954.7;
    var australienemission2008 = 1993;
    //Rechnung
    var gesamtemission2018 = afrikaemission2018 + europaemission2018 + südamerikaemission2018 + nordamerikaemission2018 + asienemission2018 + australienemission2018;
    var anteilaustralien2018 = (australienemission2018 / gesamtemission2018) * 100;
    var wachstumaustralienvon2008zu2018absolut = australienemission2018 - australienemission2008;
    var wachstumaustralienvon2008zu2018prozentual = ((wachstumaustralienvon2008zu2018absolut / australienemission2008) * 100);
    //Text ändern
    zeigeDatenAn(australienemission2018, anteilaustralien2018, wachstumaustralienvon2008zu2018prozentual, wachstumaustralienvon2008zu2018absolut, "Australia");
}
;
function zeigeDatenAn(emissionen, anteil2018, wachstumVon2008zu2018prozentual, wachstumVon2008zu2018absolut, name) {
    document.getElementById('chart').style.height = anteil2018 + "%";
    document.getElementById("GesamtemissionKontinent").innerHTML = String(Math.round(emissionen * 10) / 10);
    document.getElementById("AnteilWelt").innerHTML = String(Math.round(anteil2018 * 10) / 10) + "%";
    document.getElementById("WachstumProzentual").innerHTML = String(Math.round(wachstumVon2008zu2018prozentual * 10) / 10) + "%";
    document.getElementById("WachstumAbsolut").innerHTML = String(Math.round(wachstumVon2008zu2018absolut * 10) / 10);
    var kontinent = document.getElementsByClassName("kontinent");
    for (var i = 0; i < kontinent.length; i++) {
        kontinent[i].innerHTML = name;
    }
}
//# sourceMappingURL=scriptdateiaufgabe6.js.map