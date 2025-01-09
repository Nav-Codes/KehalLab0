const height = 5
const width = 10
const boxArr = []

//might need to make buttons unclickable while they are being shuffled

class Colour {
    constructor() {
        //generate random color
    }
}

class Number {
    constructor(num) {
        //do something useful with this (maybe create element in here?)
    }
}

class Box {

}

function generateBoxes() {
    let numBoxes = document.getElementById("numOfBoxes").value
    if (numBoxes > maxBoxes || numBoxes < minBoxes || numBoxes == null) {
        document.getElementById("invalidNumOfBoxes").innerHTML = invalidNumBoxesMsg
    } else {
        document.getElementById("memoryGame").innerHTML = ""
    }
}

function startGame() {
    document.getElementById("initialMessage").innerHTML = initialMsg
}
startGame()
