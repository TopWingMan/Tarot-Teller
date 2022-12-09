//Variables
var history = ["", "", "", "", "", ""];
const tarotData = (src = "./assets/json/tarot-images.json");

if (localStorage.getItem("history") != undefined)
{
    history[0] = localStorage.getItem("history");
}

//Check if 24 hrs has passed since last reading
if(dayjs().minute() > localStorage.getItem("dateOfLastReading"))
{
    //push every value in history up one
    for(i = 1; i < 5; i++)
    {
        history[i] = history[i - 1];
    }
    //make today's reading = nothing;
    history[0] = undefined;
}

//Hide button if user has already had their daily fortune read and display previous fortune instead
if (history[0] != undefined)
{
  //Hide button
  document.getElementById("button").style.display = "none";

  fetch(tarotData)
      .then((response) => response.json())
      .then((data) =>
      {
        //Display card name
        DisplayCardName(data.cards[history[0]].name);

        //Display card img
        DisplayCard(data.cards[history[0]].img);

        //Display card fortune description
        DisplayCardDescription(data.cards[history[0]].fortune_telling[0]);

        //Tell user we have already read their fortune today and to come back tommorow
        DisplaycomeBackTommorow();
      });
} 
else 
{
  //pick a random number from 0 to 78
  var chosenCardNumber = Math.floor(Math.random() * (78 - 0));

  //Button function, when read tarot button click it does what?
  document.getElementById("button").addEventListener("click", function () 
  {
    //Hide Button On press
    document.getElementById("button").style.display = "none";

    //Get card information
    fetch(tarotData)
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
  });
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

function DisplaycomeBackTommorow() 
{
  document.getElementById("comeBackTommorow").innerHTML = "You have already received todays reading! <br> Please visit again after 24 hours!";
}

function StoreData(StoreData) 
{
  history[0] = StoreData;
  localStorage.setItem("dateOfLastReading", dayjs().minute());
  localStorage.setItem("history", history[0]);
}