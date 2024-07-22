var isClicked = false;
function playerClick() {
    if (isClicked == false) {
        document.getElementById("1").innerHTML = "X"
        isClicked = true;
    }
}
document.getElementById("1").addEventListener("click", playerMove);
function playerMove() {
    playerClick();
}

document.getElementById("test").innerHTML = "Changed";
document.getElementById("test2").innerHTML = "Changed"