window.addEventListener("load",function(){
    document.getElementById("africa").addEventListener(`click`, Afrika, false);
    document.getElementById("europe").addEventListener(`click`, Europa, false);
    document.getElementById("southamerica").addEventListener(`click`, Südamerika, false);
    document.getElementById("northamerica").addEventListener(`click`, Nordamerika, false);
    document.getElementById("asia").addEventListener(`click`, Asien, false);
    document.getElementById("australia").addEventListener(`click`, Australien, false);
},false);

function Afrika() {
    //2018
    var afrikaemission2018:number = 1235.5;
    var südamerikaemission2018:number = 1261.5;
    var europaemission2018:number = 4209.3;
    var nordamerikaemission2018:number = 6035.6;
    var asienemission2018:number = 16274.1;
    var australienemission2018:number = 2100.5;

    //2008
    var afrikaemission2008:number = 1028;
    var südamerikaemission2008:number = 1132.6;
    var europaemission2008:number = 4965.7;
    var nordamerikaemission2008:number = 6600.4;
    var asienemission2008:number = 12954.7;
    var australienemission2008:number = 1993;

    //Rechnung
    var gesamtemission2018:number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;
    var anteilafrika2018:number = (afrikaemission2018/gesamtemission2018)*100;
    var wachstumafrikavon2008zu2018absolut:number = afrikaemission2018-afrikaemission2008;
    var wachstumafrikavon2008zu2018prozentual:number = ((wachstumafrikavon2008zu2018absolut/afrikaemission2008)*100);
    
    //Text ändern
    zeigeDatenAn(afrikaemission2018, anteilafrika2018, wachstumafrikavon2008zu2018prozentual, wachstumafrikavon2008zu2018absolut, "Africa");  
};

function Europa() {
    //2018
    var afrikaemission2018:number = 1235.5;
    var südamerikaemission2018:number = 1261.5;
    var europaemission2018:number = 4209.3;
    var nordamerikaemission2018:number = 6035.6;
    var asienemission2018:number = 16274.1;
    var australienemission2018:number = 2100.5;

    //2008
    var afrikaemission2008:number = 1028;
    var südamerikaemission2008:number = 1132.6;
    var europaemission2008:number = 4965.7;
    var nordamerikaemission2008:number = 6600.4;
    var asienemission2008:number = 12954.7;
    var australienemission2008:number = 1993;

    //Rechnung
    var gesamtemission2018:number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;
    var anteileuropa2018:number = (europaemission2018/gesamtemission2018)*100;
    var wachstumeuropavon2008zu2018absolut:number = europaemission2018-europaemission2008;
    var wachstumeuropavon2008zu2018prozentual:number = ((wachstumeuropavon2008zu2018absolut/europaemission2008)*100);
    
    //Text ändern
    zeigeDatenAn(europaemission2018, anteileuropa2018, wachstumeuropavon2008zu2018prozentual, wachstumeuropavon2008zu2018absolut, "Europe");  
};

function Südamerika() {
    //2018
    var afrikaemission2018:number = 1235.5;
    var südamerikaemission2018:number = 1261.5;
    var europaemission2018:number = 4209.3;
    var nordamerikaemission2018:number = 6035.6;
    var asienemission2018:number = 16274.1;
    var australienemission2018:number = 2100.5;

    //2008
    var afrikaemission2008:number = 1028;
    var südamerikaemission2008:number = 1132.6;
    var europaemission2008:number = 4965.7;
    var nordamerikaemission2008:number = 6600.4;
    var asienemission2008:number = 12954.7;
    var australienemission2008:number = 1993;

    //Rechnung
    var gesamtemission2018:number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;
    var anteilsüdamerika2018:number = (südamerikaemission2018/gesamtemission2018)*100;
    var wachstumsüdamerikavon2008zu2018absolut:number = südamerikaemission2018-südamerikaemission2008;
    var wachstumsüdamerikavon2008zu2018prozentual:number = ((wachstumsüdamerikavon2008zu2018absolut/südamerikaemission2008)*100);
    
    //Text ändern
    zeigeDatenAn(südamerikaemission2018, anteilsüdamerika2018, wachstumsüdamerikavon2008zu2018prozentual, wachstumsüdamerikavon2008zu2018absolut, "Southamerica");  
};

