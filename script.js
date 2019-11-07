var x = window.matchMedia("(max-width: 500px)");

function myFunction(x){
	if(x.matches){
		alert("You have ANGERED Jonathan!");
	} else {
	}
}
myFunction(x);
x.addListener(myFunction);

function optionsToggle(elem){
	document.getElementById("rcolumn").classList.toggle("display");
	document.getElementById("column1").classList.toggle("full-width");
}

function diceSizeToggle(elem){
	document.getElementById("6-sided").classList.toggle("display");
	document.getElementById("10-sided").classList.toggle("display");
	document.getElementById("spacer1").classList.toggle("display");
	document.getElementById("spacer2").classList.toggle("display");
	document.getElementById("spacer3").classList.toggle("display");
	document.getElementById("spacer4").classList.toggle("display");
	document.getElementById("spacer5").classList.toggle("display");
	document.getElementById("spacer6").classList.toggle("display");
	document.getElementById("big-spacer1").classList.toggle("display");
	document.getElementById("troll").classList.toggle("display");
	document.getElementById("1").classList.add("display");
	document.getElementById("2").classList.add("display");
	document.getElementById("3").classList.add("display");
	document.getElementById("4").classList.add("display");
	document.getElementById("5").classList.add("display");
	document.getElementById("6").classList.add("display");
	document.getElementById("7").classList.add("display");
	document.getElementById("8").classList.add("display");
	document.getElementById("9").classList.add("display");
	document.getElementById("10").classList.add("display");
}

function trollMode(elem){
	document.getElementById("1").classList.toggle("display");
	document.getElementById("2").classList.toggle("display");
	document.getElementById("3").classList.toggle("display");
	document.getElementById("4").classList.toggle("display");
	document.getElementById("5").classList.toggle("display");
	document.getElementById("6").classList.toggle("display");
	document.getElementById("7").classList.toggle("display");
	document.getElementById("8").classList.toggle("display");
	document.getElementById("9").classList.toggle("display");
	document.getElementById("10").classList.toggle("display");
}

function diceRoll(elem){
	document.getElementById("random-numb").innerHTML = "Rolling the dice...";
	document.getElementById("img").src = "images/dice-rolling2.gif";
	setTimeout(function (){
	var roll = Math.floor(Math.random()*6) +1;
	document.getElementById("random-numb").innerHTML = "You rolled a " + roll;
	
	if (document.getElementById("random-numb").innerHTML == "You rolled a 1"){
		document.getElementById("img").src = "images/die-1.jpg";
	} else if (document.getElementById("random-numb").innerHTML == "You rolled a 2"){
		document.getElementById("img").src = "images/die-2.jpg";
	} else if (document.getElementById("random-numb").innerHTML == "You rolled a 3"){
		document.getElementById("img").src = "images/die-3.jpg";
	} else if (document.getElementById("random-numb").innerHTML == "You rolled a 4"){
		document.getElementById("img").src = "images/die-4.PNG";
	} else if (document.getElementById("random-numb").innerHTML == "You rolled a 5"){
		document.getElementById("img").src = "images/die-5.PNG";
	} else if (document.getElementById("random-numb").innerHTML == "You rolled a 6"){
		document.getElementById("img").src = "images/die-6.png";
	} else {}
	}, 1500);
}

function reset(elem){
	document.getElementById("random-numb").innerHTML = "Random Number";
	document.getElementById("img").src = "images/dice-stationary.PNG";
}