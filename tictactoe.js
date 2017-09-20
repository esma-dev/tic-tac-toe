const cellOne = document.getElementById("1");
const cellTwo = document.getElementById("2");
const cellThree = document.getElementById("3");
const cellFour = document.getElementById("4");
const cellFive = document.getElementById("5");
const cellSix = document.getElementById("6");
const cellSeven = document.getElementById("7");
const cellEight = document.getElementById("8");
const cellNine = document.getElementById("9");


let currPlayer = document.querySelector("#playerOne").textContent;

const alternatePlayers = () => {
	if (currPlayer === "playerOne") {
		// console.log("hello");
		return currPlayer = document.querySelector("#playerTwo").textContent;
	} else if (currPlayer === "playerTwo") {
		return currPlayer = document.querySelector("#playerOne").textContent;
	}
};


cellOne.addEventListener("click", () => {
	cellOne.textContent = "X";
	alternatePlayers();
	console.log(currPlayer);
});


cellTwo.addEventListener("click", () => {
	cellTwo.textContent = "O";
	alternatePlayers();
	console.log(currPlayer);
});
//create a big if statement 