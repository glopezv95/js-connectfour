let nameWhite = "";
let nameBlack = "";
let colsArray = Array.from(document.querySelectorAll(".col"));
let container = document.querySelector(".container")
let color = "#fff";
let colorStr = "white";

while (nameWhite === "" || nameBlack === "") {
    if (nameWhite === "") {
        nameWhite = prompt("Player One please select a name. You'll be playing white.");
    } else {
        nameBlack = prompt("Player Two please select a name. You'll be playing black");
    }

    if (nameWhite === null || nameBlack === null) {
        document.body.removeChild(document.querySelector(".wrapper"));
        let newH1 = document.createElement("h1");
        newH1.textContent = "To play Connect Four please refresh the page and input player names";
        newH1.style.width = "60%";
        document.body.appendChild(newH1);
    }
}

document.querySelector(".player1").textContent = nameWhite;
document.querySelector(".player2").textContent = nameBlack;
document.querySelector(".color").textContent = colorStr;

colsArray.forEach(col => {
    col.addEventListener("click", function () {

        let cellsArray = Array.from(col.children);
        let blankCells = cellsArray.filter(cell => cell.style.backgroundColor === "");

        blankCells[blankCells.length - 1].style.backgroundColor = color;

        if (color === "#fff") {
            color = "#000";
            colorStr = "black";
            document.querySelector(".player1").textContent = nameBlack;
            document.querySelector(".player2").textContent = nameWhite;
            document.querySelector(".color").textContent = colorStr;
        } else {
            color = "#fff";
            colorStr = "white";
            document.querySelector(".player1").textContent = nameWhite;
            document.querySelector(".player2").textContent = nameBlack;
            document.querySelector(".color").textContent = colorStr;}
    })
})

function checkColor() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < container.children[i].children.length; j++) {
            if (
                container.children[i].children[j].style.backgroundColor === container.children[i+1].children[j].style.backgroundColor &&
                container.children[i].children[j].style.backgroundColor === container.children[i+2].children[j].style.backgroundColor &&
                container.children[i].children[j].style.backgroundColor === container.children[i+3].children[j].style.backgroundColor &&
                container.children[i].children[j].style.backgroundColor !== ""
            ) {return true}
        }
    }
}

container.addEventListener("click", function () {
    if (checkColor() === true) {
        if (colorStr === "white") {
            document.querySelector("h1").textContent = `Congratulations ${nameBlack}, you've won`}
        else {document.querySelector("h1").textContent = `Congratulations ${nameWhite}, you've won`}
        document.querySelector("h2").style.opacity = 0}
    }
)