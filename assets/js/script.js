//Variables
const history = ["", "-1", "-2", "-3", "-4", "-5"]; //Find a way to store this as persisitent data
const tarotData = (src="./assets/json/tarot-images.json");

//Hide button if user has already had their daily fortune read and display previous fortune instead
if (history[0] != "")
{
    //Hide button
    document.getElementById("button").style.display = "none";

    //Tell user we have already read their fortune today and to come back tommorow

    //Display card name
    DisplayCardName(history[0]);

    //Display todays fortune
    DisplayCard(history[0]);

    //Display card description
    DisplayCardDescription(history[0]);

    console.log("Already Have Done Daily Reading");
}
else
{
    //pick a random number from 0 to 78
    var chosenCardNumber = (Math.floor(Math.random() * (78 - 0)));

    //Button function, when read tarot button click it does what?
    document.getElementById("button").addEventListener("click", function()
    {
        //Hide Button On press
        document.getElementById("button").style.display = "none";

        //Get card information
        fetch (tarotData)
        .then((response) => response.json())
        .then((data) =>
        {
            //Display card name
            DisplayCardName(data.cards[chosenCardNumber].name);

            //Display card img
            DisplayCard(data.cards[chosenCardNumber].img);

            //Display card fortune description
            DisplayCardDescription(data.cards[chosenCardNumber].fortune_telling[0]);

            //Store card data as persistent data
            StoreData(chosenCardNumber);
        });
    })
}

function DisplayCardName(cardName)
{
    document.getElementById("cardName").innerHTML = cardName;
}

function DisplayCard(imgID)
{
    var img = document.createElement("img");
    img.src = "./assets/json/cards/" + imgID;
    var src = document.getElementById("cardPlace");
    src.appendChild(img);
}

function DisplayCardDescription(cardDescription)
{
    document.getElementById("cardDescription").innerHTML = cardDescription;
}

function StoreData(StoreData)
{
    history[0] = StoreData;
}

// gets random choice from array returned from jason if last visit was more than 24 hours ago, else display the last result and say come back tommorow!