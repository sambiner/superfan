var x = window.matchMedia("(max-width: 500px)");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var ten = document.getElementById("10");
var spacer1 = document.getElementById("spacer1");
var spacer2 = document.getElementById("spacer2");
var spacer3 = document.getElementById("spacer3");
var spacer4 = document.getElementById("spacer4");
var spacer5 = document.getElementById("spacer5");
var spacer6 = document.getElementById("spacer6");
var sixsided = document.getElementById("6-sided");
var tensided = document.getElementById("10-sided");
var randomnumb = document.getElementById("random-numb");
var img = document.getElementById("img");
const element1 = document.getElementById("6-sided");
const element2 = document.getElementById("10-sided");
const element3 = document.getElementById("1");
const element4 = document.getElementById("2");
const element5 = document.getElementById("3");
const element6 = document.getElementById("4");
const element7 = document.getElementById("5");
const element8 = document.getElementById("6");
const element9 = document.getElementById("7");
const element10 = document.getElementById("8");
const element11 = document.getElementById("9");
const element12 = document.getElementById("10");


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
	sixsided.classList.toggle("display");
	tensided.classList.toggle("display");
	spacer1.classList.toggle("display");
	spacer2.classList.toggle("display");
	spacer3.classList.toggle("display");
	spacer4.classList.toggle("display");
	spacer5.classList.toggle("display");
	spacer6.classList.toggle("display");
	document.getElementById("big-spacer1").classList.toggle("display");
	document.getElementById("troll").classList.toggle("display");
	one.classList.add("display");
	two.classList.add("display");
	three.classList.add("display");
	four.classList.add("display");
	five.classList.add("display");
	six.classList.add("display");
	seven.classList.add("display");
	eight.classList.add("display");
	nine.classList.add("display");
	ten.classList.add("display");
}

function trollMode(elem){
	if(element1.classList.contains("opaque")){
		one.classList.toggle("display");
		two.classList.toggle("display");
		three.classList.toggle("display");
		four.classList.toggle("display");
		five.classList.toggle("display");
		six.classList.toggle("display");
	} else if(element2.classList.contains("opaque")){
		one.classList.toggle("display");
		two.classList.toggle("display");
		three.classList.toggle("display");
		four.classList.toggle("display");
		five.classList.toggle("display");
		six.classList.toggle("display");
		seven.classList.toggle("display");
		eight.classList.toggle("display");
		nine.classList.toggle("display");
		ten.classList.toggle("display");
	} else {
		
	}
}

function diceRoll(elem){
	document.getElementById("random-numb").innerHTML = "Rolling the dice...";
	document.getElementById("img").src = "images/dice-rolling2.gif";
	if(element1.classList.contains("opaque")){
		setTimeout(function (){
		var roll = Math.floor(Math.random()*6) +1;
		document.getElementById("random-numb").innerHTML = "You rolled a " + roll;
		if (randomnumb.innerHTML == "You rolled a 1"){
			img.src = "images/die-1.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 2"){
			img.src = "images/die-2.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 3"){
			img.src = "images/die-3.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 4"){
			img.src = "images/die-4.PNG";
		} else if (randomnumb.innerHTML == "You rolled a 5"){
			img.src = "images/die-5.PNG";
		} else if (randomnumb.innerHTML == "You rolled a 6"){
			img.src = "images/die-6.png";
		} else {}
		}, 1500);
	} else if (element2.classList.contains("opaque")){
		setTimeout(function (){
		var roll = Math.floor(Math.random()*10) +1;
		document.getElementById("random-numb").innerHTML = "You rolled a " + roll;
		if (randomnumb.innerHTML == "You rolled a 1"){
			img.src = "images/die-1.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 2"){
			img.src = "images/die-2.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 3"){
			img.src = "images/die-3.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 4"){
			img.src = "images/die-4.PNG";
		} else if (randomnumb.innerHTML == "You rolled a 5"){
			img.src = "images/die-5.PNG";
		} else if (randomnumb.innerHTML == "You rolled a 6"){
			img.src = "images/die-6.png";
		} else if (randomnumb.innerHTML == "You rolled a 7"){
			img.src = "images/die-7.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 8"){
			img.src = "images/die-8.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 9"){
			img.src = "images/die-9.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 10"){
			img.src = "images/die-10.jpg";
		} else {}
		}, 1500);
	} else {
		setTimeout(function (){
		var roll = Math.floor(Math.random()*6) +1;
		document.getElementById("random-numb").innerHTML = "You rolled a " + roll;
		if (randomnumb.innerHTML == "You rolled a 1"){
			img.src = "images/die-1.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 2"){
			img.src = "images/die-2.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 3"){
			img.src = "images/die-3.jpg";
		} else if (randomnumb.innerHTML == "You rolled a 4"){
			img.src = "images/die-4.PNG";
		} else if (randomnumb.innerHTML == "You rolled a 5"){
			img.src = "images/die-5.PNG";
		} else if (randomnumb.innerHTML == "You rolled a 6"){
			img.src = "images/die-6.png";
		} else {}
		}, 1500);
	}
}

function reset(elem){
	document.getElementById("random-numb").innerHTML = "Random Number";
	document.getElementById("img").src = "images/dice-stationary.PNG";
}

function opaqueSix(elem){
	document.getElementById("6-sided").classList.add("opaque");
	document.getElementById("10-sided").classList.remove("opaque");
}

function opaqueTen(elem){
	document.getElementById("10-sided").classList.add("opaque");
	document.getElementById("6-sided").classList.remove("opaque");
}