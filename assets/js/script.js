// psuedo code

// button function, when button click it does what?
// gets random choice from array returned from jason if last visit was more than 24 hours ago, else display the last result and say come back tommorow!

// get random number from 0 to 78
var randomNumber = (Math.floor(Math.random() * (78 - 0)));

// select card from array with the random number
const tarotData = (src="./assets/json/tarot-images.json");

//Find Card Image
fetch (tarotData)
.then((response) => response.json())
.then((data) =>
{
    console.log(data.cards[randomNumber].name);
    console.log(data.cards[randomNumber].img);
    console.log(data.cards[randomNumber].fortune_telling[0]);
});

// hide button

// show card in a 'card' 

// add card info below/in the 'card', arcana, suit, fortune telling, keywords, meanings; light and/or shadow, numerology, astrology, affirmation, questions to ask.

// for future maybe, use the reverse, create function for light and shadow

// Store result in persistent data for today and the last 6 days/visits, with date visited maybe
