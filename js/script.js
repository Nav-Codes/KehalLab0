// const height = 5
// const width = 10

//might need to make buttons unclickable while they are being shuffled
//put things inside boxArr and check number inside the div to see if it is +1 of the previous one clicked (prev and curr?) 

// class Color {
//     constructor() {
//         //generate random color
//     }
    
//     generateRandomColor() {

//     }

//     getColorElement() {

//     }
// }

// class Number {
//     constructor(num) {
//         //do something useful with this (maybe create element in here?)
//     }

//     getNumberElement() {

//     }
// }

// function generateBoxes() {
//     let numBoxes = document.getElementById("numOfBoxes").value
//     if (numBoxes > maxBoxes || numBoxes < minBoxes || numBoxes == null) {
//         document.getElementById("invalidNumOfBoxes").innerHTML = invalidNumBoxesMsg
//     } else {
//         document.getElementById("memoryGame").innerHTML = ""
//         for (let i = 1; i <= numBoxes; i++) {
//             boxArr.push(new Box(i))
//         }
//     }
// }

// function startGame() {
//     while(boxArr.pop() != undefined) {
//         boxArr.pop()
//     }
//     document.getElementById("initialMessage").innerHTML = initialMsg
// }
// startGame()

// Box class idea given by ChatGPT
class Box {
    #boxElement = document.createElement("button")
    // #id = 0
    constructor(num) {
        //create a box div here
        // this.#id = num
        this.#boxElement.classList.add("box")
        this.#boxElement.style.backgroundColor = this.getRandomColor()
        this.#boxElement.innerHTML = num
    }

    getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    getBoxElement() {
        return this.#boxElement
    }
}

// BoxManager class idea given by ChatGPT
class BoxManager {
    #boxArr = []

    checkNumOfBoxes() {
        let numBoxes = document.getElementById("numOfBoxes").value
        if (numBoxes > maxBoxes || numBoxes < minBoxes || numBoxes == null) {
            document.getElementById("invalidNumOfBoxes").innerHTML = invalidNumBoxesMsg
        } else {
            document.getElementById("memoryGame").innerHTML = ""
            this.generateBoxes(numBoxes)
        }
    }

    generateBoxes(numBoxes) {
        let gameArea = document.createElement("div")
        gameArea.id = "gameArea"
        document.getElementById("memoryGame").insertAdjacentElement("beforeend", gameArea)
        for (let i = 1; i <= numBoxes; i++) {
            this.#boxArr.push(new Box(i))
            document.getElementById("gameArea").insertAdjacentElement("beforeend", this.#boxArr.at(i-1).getBoxElement())
        }
        //we have generated the boxes. now we need to dislpay them on the screen
    }

    shuffleBoxes() {

    }
}

// MemoryGame class idea given by ChatGPT
class MemoryGame {
    #boxManager = new BoxManager()
    // #boxArr = []
    startGame() {
        document.getElementById("initialMessage").innerHTML = initialMsg
        document.getElementById("goButton").addEventListener("click", () => {
            this.#boxManager.checkNumOfBoxes()
        })
    }

}

const memoryGame = new MemoryGame()
memoryGame.startGame()