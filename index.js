let oudeWaardeSpeler1 = 1;
let oudeWaardeSpeler2 = 1;
let nieuweWaardeSpeler1 = 1;
let nieuweWaardeSpeler2 = 1;
let willekeurigGetal = 1;
let speler1Beurt = true;
let aantalWorpen = 0;
let selectieOudVakjeSpeler1 = document.querySelector("#n" + oudeWaardeSpeler1);
let selectieOudVakjeSpeler2 = document.querySelector("#n" + oudeWaardeSpeler2);
let selectieNieuwVakjeSpeler1 = document.querySelector("#n" + nieuweWaardeSpeler1);
let selectieNieuwVakjeSpeler2 = document.querySelector("#n" + nieuweWaardeSpeler2);
let winnaar = false;
let spelerNaam1 = "";
let spelerNaam2 = "";
let naamHuidigeSpeler = "";
let radArray = ["rad1", "rad2", "rad3", "rad4", "rad5", "rad6", "rad7", "rad8", "rad9", "rad10", "rad11", "rad12"];

const slang1 = document.getElementById("n27");
const slang2 = document.getElementById("n49");
const slang3 = document.getElementById("n60");
const slang4 = document.getElementById("n67");
const slang5 = document.getElementById("n80");
const slang6 = document.getElementById("n89");
const slang7 = document.getElementById("n96");
const slang8 = document.getElementById("n98");

const ladder1 = document.getElementById("n4");
const ladder2 = document.getElementById("n13");
const ladder3 = document.getElementById("n20");
const ladder4 = document.getElementById("n34");
const ladder5 = document.getElementById("n50");
const ladder6 = document.getElementById("n53");

const werpKnop = document.querySelector("#fotoKnop");
const enterNamesKnop = document.querySelector("#enterNamesKnop");
const naamVeld = document.querySelector("#naamVeld");
const winscherm1 = document.querySelector("#winveld1");
const winscherm2 = document.querySelector("#winveld2");
const gameInfo = document.querySelector("#gameInfo");
const timingPerStap = 0.25 * 1000;

function haalNamenOp() {
    spelerNaam1 = document.getElementById("inputNaam1").value;
    spelerNaam2 = document.getElementById("inputNaam2").value;

    if (spelerNaam1 == "") {
        spelerNaam1 = "Speler 1";
    };

    if (spelerNaam2 == "") {
        spelerNaam2 = "Speler 2";
    };
};

function naamFase() {
    haalNamenOp();
    naamVeld.textContent = spelerNaam1;
    werpKnop.classList.remove("hide");
    document.querySelector(".spelerNamen").classList.add("hide");
    document.querySelector("#gameInfo").classList.remove("hide");
};



function werp() {
    willekeurigGetal = Math.ceil(Math.random() * 12);
    aantalWorpen++;
};

function bepaalSpelerBeurt() {
    if (aantalWorpen % 2 == 0) {
        speler1Beurt = true;
        naamHuidigeSpeler = spelerNaam2;
    } else {
        speler1Beurt = false;
        naamHuidigeSpeler = spelerNaam1;
    };
};

function beurtInformatie(naam) {
    naamVeld.textContent = naam;
    if (speler1Beurt == true) {
        naamVeld.classList.add("naamveld2");
        naamVeld.classList.remove("naamveld1");
    } else {
        naamVeld.classList.add("naamveld1");
        naamVeld.classList.remove("naamveld2");
    };
};

function checkVoorWinnaar() {
    if (speler1Beurt == true) {
        if (nieuweWaardeSpeler1 + 1 >= 100 || oudeWaardeSpeler1 + willekeurigGetal >= 100) {
            winnaar = true;

        };
    } else {
        if (nieuweWaardeSpeler2 + 1 >= 100 || oudeWaardeSpeler2 + willekeurigGetal >= 100) {
            winnaar = true;


        };
    };
};

function nieuweWaarde1() {
    oudeWaardeSpeler1 = nieuweWaardeSpeler1;
    nieuweWaardeSpeler1 = oudeWaardeSpeler1 + 1;
    checkVoorWinnaar();
};

function nieuweWaarde2() {
    oudeWaardeSpeler2 = nieuweWaardeSpeler2;
    nieuweWaardeSpeler2 = oudeWaardeSpeler2 + 1;
    checkVoorWinnaar();
};



