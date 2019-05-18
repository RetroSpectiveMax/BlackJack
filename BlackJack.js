var values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var suits = ['Hearts','Spades','Clubs','Diamonds'];
var CardValue = [];
var CardSuit = [];
var position;
var numberOfCards = 0;
var nextCard = false;

function setup(){
	createCanvas(600, 600);
}
function draw(){
	background(0, 255, 0);
	chooseCard();
}
function chooseCard(){
	var randValue = values[Math.floor(Math.random() * values.length)];
	var randSuit = suits[Math.floor(Math.random() * suits.length)];
	CardValue.push(randValue);
	CardSuit.push(randSuit);
	nextCard = true;

}
function drawCard(){
	if(nextCard){
		for(var i = 0; i < CardValue.length; i++){
			for(var g = 0; g < CardSuit.length; g++){
				numberOfCards++;
				fill(0);
				textSize(25);
				text(CardValue[i] + " " + "of" + " " + CardSuit[g], position, 550);
			}  
	}
	}
}
function Position(){
	position = 150;
	for(var i = 0; i < numberOfCards; i++){
		position += 50;
	}
}
