//Variables
const history = ["", "-1", "-2", "-3", "-4", "-5"]; //Find a way to store this as persisitent data
const tarotData = (src = "./assets/json/tarot-images.json");
const siteVisited = localStorage.getItem("lastClick");


function hasItBeen24Hours() {
  // if it is null equals it has not been 24 hours
  if (!siteVisited) {
    console.log("hasItBeen24Hours = " + siteVisited);
    const clickAway = true;
    console.log("clickAway if = " + clickAway);
    return clickAway;
  } else {
    // get lastClick
    var lc = dayjs(localStorage.getItem("lastClick"));
    console.log("lc = " + lc);
    // get next click
    var nc = dayjs(localStorage.getItem("lastClickPlusOneDay"));
    console.log("nc = " + nc);
    // compare last click to next day
    var lcnc = nc.isAfter(lc);
    console.log("lcnc = " + lcnc);
    const clickAway = true;
    console.log("clickAway else = " + clickAway);
    return clickAway;
    // console.log("hasItBeen24Hours" + siteVisited);
    // return siteVisited;
    // do something
  }
}
hasItBeen24Hours();

//Check if 24 hrs has passed since last reading
if(currenttime = lastClickPlusOneDayObj)
{
    //push every value in history up one
    for(i = 1; i < 5; i++)
    {
        history[i] = history[i - 1];
    }
    //make today's reading = nothing;
    history[0] = "";
}

//Hide button if user has already had their daily fortune read and display previous fortune instead
if (history[0] != "")
{
  //Hide button
  document.getElementById("button").style.display = "none";

  //Display card name
  DisplayCardName(data.cards[history[0]].name);

  //Display card img
  DisplayCard(data.cards[history[0]].img);

  //Display card fortune description
  DisplayCardDescription(data.cards[history[0]].fortune_telling[0]);

  //Tell user we have already read their fortune today and to come back tommorow
  DisplaycomeBackTommorow();
} 
else 
{
  //pick a random number from 0 to 78
  var chosenCardNumber = Math.floor(Math.random() * (78 - 0));

  //Button function, when read tarot button click it does what?
  document.getElementById("button").addEventListener("click", function () 
  {
    //Store last reading time
    LastClick();

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
  document.getElementById("comeBackTommorow").innerHTML = "You have already received todays reading!  Please visit again after 24 hours!";
}

function StoreData(StoreData) 
{
  history[0] = StoreData;
}

function LastClick() 
{
  // get now and set to local storage
  var lastClickObj = dayjs(); // get day object
  localStorage.setItem("lastClick", lastClickObj); // save to storage
  console.log("now obj= " + lastClickObj); // log day object

  // get plus one day and set to local storage
  // var lastClickPlusOneDayObj = lastClickObj.add(1, "day"); // get one day from now
  var lastClickPlusOneDayObj = lastClickObj.add(1439, "minute"); // get one day from now
  localStorage.setItem("lastClickPlusOneDay", lastClickPlusOneDayObj); // save to storage
  console.log("+1 Day Obj = " + lastClickPlusOneDayObj); // log one day from now

  // get minus one day and set to local storage
  // var lastClickMinusOneDayObj = lastClickObj.subtract(1, "day"); // get one day ago
  var lastClickMinusOneDayObj = lastClickObj.subtract(1439, "minute"); // get one day ago
  localStorage.setItem("lastClickMinusOneDay", lastClickMinusOneDayObj); // save to storage
  console.log("-1 Day Obj = " + lastClickMinusOneDayObj); // log one day ago

  // is the current lastClickObj
  var clickIsAfterOneDay = lastClickObj.isAfter(lastClickMinusOneDayObj);
  console.log("is After ? " + clickIsAfterOneDay);

  //
  var dayIsBefore = lastClickObj.isBefore(lastClickMinusOneDayObj);
  console.log("is before ? " + dayIsBefore);
}

// has the site been visited and button clicked
function SiteVisited() 
{
  var siteVisited = localStorage.getItem("lastClick");
  console.log(siteVisited);
  return siteVisited;
}
SiteVisited();

// check to see if browser has local storage (https://www.w3schools.com/html/html5_webstorage.asp)
function StorageCheck() 
{
  if (typeof Storage !== "undefined") 
  {
    // Code for localStorage/sessionStorage.
    console.log("storage available");
  } 
  else 
  {
    // Sorry! No Web Storage support..
    console.log("storage NOT available");
  }
}
StorageCheck();