function updateSpelerPostitie() {
    selectieNieuwVakjeSpeler1 = document.querySelector("#n" + nieuweWaardeSpeler1);
    selectieOudVakjeSpeler1 = document.querySelector("#n" + oudeWaardeSpeler1);
    selectieNieuwVakjeSpeler2 = document.querySelector("#n" + nieuweWaardeSpeler2);
    selectieOudVakjeSpeler2 = document.querySelector("#n" + oudeWaardeSpeler2);

    selectieOudVakjeSpeler1.classList.remove("blauw_actief");
    selectieNieuwVakjeSpeler1.classList.add("blauw_actief");
    selectieOudVakjeSpeler2.classList.remove("rood_actief");
    selectieNieuwVakjeSpeler2.classList.add("rood_actief");
};

function checkDubbeleSpelerPositie() {

    if (nieuweWaardeSpeler1 == nieuweWaardeSpeler2) {
        selectieNieuwVakjeSpeler1.classList.remove("blauw_actief");
        selectieNieuwVakjeSpeler2.classList.remove("rood_actief");
        selectieNieuwVakjeSpeler1.classList.add("both");
    } else {
        selectieNieuwVakjeSpeler1.classList.remove("both");
        selectieOudVakjeSpeler1.classList.remove("both");
        selectieNieuwVakjeSpeler2.classList.remove("both");
        selectieOudVakjeSpeler2.classList.remove("both");
    };
};

function verplaats1Vakje1() {
    nieuweWaarde1();
    updateSpelerPostitie();
    checkDubbeleSpelerPositie();
};

function verplaats1Vakje2() {
    nieuweWaarde2();
    updateSpelerPostitie();
    checkDubbeleSpelerPositie();
};

function verplaatsSpelerPerVakje1() {
    for (let aantalVakjes = willekeurigGetal, i = 1; aantalVakjes > 0; aantalVakjes--, i++) {
        if (winnaar === true) { break };
        setTimeout(verplaats1Vakje1, i * timingPerStap);
    };
};

function verplaatsSpelerPerVakje2() {
    for (let aantalVakjes = willekeurigGetal, i = 1; aantalVakjes > 0; aantalVakjes--, i++) {
        if (winnaar === true) { break };
        setTimeout(verplaats1Vakje2, i * timingPerStap);
    };
};

function voegNummerAanSpelerToe() {
    if (speler1Beurt == true) {
        verplaatsSpelerPerVakje1();
    } else {
        verplaatsSpelerPerVakje2();
    };
};

function checkVoorSlangen1() {
    if (selectieNieuwVakjeSpeler1 == slang1) {
        nieuweWaardeSpeler1 = 5;
        oudeWaardeSpeler1 = 27;

    } else if (selectieNieuwVakjeSpeler1 == slang2) {
        nieuweWaardeSpeler1 = 10;
        oudeWaardeSpeler1 = 49;

    } else if (selectieNieuwVakjeSpeler1 == slang3) {
        nieuweWaardeSpeler1 = 39;
        oudeWaardeSpeler1 = 60;

    } else if (selectieNieuwVakjeSpeler1 == slang4) {
        nieuweWaardeSpeler1 = 35;
        oudeWaardeSpeler1 = 67;

    } else if (selectieNieuwVakjeSpeler1 == slang5) {
        nieuweWaardeSpeler1 = 45;
        oudeWaardeSpeler1 = 80;

    } else if (selectieNieuwVakjeSpeler1 == slang6) {
        nieuweWaardeSpeler1 = 24;
        oudeWaardeSpeler1 = 89;

    } else if (selectieNieuwVakjeSpeler1 == slang7) {
        nieuweWaardeSpeler1 = 65;
        oudeWaardeSpeler1 = 96;

    } else if (selectieNieuwVakjeSpeler1 == slang8) {
        nieuweWaardeSpeler1 = 2;
        oudeWaardeSpeler1 = 98;

    };
};