function Nordamerika() {
    //2018
    var afrikaemission2018:number = 1235.5;
    var südamerikaemission2018:number = 1261.5;
    var europaemission2018:number = 4209.3;
    var nordamerikaemission2018:number = 6035.6;
    var asienemission2018:number = 16274.1;
    var australienemission2018:number = 2100.5;

    //2008
    var afrikaemission2008:number = 1028;
    var südamerikaemission2008:number = 1132.6;
    var europaemission2008:number = 4965.7;
    var nordamerikaemission2008:number = 6600.4;
    var asienemission2008:number = 12954.7;
    var australienemission2008:number = 1993;

    //Rechnung
    var gesamtemission2018:number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;
    var anteilnordamerika2018:number = (nordamerikaemission2018/gesamtemission2018)*100;
    var wachstumnordamerikavon2008zu2018absolut:number = nordamerikaemission2018-nordamerikaemission2008;
    var wachstumnordamerikavon2008zu2018prozentual:number = ((wachstumnordamerikavon2008zu2018absolut/nordamerikaemission2008)*100);
    
    //Text ändern
    zeigeDatenAn(nordamerikaemission2018, anteilnordamerika2018, wachstumnordamerikavon2008zu2018prozentual, wachstumnordamerikavon2008zu2018absolut, "Northamerica");  
};

function Asien() {
    //2018
    var afrikaemission2018:number = 1235.5;
    var südamerikaemission2018:number = 1261.5;
    var europaemission2018:number = 4209.3;
    var nordamerikaemission2018:number = 6035.6;
    var asienemission2018:number = 16274.1;
    var australienemission2018:number = 2100.5;

    //2008
    var afrikaemission2008:number = 1028;
    var südamerikaemission2008:number = 1132.6;
    var europaemission2008:number = 4965.7;
    var nordamerikaemission2008:number = 6600.4;
    var asienemission2008:number = 12954.7;
    var australienemission2008:number = 1993;

    //Rechnung
    var gesamtemission2018:number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;
    var anteilasien2018:number = (asienemission2018/gesamtemission2018)*100;
    var wachstumasienvon2008zu2018absolut:number = asienemission2018-asienemission2008;
    var wachstumasienvon2008zu2018prozentual:number = ((wachstumasienvon2008zu2018absolut/asienemission2008)*100);
    
    //Text ändern
    zeigeDatenAn(asienemission2018, anteilasien2018, wachstumasienvon2008zu2018prozentual, wachstumasienvon2008zu2018absolut, "Asia");  
};

function Australien() {
    //2018
    var afrikaemission2018:number = 1235.5;
    var südamerikaemission2018:number = 1261.5;
    var europaemission2018:number = 4209.3;
    var nordamerikaemission2018:number = 6035.6;
    var asienemission2018:number = 16274.1;
    var australienemission2018:number = 2100.5;

    //2008
    var afrikaemission2008:number = 1028;
    var südamerikaemission2008:number = 1132.6;
    var europaemission2008:number = 4965.7;
    var nordamerikaemission2008:number = 6600.4;
    var asienemission2008:number = 12954.7;
    var australienemission2008:number = 1993;

    //Rechnung
    var gesamtemission2018:number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;
    var anteilaustralien2018:number = (australienemission2018/gesamtemission2018)*100;
    var wachstumaustralienvon2008zu2018absolut:number = australienemission2018-australienemission2008;
    var wachstumaustralienvon2008zu2018prozentual:number = ((wachstumaustralienvon2008zu2018absolut/australienemission2008)*100);
    
    //Text ändern
    zeigeDatenAn(australienemission2018, anteilaustralien2018, wachstumaustralienvon2008zu2018prozentual, wachstumaustralienvon2008zu2018absolut, "Australia");  
};


function zeigeDatenAn(emissionen, anteil2018, wachstumVon2008zu2018prozentual, wachstumVon2008zu2018absolut, name){
    document.getElementById('chart').style.height = anteil2018 +"%";
    document.getElementById("GesamtemissionKontinent").innerHTML = String(Math.round(emissionen * 10)/10);
    document.getElementById("AnteilWelt").innerHTML = String(Math.round(anteil2018 * 10)/10) +"%";
    document.getElementById("WachstumProzentual").innerHTML = String(Math.round(wachstumVon2008zu2018prozentual * 10)/10) +"%";
    document.getElementById("WachstumAbsolut").innerHTML = String(Math.round(wachstumVon2008zu2018absolut * 10)/10);
    var kontinent = document.getElementsByClassName("kontinent"); 
    for(var i = 0; i<kontinent.length; i++){
        kontinent[i].innerHTML = name;
    }
}







