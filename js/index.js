var randomNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6
var playerOneImages = "assets/img/dice" + randomNumber + ".png"
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var playerTwoImages = "assets/img/dice" + randomNumber2 + ".png"


document.querySelector('.img1').setAttribute('src', playerOneImages);
document.querySelector('.img2').setAttribute('src', playerTwoImages);

if (playerOneImages > playerTwoImages) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
} else if(playerOneImages < playerTwoImages) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
} else {
    document.querySelector('h1').innerHTML = "It's a Tie, Roll Again!";    
}