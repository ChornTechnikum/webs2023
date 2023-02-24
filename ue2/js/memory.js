// PLAYER NAME
document.getElementById("playername").innerHTML = "Spieler:" + prompt("Bitte gib deinen Namen ein");

// TIMER
let intervalID = setInterval(timer,1000);
var seconds = 0;
function timer() {
    seconds++;
    document.getElementById("time").innerHTML = "Zeit: " + seconds; 
}

// ARRAY AND SHUFFLE
const cardnumArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
for(var x = 0; x <= 20; x++){ 
    var pos1 = Math.floor(Math.random() * 16);
    var pos2 = Math.floor(Math.random() * 16);
    var tempnum = cardnumArray[pos1];
    cardnumArray[pos1] = cardnumArray[pos2];
    cardnumArray[pos2] = tempnum;
}

// PRINT ALL CARDS
var br = 1;
for(var x = 0; x <= 15; x++){ 
    var newDiv = document.createElement("img");
    var cardnum = cardnumArray[x];
    newDiv.setAttribute("src","pics/memoryBg.png");
    newDiv.setAttribute("id",cardnum);
    newDiv.setAttribute("onClick","clicked(this.id)");

    document.getElementById("spielbereich").appendChild(newDiv);
    if(br++ % 4 == 0){
        var newBr = document.createElement("br");
        document.getElementById("spielbereich").appendChild(newBr);
    }
}

// GAME 
let lastid = 0;
let openedCards = 0;
function clicked(id){
    openCard(id);
    openedCards = openedCards + 1;
    if(openedCards == 2){
        check(id);
        openedCards = 0;
        updateMoves()
    }
    lastid = id;
}

function check(id){
    if(parseInt(id) + parseInt(lastid) == 17){
        setTimeout(setEmpty, 1000, id, lastid);
        pairsFound = pairsFound + 1;
        checkVictory()
    }else{
        setTimeout(closeCards, 1000, id, lastid);
    }
}
function openCard(id){
    var scr = "pics/card" + id + ".png";
    document.getElementById(id).setAttribute("src", scr);
}
function closeCards(id, P_lastid){
    document.getElementById(id).setAttribute("src", "pics/memoryBg.png");
    document.getElementById(P_lastid).setAttribute("src", "pics/memoryBg.png");
}
function setEmpty(id, P_lastid){
    document.getElementById(id).setAttribute("src", "pics/memoryBgI.png");
    document.getElementById(P_lastid).setAttribute("src", "pics/memoryBgI.png");
    document.getElementById(id).setAttribute("onclick", " ");
    document.getElementById(P_lastid).setAttribute("onclick", " ");
}
let pairsFound = 0;
function checkVictory(){
    if(pairsFound == 8){
        clearInterval(intervalID);
        document.getElementById("victoryscreen").innerHTML = "GEWONNEN";
    }
}

let moveCount = 0;
function updateMoves(){
    moveCount = moveCount + 1;
    document.getElementById("moveCount").innerHTML = "Versuche: " + moveCount;
}