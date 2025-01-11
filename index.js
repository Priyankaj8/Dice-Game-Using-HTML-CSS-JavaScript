var randomNumber1 = (Math.floor((Math.random())* 6))+1;
var randomdiceImage = "dice"+randomNumber1+".png"; //dice1.png-dice6.png
var randomImageSource = "images/"+randomdiceImage;//images/dice1.png - imagges/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = (Math.floor((Math.random())* 6))+1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";//images/dice1.png - imagges/dice6.png
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
// if it is a draw
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
//if player 2 wins
else {
    document.querySelector("h1").innerHTML="Player 2 Wins";
}