function checkVoorSlangen2() {
    if (selectieNieuwVakjeSpeler2 == slang1) {
        nieuweWaardeSpeler2 = 5;
        oudeWaardeSpeler2 = 27;

    } else if (selectieNieuwVakjeSpeler2 == slang2) {
        nieuweWaardeSpeler2 = 10;
        oudeWaardeSpeler2 = 49;

    } else if (selectieNieuwVakjeSpeler2 == slang3) {
        nieuweWaardeSpeler2 = 39;
        oudeWaardeSpeler2 = 60;

    } else if (selectieNieuwVakjeSpeler2 == slang4) {
        nieuweWaardeSpeler2 = 35;
        oudeWaardeSpeler2 = 67;

    } else if (selectieNieuwVakjeSpeler2 == slang5) {
        nieuweWaardeSpeler2 = 45;
        oudeWaardeSpeler2 = 80;

    } else if (selectieNieuwVakjeSpeler2 == slang6) {
        nieuweWaardeSpeler2 = 24;
        oudeWaardeSpeler2 = 89;

    } else if (selectieNieuwVakjeSpeler2 == slang7) {
        nieuweWaardeSpeler2 = 65;
        oudeWaardeSpeler2 = 96;

    } else if (selectieNieuwVakjeSpeler2 == slang8) {
        nieuweWaardeSpeler2 = 2;
        oudeWaardeSpeler2 = 98;

    };
};

function checkVoorSlangen() {
    if (speler1Beurt == true) {
        checkVoorSlangen1();
    } else {
        checkVoorSlangen2();
    };
};

function checkVoorLadders1() {
    if (selectieNieuwVakjeSpeler1 == ladder1) {
        nieuweWaardeSpeler1 = 25;
        oudeWaardeSpeler1 = 4;

    } else if (selectieNieuwVakjeSpeler1 == ladder2) {
        nieuweWaardeSpeler1 = 33;
        oudeWaardeSpeler1 = 13;

    } else if (selectieNieuwVakjeSpeler1 == ladder3) {
        nieuweWaardeSpeler1 = 38;
        oudeWaardeSpeler1 = 20;

    } else if (selectieNieuwVakjeSpeler1 == ladder4) {
        nieuweWaardeSpeler1 = 84;
        oudeWaardeSpeler1 = 34;

    } else if (selectieNieuwVakjeSpeler1 == ladder5) {
        nieuweWaardeSpeler1 = 51;
        oudeWaardeSpeler1 = 50;

    } else if (selectieNieuwVakjeSpeler1 == ladder6) {
        nieuweWaardeSpeler1 = 72;
        oudeWaardeSpeler1 = 53;

    };
};

function checkVoorLadders2() {
    if (selectieNieuwVakjeSpeler2 == ladder1) {
        nieuweWaardeSpeler2 = 25;
        oudeWaardeSpeler2 = 4;

    } else if (selectieNieuwVakjeSpeler2 == ladder2) {
        nieuweWaardeSpeler2 = 33;
        oudeWaardeSpeler2 = 13;

    } else if (selectieNieuwVakjeSpeler2 == ladder3) {
        nieuweWaardeSpeler2 = 38;
        oudeWaardeSpeler2 = 20;

    } else if (selectieNieuwVakjeSpeler2 == ladder4) {
        nieuweWaardeSpeler2 = 84;
        oudeWaardeSpeler2 = 34;

    } else if (selectieNieuwVakjeSpeler2 == ladder5) {
        nieuweWaardeSpeler2 = 51;
        oudeWaardeSpeler2 = 50;

    } else if (selectieNieuwVakjeSpeler2 == ladder6) {
        nieuweWaardeSpeler2 = 72;
        oudeWaardeSpeler2 = 53;

    };
};

function checkVoorLadders() {
    if (speler1Beurt == true) {
        checkVoorLadders1();
    } else {
        checkVoorLadders2();
    };
};




function verplaatsing() {
    checkVoorWinnaar();
    voegNummerAanSpelerToe();
    setTimeout(checkVoorSlangen, timingPerStap * (willekeurigGetal + 1));
    setTimeout(checkVoorLadders, timingPerStap * (willekeurigGetal + 1));
    setTimeout(updateSpelerPostitie, timingPerStap * (willekeurigGetal + 1));
    setTimeout(checkDubbeleSpelerPositie, timingPerStap * (willekeurigGetal + 1));
    setTimeout(logInfo, timingPerStap * (willekeurigGetal + 1));
};

function radIMG() {
    werpKnop.src = "images/" + radArray[willekeurigGetal - 1] + ".jpg";
};


function RadAnimatie() {
    werp()
    werpKnop.src = "images/" + radArray[willekeurigGetal - 1] + ".gif";
    setTimeout(radIMG, 13000);
};

function clickFunctionList() {

    bepaalSpelerBeurt();
    RadAnimatie();
    setTimeout(verplaatsing, 13000);
    setTimeout(function () {
        beurtInformatie(naamHuidigeSpeler);
    }, 13000);
};

werpKnop.addEventListener("click", clickFunctionList);
enterNamesKnop.addEventListener("click", naamFase);