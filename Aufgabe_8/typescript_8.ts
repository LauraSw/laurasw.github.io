//Bewirkt, dass Typescript erst geladen wird, wenn DOM komplett aufgebaut ist
window.addEventListener("load", function (): void {
    var recOn: boolean = false;
    var isPlayed: boolean = false;
    var sound: HTMLAudioElement = new Audio();

    //Array Declaration
    var sounds: string[] = ["./assets/snare.mp3", "./assets/snare.mp3", "./assets/kick.mp3", "./assets/hihat.mp3"];

    document.querySelector("#button1").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/kick.mp3");
        }
        playSample("./assets/kick.mp3");
    });

    document.querySelector("#button2").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/snare.mp3");
        }
        playSample("./assets/snare.mp3");
    });

    document.querySelector("#button3").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/hihat.mp3");
        }
        playSample("./assets/hihat.mp3");
    });

    document.querySelector("#button4").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/F.mp3");
        }
        playSample("./assets/F.mp3");
    });

    document.querySelector("#button5").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/G.mp3");
        }
        playSample("./assets/G.mp3");
    });

    document.querySelector("#button6").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/A.mp3");
        }
        playSample("./assets/A.mp3");
    });

    document.querySelector("#button7").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/C.mp3");
        }
        playSample("./assets/C.mp3");
    });

    document.querySelector("#button8").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/laugh-1.mp3");
        }
        playSample("./assets/laugh-1.mp3");
    });

    document.querySelector("#button9").addEventListener("click", function (): void {
        if (recOn == true) {
            sounds.push("./assets/laugh-2.mp3");
        }
        playSample("./assets/laugh-2.mp3");
    });

    //zentrale Funktion, die das Abspielen bewirkt
    function playSample(audioFile) {
        sound = new Audio(audioFile);
        sound.play();
    }

    document.querySelector("#playButton").addEventListener("click", function (): void {
        var i: number = 0;
        isPlayed = !isPlayed;
        recOn = false;
        document.querySelector("#playButton").classList.toggle("toggleIcon");
        var interval = setInterval(function (): void {
            if (i < sounds.length && isPlayed == true) {
                playSample(sounds[i]);
                i++;
            } else if (i == sounds.length) {
                i = 0;
            } else if (isPlayed == false) {
                i = 0;
                clearInterval(interval);
            }
        }, 400);
    });

    function addToArray(audiofile) {
        sounds.push(audiofile);
    }

    document.querySelector("#recordButton").addEventListener("click", rec, false);
    function rec() {
        if (recOn === false) {
            del();
        }
        recOn = !recOn;
        console.log(recOn);
    };


    document.querySelector("#deleteButton").addEventListener("click", del, false);
    function del() {
        for (var i: number = 0; i < sounds.length; i++) {
            sounds = [];
        }
    };
});
