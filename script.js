var x = window.matchMedia("(max-width: 500px)");
var one = document.getElementById("1");
var two = document.getElementById("2"); //These are all the variables the appear in my JavaScript
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
var placealigner = document.getElementById("placealigner");
var smallaligner = document.getElementById("smallaligner");
var spacer = document.getElementById("spacer");
var scream = document.getElementById("scream")
var troll = document.getElementById("troll");
var rcolumn = document.getElementById("rcolumn");
var column1 = document.getElementById("column1");
const element1 = document.getElementById("6-sided"); //These constants are to check if the class "opaque" is contained within the div in the Click# functions
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


function myFunction(x){ //This makes the background image change and a sound play when the viewport width is smaller than 500px
	if(x.matches){
		alert("You have ANGERED Jonathan!");
		scream.play();
	} else {
		scream.pause();
	}
}
myFunction(x);
x.addListener(myFunction);
function optionsToggle(elem){ //This toggles the options page to open and close
	rcolumn.classList.toggle("display");
	column1.classList.toggle("full-width");
	spacer.classList.toggle("display");
}
function diceSizeToggle(elem){ //This toggles the dice sizes to appear and disappear
	sixsided.classList.toggle("display");
	tensided.classList.toggle("display");
	spacer1.classList.toggle("display");
	spacer2.classList.toggle("display");
	spacer3.classList.toggle("display");
	spacer4.classList.toggle("display");
	spacer5.classList.toggle("display");
	spacer6.classList.toggle("display");
	troll.classList.add("display");
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
function trollMode(elem){ //This makes the numbers appear
	if(element1.classList.contains("no-opaque")){
		one.classList.remove("display");
		two.classList.remove("display");
		three.classList.remove("display");
		four.classList.remove("display");
		five.classList.remove("display");
		six.classList.remove("display");
		placealigner.classList.remove("display");
		seven.classList.add("display");
		eight.classList.add("display");
		nine.classList.add("display");
		ten.classList.add("display");
	} else if(element2.classList.contains("no-opaque")){
		one.classList.remove("display");
		two.classList.remove("display");
		three.classList.remove("display");
		four.classList.remove("display");
		five.classList.remove("display");
		six.classList.remove("display");
		seven.classList.remove("display");
		eight.classList.remove("display");
		nine.classList.remove("display");
		ten.classList.remove("display");
		smallaligner.classList.remove("display");
		placealigner.classList.add("display");
	} else {}
}
function diceRoll(elem){ //Number randomizer and troll mode if statements
	document.getElementById("random-numb").innerHTML = "Rolling the dice...";
	document.getElementById("img").src = "images/dice-rolling2.gif";
	if (element1.classList.contains("no-opaque") && element3.classList.contains("opaque")){
		setTimeout(function (){
			randomnumb.innerHTML = "You rolled a 1";
			img.src = "images/die-1.jpg";
		}, 1500);
	} else if (element1.classList.contains("no-opaque") && element4.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 2";
			img.src = "images/die-2.jpg";
		}, 1500);
	} else if (element1.classList.contains("no-opaque") && element5.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 3";
			img.src = "images/die-3.jpg";
		}, 1500);
	} else if (element1.classList.contains("no-opaque") && element6.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 4";
			img.src = "images/die-4.PNG";
		}, 1500);
	} else if (element1.classList.contains("no-opaque") && element7.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 5";
			img.src = "images/die-5.PNG";
		}, 1500);
	} else if (element1.classList.contains("no-opaque") && element8.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 6";
			img.src = "images/die-6.png";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element3.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 1";
			img.src = "images/die-1.jpg";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element4.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 2";
			img.src = "images/die-2.jpg";
		}, 1500);x
	} else if (element2.classList.contains("no-opaque") && element5.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 3";
			img.src = "images/die-3.jpg";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element6.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 4";
			img.src = "images/die-4.PNG";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element7.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 5";
			img.src = "images/die-5.PNG";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element8.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 6";
			img.src = "images/die-6.png";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element9.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 7";
			img.src = "images/die-7.jpg";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element10.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 8";
			img.src = "images/die-8.jpg";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element11.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 9";
			img.src = "images/die-9.jpg";
		}, 1500);
	} else if (element2.classList.contains("no-opaque") && element12.classList.contains("opaque")){
		setTimeout(function(){
			randomnumb.innerHTML = "You rolled a 10";
			img.src = "images/die-10.jpg";
		}, 1500);
	} else if(element1.classList.contains("no-opaque")){
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
	} else if (element2.classList.contains("no-opaque")){
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
function reset(elem){ //resets website
	window.location.reload();
}
function opaqueSix(elem){ //When 6-sided is clicked, it turns opaque
	if(element2.classList.contains("opaque")){
		sixsided.classList.add("no-opaque");
		sixsided.classList.remove("opaque");
		troll.classList.remove("display");
	} else if(element2.classList.contains("no-opaque")){
		sixsided.classList.add("no-opaque");
		sixsided.classList.remove("opaque");
		tensided.classList.remove("no-opaque");
		tensided.classList.add("opaque");
		troll.classList.remove("display");
	} else {}
}
function opaqueTen(elem){ //When 10-sided is clicked, it turns opque
	tensided.classList.add("no-opaque");
	tensided.classList.remove("opaque");
	sixsided.classList.add("opaque");
	sixsided.classList.remove("no-opaque");
	troll.classList.remove("display");
}
function clickOne(elem){ //These functions make Troll Mode work
	if (element1.classList.contains("no-opaque")){
		one.classList.add("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
	} else if (element2.classList.contains("no-opaque")){
		one.classList.add("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickTwo(elem){
	if (element1.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.add("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
	} else if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.add("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickThree(elem){
	if (element1.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.add("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
	} else if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.add("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickFour(elem){
	if (element1.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.add("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
	} else if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.add("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickFive(elem){
	if (element1.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.add("opaque");
		six.classList.remove("opaque");
	} else if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.add("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickSix(elem){
	if (element1.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.add("opaque");
	} else if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.add("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickSeven(elem){
	if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.add("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickEight(elem){
	if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.add("opaque");
		nine.classList.remove("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickNine(elem){
	if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.add("opaque");
		ten.classList.remove("opaque");
	} else {}
}
function clickTen(elem){
	if (element2.classList.contains("no-opaque")){
		one.classList.remove("opaque");
		two.classList.remove("opaque");
		three.classList.remove("opaque");
		four.classList.remove("opaque");
		five.classList.remove("opaque");
		six.classList.remove("opaque");
		seven.classList.remove("opaque");
		eight.classList.remove("opaque");
		nine.classList.remove("opaque");
		ten.classList.add("opaque");
	} else {}
}