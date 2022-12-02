const tarotData = (src="./assets/json/tarot-images.json");

//Find Card Image
fetch (tarotData)
.then((response) => response.json())
.then((data) =>
{
    console.log(data.cards[0].img);
    console.log(data.cards[0].fortune_telling[0]);
});