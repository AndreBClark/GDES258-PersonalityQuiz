var userName;
var timeOfDay;
var answers = new Array;
// var questionTypes = ['80\'s video games', '80\'s movies', '80\'s song lyrics', 'colors', '80\'s icons', '80\'s musicians'];

const questions = [
	{
		ingredientType: "bagelFlavor",
		mediaType: "80\'s Games",
		ingredientOptions: [
			"Blueberry",
			"Cranberry",
			"Everything",
			"French Toast",
			"Garlic",
			"Multigrain",
			"Plain",
			"Rye"
		],
		mediaOptions: [
			"Tron",
			"Pac-Man",
			"Tetris",
			"Rampage",
			"Galaga",
			"Donkey Kong",
			"Frogger",
			"Joust"
		]
	},
	 {
		ingredientType: "spreadFlavor",
		mediaType: "80\'s Movies",
		ingredientOptions: [
			"Roasted Red Pepper Frischk&auml;se",
			"House Frischk&auml;se",
			"Herb Frischk&auml;se",
			"Honey Frischk&auml;se",
			"Peanut Butter",
			"Nutella",
			"Huckleberry Jam",
			"Thousand Island Dressing",
			"Hummus",
			"Butter",
			"Cranberry Sauce"
		],
		mediaOptions: [
			"The Goonies",
			"Planes, Trains & Automobiles",
			"Terminator",
			"Bill and Ted's Excellent Adventure",
			"E.T.",
			"Sixteen Candles",
			"Ferris Bueller's Day Off",
			"Ghostbusters",
			"Airplane",
			"Back to the Future",
			"The Princess Bride"
		]
	},
	{
	 ingredientType: "meatOption",
	 mediaType: "80\'s Song Lyrics",
	 ingredientOptions: [
		 "Ham",
		 "Bacon",
		 "Sausage",
		 "Turkey",
		 "Roast Beef",
		 "Pastrami",
		 "Salami",
		 "Egg"
	 ],
	 mediaOptions: [
		 "Pour Some Sugar on Me",
		 "Wake me up Before you Go-Go",
		 "Hungry like the Wolf",
		 "Don\'t Stop Believin\'",
		 "Hit me With Your Best Shot",
		 "We Built This City on Rock and Roll",
		 "You Gotta Fight for your Right to Party",
		 "Girls Just Wanna Have Fun"
	 ]
 },
 {
	ingredientType: "cheeseOption",
	mediaType: "Favorite Funky Color",
	ingredientOptions: [
		"Cheddar",
		"Swiss",
		"Provolone"
	],
	mediaOptions: [
		"Hot Pink",
		"Bright Yellow",
		"Neon Green",
		"Powder Blue"
	]
},
{
 ingredientType: "veggieOne",
 mediaType: "Iconic 80\'s Characters",
 ingredientOptions: [
	 "Tomato",
	 "Red Onion",
	 "Sauerkraut",
	 "Banana Peppers",
	 "Bananas"
 ],
 mediaOptions: [
	 "Maverick",
	 "David Hasselhoff",
	 "Hulk Hogan",
	 "Magnum P.I.",
	 "MacGyver"
 ]
},
{
 ingredientType: "veggieTwo",
 mediaType: "Iconic 80\'s Musicians",
 ingredientOptions: [
	 "Lettuce",
	 "Avocado",
	 "Microgreens",
	 "Cucumber",
	 "Shaved Carrots"
 ],
 mediaOptions: [
	 "David Bowie",
	 "Madonna",
	 "Hall & Oats",
	 "Prince",
	 "U2"
 ]
}
];


// function getRandomInt(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min)) + min;
// }
//
//
// const q1 = questions[0];
// var optionsAmt = 5;
// var randomOutput = getRandomInt(0,7);
// console.log(randomOutput);
//
// q1.mediaOptions[randomOutput];

var questionOptions = document.getElementsByClassName('questionlabel');
// var nextButton = document.getElementById('nextbtn');
// nextButton.addEventListener('click', next());
var theQ = document.getElementById('theQuestion');

var startButton = document.getElementById('startButton');
if(startButton){
  startButton.addEventListener('click', startQuiz, false);
}

function next(){
	i++
};

function setQuestionOptions(){
  var i;
	theQ.innerHTML = "What is your Favorite " + questions[i].mediaType + "?";
	questionOptions[0].innerHTML = questions[i].mediaOptions[0];
	questionOptions[1].innerHTML = questions[i].mediaOptions[1];
	questionOptions[2].innerHTML = questions[i].mediaOptions[2];
	questionOptions[3].innerHTML = questions[i].mediaOptions[3];
};

window.onload = function startQuiz(){
	var i = 0;
	setQuestionOptions;
};
