var player = "X"

var cell1 = document.getElementById("1");
var cell2 = document.getElementById("2");
var cell3 = document.getElementById("3");
var cell4 = document.getElementById("4");
var cell5 = document.getElementById("5");
var cell6 = document.getElementById("6");
var cell7 = document.getElementById("7");
var cell8 = document.getElementById("8");
var cell9 = document.getElementById("9");

var gameStatus = true;

var isClicked1 = false;
var isClicked2 = false;
var isClicked3 = false;
var isClicked4 = false;
var isClicked5 = false;
var isClicked6 = false;
var isClicked7 = false;
var isClicked8 = false;
var isClicked9 = false;

if (gameStatus === true) {
    cell1.addEventListener("click", checkWin);
    cell2.addEventListener("click", checkWin);
    cell3.addEventListener("click", checkWin);
    cell4.addEventListener("click", checkWin);
    cell5.addEventListener("click", checkWin);
    cell6.addEventListener("click", checkWin);
    cell7.addEventListener("click", checkWin);
    cell8.addEventListener("click", checkWin);
    cell9.addEventListener("click", checkWin);
    if (gameStatus === true) {
        cell1.addEventListener("click", playerClick1);
        cell2.addEventListener("click", playerClick2);
        cell3.addEventListener("click", playerClick3);
        cell4.addEventListener("click", playerClick4);
        cell5.addEventListener("click", playerClick5);
        cell6.addEventListener("click", playerClick6);
        cell7.addEventListener("click", playerClick7);
        cell8.addEventListener("click", playerClick8);
        cell9.addEventListener("click", playerClick9);
    }
}

function checkWin() {
    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Row
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // diagonal
    ];
    if (gameStatus == true) {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            const cellA = document.getElementById(a.toString()).innerText;
            const cellB = document.getElementById(b.toString()).innerText;
            const cellC = document.getElementById(c.toString()).innerText;
    
            if (cellA !== "" && cellA === cellB && cellB === cellC) {
                if (player == "X") {
                    player = "O";
                } else if (player == "O") {
                    player = "X";
                }
                document.getElementById("cMessage").innerText = `${player} wins!`;
                gameStatus = false;
                break;
            }
        }
    
        if (gameStatus == true && allFilled(true)) {
            document.getElementById("cMessage").innerText = "It's a tie!";
            gameStatus = false;
        }
    } 
}

//inputs (onclick)

function playerClick1() {
    if (isClicked1 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("1").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell1.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked1 = true;
    }
}
function playerClick2() {
    if (isClicked2 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("2").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell2.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked2 = true;
    }
}
function playerClick3() {
    if (isClicked3 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("3").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell3.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked3 = true;
    }
}
function playerClick4() {
    if (isClicked4 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("4").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell4.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked4 = true;
    }
}
function playerClick5() {
    if (isClicked5 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("5").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell5.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked5 = true;
    }
}
function playerClick6() {
    if (isClicked6 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("6").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell6.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked6 = true;
    }
}
function playerClick7() {
    if (isClicked7 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("7").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell7.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked7 = true;
    }
}
function playerClick8() {
    if (isClicked8 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("8").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell8.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked8 = true;
    }
}
function playerClick9() {
    if (isClicked9 == false && gameStatus == true) {
        if (player == "X") {
            document.getElementById("9").innerText = "X";
            document.getElementById("cMessage").innerText = "O's turn";
            player = "O";
        } else if (player == "O") {
            cell9.innerHTML = "O";
            document.getElementById("cMessage").innerText = "X's turn";
            player = "X";
        }
        isClicked9 = true;
    }
}



function gameReset() {
    gameStatus = true;
    cell1.innerText = "";
    cell2.innerText = "";
    cell3.innerText = "";
    cell4.innerText = "";
    cell5.innerText = "";
    cell6.innerText = "";
    cell7.innerText = "";
    cell8.innerText = "";
    cell9.innerText = "";
    document.getElementById("cMessage").innerText = "X's turn";
    isClicked1 = false;
    isClicked2 = false;
    isClicked3 = false;
    isClicked4 = false;
    isClicked5 = false;
    isClicked6 = false;
    isClicked7 = false;
    isClicked8 = false;
    isClicked9 = false;
}

document.getElementById("restart").addEventListener("click", gameReset);


const allBoxes = document.querySelectorAll('.box');

function allFilled() {
    for (let box of allBoxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    return true;
}