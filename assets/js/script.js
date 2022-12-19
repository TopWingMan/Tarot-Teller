// Created by:
// Helen Evans - https://github.com/HelenLEvans
// Zachary Stanaford - https://github.com/TopWingMan
// AP - https://github.com/aashpaash-
// Steven Nunez - https://github.com/SteveeZee03
// Chris Ridder - https://github.com/cridder

// Variables
var history = ["", "", "", "", "", ""];
const tarotData = (src = "./assets/json/tarot-images.json");

// if history is not defined get the history
if (localStorage.getItem("history") != undefined) {
	history[0] = localStorage.getItem("history");
}

//Check if 24 hrs has passed since last reading
if (dayjs().day() > localStorage.getItem("dateOfLastReading")) {
	//push every value in history up one
	for (i = 1; i < 5; i++) {
		history[i] = history[i - 1];
	}
	//make today's reading = nothing;
	history[0] = undefined;
}

//Hide button if user has already had their daily fortune read and display previous fortune instead
if (history[0] != undefined) {
	//Hide button
	document.getElementById("button").style.display = "none";

	fetch(tarotData)
		.then((response) => response.json())
		.then((data) => {
			//Display card name
			DisplayCardName(data.cards[history[0]].name);

			//Display card img
			DisplayCard(data.cards[history[0]].img);

			//Display card fortune description
			DisplayCardDescription(data.cards[history[0]].fortune_telling[0]);

			//Tell user we have already read their fortune today and to come back tommorow
			DisplaycomeBackTommorow();
		});
} else {
	//pick a random number from 0 to 78
	var chosenCardNumber = Math.floor(Math.random() * (78 - 0));

	//Button function, when read tarot button click it does what?
	document.getElementById("button").addEventListener("click", function () {
		//Hide Button On press
		document.getElementById("button").style.display = "none";

		//Get card information
		fetch(tarotData)
			.then((response) => response.json())
			.then((data) => {
				//Display card name
				DisplayCardName(data.cards[chosenCardNumber].name);

				//Display card img
				DisplayCard(data.cards[chosenCardNumber].img);

				//Display card fortune description
				DisplayCardDescription(data.cards[chosenCardNumber].fortune_telling[0]);

				//Store card data as persistent data
				StoreData(chosenCardNumber);
			});
	});
}

// function to display html element
function DisplayCardName(cardName) {
	document.getElementById("cardName").innerHTML = cardName;
	document.getElementById("cardName").setAttribute("style", "padding: 0.2rem;color: white;font-size: 2.6rem;-webkit-text-stroke: 0.385px;-webkit-text-stroke-color: black;border: none solid;border-radius: 2.56rem;background: linear-gradient(to bottom,rgba(128, 152, 200, 0.99),rgba(136, 160, 195, 0.98));display: flex; justify-content: center; align-items: center; max-width: 28rem; margin: 0 auto; margin-top: 1.5rem; margin-bottom: 1.2rem; box-shadow: 0 1rem 3.4rem 0 black;")
}

// function to display html element
function DisplayCard(imgID) {
	var img = document.createElement("img");
	img.src = "./assets/json/cards/" + imgID;
	var src = document.getElementById("cardPlace");
	src.appendChild(img);
}

// function to display html element
function DisplayCardDescription(cardDescription) {
	document.getElementById("cardDescription").innerHTML = cardDescription;
	document.getElementById("cardDescription").setAttribute("style","ptext-align: center; font-size: x-large; color: white; border: none solid; border-radius: 2.56rem; background: linear-gradient(to bottom, rgba(136, 160, 195, 0.99),rgba(128, 152, 200, 0.98));display: flex; text-align: center;justify-content: center; align-items: center; max-width: 45rem; margin: 0 auto; margin-top: 1rem; padding: 1rem; box-shadow: 0 1rem 7rem 0 black;");
}

// function to display html element
function DisplaycomeBackTommorow() {
	document.getElementById("comeBackTommorow").innerHTML =
		"You have already received todays reading! Please visit again after 24 hours!";
	document.getElementById("comeBackTommorow").setAttribute("style","text-align: center; font-size: x-large; color: white; border: none solid; border-radius: 1rem; background: linear-gradient(to top, rgba(115, 138, 185, 0.99),rgba(115, 138, 185, 0.99));display: flex; text-align: center;justify-content: center; align-items: center; max-width: 58rem; margin: 0 auto; margin-top: 2rem; padding: 1rem; box-shadow: 0 1rem 7rem 0 black;");
}

// function to store data
function StoreData(StoreData) {
	history[0] = StoreData;
	localStorage.setItem("dateOfLastReading", dayjs().day());
	localStorage.setItem("history", history[0]);
}

returnTommorowEl = document.createElement("div")
