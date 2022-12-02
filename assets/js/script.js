// psuedo code

// button function, when button click it does what?
// gets random choice from array returned from jason if last visit was more than 24 hours ago, else display the last result and say come back tommorow!

// get random number from 0 to 78

// select card from array with the random number

// hide button

// show card in a 'card' 

// add card info below/in the 'card', arcana, suit, fortune telling, keywords, meanings; light and/or shadow, numerology, astrology, affirmation, questions to ask.

// for future maybe, use the reverse, create function for light and shadow

// Store result in persistent data for today and the last 6 days/visits, with date visited maybe

const tarotData = (src="./assets/json/tarot-images.json");

//Find Card Image
fetch (tarotData)
.then((response) => response.json())
.then((data) =>
{
    console.log(data.cards[0].img);
    console.log(data.cards[0].fortune_telling[0]);
});

tarotData = []
const cardNumber = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","15","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78"]
tarotNumber = []

function randomInt (min, max) {
    if (!max) {
        max = max
        min = 0
    }

    rando = Math.random()
    return Math.floor(min*(1-rando) + rando*max)
}

function getRandomInt(list) {
    return list [randomInt(list.length)]
}

