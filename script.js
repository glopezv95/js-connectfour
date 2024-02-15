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

function checkHorizontal() {

    for (let div = 0; div < 4; div++) {
        for (let row = 0; row < 6; row++) {
            if (
                container.children[div].children[row].style.backgroundColor === container.children[div+1].children[row].style.backgroundColor &&
                container.children[div].children[row].style.backgroundColor === container.children[div+2].children[row].style.backgroundColor &&
                container.children[div].children[row].style.backgroundColor === container.children[div+3].children[row].style.backgroundColor &&
                container.children[div].children[row].style.backgroundColor !== ""
            ) {return true}
        }
    }
}

function checkVertical() {

    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (
                container.children[col].children[row].style.backgroundColor === container.children[col].children[row+1].style.backgroundColor &&
                container.children[col].children[row].style.backgroundColor === container.children[col].children[row+2].style.backgroundColor &&
                container.children[col].children[row].style.backgroundColor === container.children[col].children[row+3].style.backgroundColor &&
                container.children[col].children[row].style.backgroundColor !== ""
            ) {return true}
        }
    }
}

function checkDiagonal() {

    for (let cond = 0; cond < 4; cond++) {
        for (let j = 0; j < 6; j++) {
            if (
                j + 3 < 6 &&
                container.children[cond].children[j].style.backgroundColor === container.children[cond+1].children[j+1].style.backgroundColor &&
                container.children[cond].children[j].style.backgroundColor === container.children[cond+2].children[j+2].style.backgroundColor &&
                container.children[cond].children[j].style.backgroundColor === container.children[cond+3].children[j+3].style.backgroundColor &&
                container.children[cond].children[j].style.backgroundColor !== ""
            ) {return true}
            else if (
                j >= 3 &&
                container.children[cond].children[j].style.backgroundColor === container.children[cond+1].children[j-1].style.backgroundColor &&
                container.children[cond].children[j].style.backgroundColor === container.children[cond+2].children[j-2].style.backgroundColor &&
                container.children[cond].children[j].style.backgroundColor === container.children[cond+3].children[j-3].style.backgroundColor &&
                container.children[cond].children[j].style.backgroundColor !== ""
            ) {return true}
        }
    }
}

container.addEventListener("click", function () {
    if (checkHorizontal() || checkVertical() || checkDiagonal()) {
        if (colorStr === "white") {
            document.querySelector("h1").textContent = `Congratulations ${nameBlack}, you've won`
            nonBlackDivs = Array.from(document.querySelectorAll(".col div")).filter(element => {
                return element.style.backgroundColor !== "rgb(0, 0, 0)"
            })
        for (div of nonBlackDivs) {
            div.style.opacity = 0
        }}
        else {document.querySelector("h1").textContent = `Congratulations ${nameWhite}, you've won`
        nonWhiteDivs = Array.from(document.querySelectorAll(".col div")).filter(element => {
            return element.style.backgroundColor !== "rgb(255, 255, 255)"
        })
        for (div of nonWhiteDivs) {
            div.style.opacity = 0
    }}
        document.querySelector("h2").style.opacity = 0
    }
})