//COMPLETES FUNCTION, ARRAY, VARIABLES, IF, LOOPS, JQUERY AND DOM ASPECTS
function addPics()
{	
	filePath = './pics/'																				//establishes the file path of the pics
	picTitles = ['bandages', 'cone', 'ears', 'posing', 'sleepy']										//array of image titles
	
	x = 0																								//sets var x to be used for looping
	num = prompt('Pick a number 0-5')																	//prompts user for a number
	
	if (num >= 1 && num <= 5)																			//if the number is in the given range (1-5)
	{														
		for (x ; x < num; x++)																			//repeats loop until you reach the desired number
		{
			var pic = document.createElement('img');													//assigns variable to be a new image elemment
			pic.setAttribute('id', 'pic'  + x)															//gives the picture a unique id
			pic.setAttribute('src', filePath + picTitles[x] + '.jpg');									//establishes the source of the image
			pic.setAttribute('alt', 'photo unavailable');												//if the picture is unavailable, display this message
			pic.setAttribute('height', '229px');														//set height
			pic.setAttribute('width', '172px');															//set width
			document.querySelector('#picPurse').appendChild(pic)										//visually adds the element (to the page/div)
		}
	}
	
	else if (num == 0)
	{
		alert("Awe you don't want to see my puppy ): \nThat's fine. He doesn't need your approval!")
	}
	
	else
	{
		alert("Your input is invalid. Please try again.")
		addPics()
	}
}

//COMPLETES CANVAS ASPECT
var c = document.getElementById('pane').getContext('2d'); 												//assigns canvas to a variable
function addDoodle()
{
	//heart
	c.beginPath();																						//begins path
	c.lineWidth = 4																						//sets width of line
	c.strokeStyle = "red"																				//sets line color
	c.fillStyle = "pink"																				//sets fill color
		//right side
	c.moveTo(50, 35)																					//1st point (center top)
	c.lineTo(55, 30)																					//point along right curve
	c.lineTo(60, 25)																					//point along right curve
	c.lineTo(70, 22)																					//point along right curve
	c.lineTo(80, 25)																					//point along right curve
	c.lineTo(86, 30)																					//point along right curve
	c.lineTo(87, 35)																					//point along right curve
	c.lineTo(89, 40)																					//point along right curve
	c.lineTo(87, 45)																					//point along right curve
	c.lineTo(85, 55)																					//point along right curve
		//left side
	c.lineTo(50, 80)																					//11th point (center bottom)
	c.lineTo(15, 55)																					//point along left curve
	c.lineTo(13, 45)																					//point along left curve
	c.lineTo(11, 40)																					//point along left curve
	c.lineTo(13, 35)																					//point along left curve
	c.lineTo(14, 30)																					//point along left curve
	c.lineTo(20, 25)																					//point along left curve
	c.lineTo(30, 22)																					//point along left curve
	c.lineTo(40, 25)																					//point along left curve
	c.lineTo(45, 30)																					//point along left curve
	c.lineTo(50, 35)																					//final point (center top)
		//creating it
	c.stroke()																							//draw it
	c.fill()																							//fill the heart
}

//COMPLETES EVENT AND STRING MANIPULATION ASPECT
var puppyName = document.getElementById('apolloName')
puppyName.addEventListener("mouseover", unjumble, false);												//adds mouse over event (1st pic)
puppyName.addEventListener("mouseout", jumble, false);													//adds mouse out event (1st pic)

function unjumble()
{
	document.querySelector('#apolloName').textContent = "APOLLO"										//unjumbles the name
}

function jumble()
{
	document.querySelector('#apolloName').textContent = "LPAOLO"										//rejumbles the name
}

