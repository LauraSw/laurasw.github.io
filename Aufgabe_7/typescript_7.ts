//Bewirkt, dass Typescript erst geladen wird, wenn DOM komplett aufgebaut ist
window.addEventListener("load", function(){

    //Array Declaration
    var sounds = ["./assets/kick.mp3","./assets/snare.mp3","./assets/hihat.mp3", "./assets/F.mp3","./assets/G.mp3","./assets/A.mp3","./assets/C.mp3","./assets/laugh-1.mp3","./assets/laugh-2.mp3"];

    document.querySelector("#button1").addEventListener("click", function(){
        playSample(sounds[0]);
    },false);

    document.querySelector("#button2").addEventListener("click", function(){
        playSample(sounds[1]);
    },false);

    document.querySelector("#button3").addEventListener("click", function(){
        playSample(sounds[2]);
    },false);

    document.querySelector("#button4").addEventListener("click", function(){
        playSample(sounds[3]);
    },false);

    document.querySelector("#button5").addEventListener("click", function(){
        playSample(sounds[4]);
    },false);

    document.querySelector("#button6").addEventListener("click", function(){
        playSample(sounds[5]);
    },false);

    document.querySelector("#button7").addEventListener("click", function(){
        playSample(sounds[6]);
    },false);

    document.querySelector("#button8").addEventListener("click", function(){
        playSample(sounds[7]);
    },false);

    document.querySelector("#button9").addEventListener("click", function(){
        playSample(sounds[8]);
    },false);

//zentrale Funktion, die das Abspielen bewirkt
    function playSample(audioFile){
        var sound:HTMLAudioElement = new Audio(audioFile);
        sound.play(); 
    };
    
    document.querySelector("#playButton").addEventListener("click", function(){
        setInterval(function(){                                    
            //Arrayname.lenght = Anzahl Elemente im Array
            var randomNumber:number = Math.floor(Math.random()*((sounds.length-1)-0+1)+0);
            playSample(sounds[randomNumber]);
        }, 500);
    });

},false);