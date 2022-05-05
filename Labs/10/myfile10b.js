//THIS CONTROLS THE BACKGROUND COLOR OF EACH BOX WHEN CLICKED//

var inputBox_1 = document.querySelector("#firstname")											//sets First Name box to variable
var inputBox_2 = document.querySelector("#car")													//sets Dream Car box to variable
var inputBox_3 = document.querySelector("#vacation")											//sets Dream Vacation box to variable
var inputBox_4 = document.querySelector("#nickname")											//sets Nickname box to variable
var inputBox_5 = document.querySelector("#meal")												//sets Favorite Meal box to variable
var inputBox_6 = document.querySelector("#lastname")											//sets Last Name box to variable

var myInputBoxes  = [inputBox_1, inputBox_2, inputBox_3, inputBox_4, inputBox_5, inputBox_6]	//makes array of input boxes

for (var x=0; x<myInputBoxes.length; x++)														//loops 6 times
{													
	myInputBoxes[x].addEventListener("blur", setWhite)											//adds setWhite to the input box
	myInputBoxes[x].addEventListener("focus", setColor)											//adds setColor to the input box
}

function setWhite(e)																			//defines function setWhite
{
	e.target.style.background="white";															//sets background to white
}


var colors = ["#FA8072", "#FF7F50", "#FFB6C1", "#808000", "#00FFFF", "#D8BFD8", "#FFEFD5"]		//makes array of colors

function setColor(e)																			//defines function setColor
{
	var num = Math.floor((Math.random() * colors.length-1) + 1);								//gives a random num 0-6
	e.target.style.background = colors[num];													//changes the background color
}