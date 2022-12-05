const history = ["currentDay", "-1", "-2", "-3", "-4", "-5"]; //Find a way to store this as persisitent data
const tarotData = (src="./assets/json/tarot-images.json");

//pick a random number from 0 to 78
var chosenCardNumber = (Math.floor(Math.random() * (78 - 0)));

// button function, when button click it does what?
document.getElementById("button").addEventListener("click", function()
{
    //Hide Button

    //Get card information
    fetch (tarotData)
    .then((response) => response.json())
    .then((data) =>
    {
        console.log(data.cards[chosenCardNumber].name);
        console.log(data.cards[chosenCardNumber].img);
        console.log(data.cards[chosenCardNumber].fortune_telling[0]);

        //Display card img
        DisplayCard(data.cards[chosenCardNumber].img);

        //Display card fortune description

        //Store card data as persistent data
        StoreData(chosenCardNumber);
    });
})

function DisplayCard(imgVar)
{
    var img = document.createElement("img");
    img.src = "./assets/json/cards/" + imgVar;
    var src = document.getElementById("cardPlace");
    src.appendChild(img);
}

function StoreData(StoreData)
{
    history[0] = StoreData;
    console.log(StoreData);
}

// gets random choice from array returned from jason if last visit was more than 24 hours ago, else display the last result and say come back tommorow!

// add card info below/in the 'card', arcana, suit, fortune telling, keywords, meanings; light and/or shadow, numerology, astrology, affirmation, questions to ask.

// for future maybe, use the reverse, create function for light and shadow