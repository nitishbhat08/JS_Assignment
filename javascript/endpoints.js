//fetching ajax values from endpoints url
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		
		var data = JSON.parse(this.responseText);

		button1.innerHTML = data.buttons[0];
		button1.setAttribute("value", data.buttons[0]);

		button2.innerHTML = data.buttons[1];
		button2.setAttribute("value", data.buttons[1]);

		button3.innerHTML = data.buttons[2];
		button3.setAttribute("value", data.buttons[2]);

		button4.innerHTML = data.buttons[3];
		button4.setAttribute("value", data.buttons[3]);

		limit = data.limit;
		console.log(data.limit)

		//genrate dynamic bars using for loop 
		for (var i = 0; i < data.bars.length; i++)
		{
			var progress = document.createElement("div");
			var con = document.getElementById("content");
			con.appendChild(progress);
			progress.setAttribute("class", "testProgress");
			progress.setAttribute("id", "progress" + i);

			var bar = document.createElement("div");
			progress.appendChild(bar);
			bar.setAttribute("class", "testBar");
			bar.setAttribute("id", "btn" + i);
			bar.style.width = data.bars[i] + "%";

			var text = document.createElement("label");
			bar.appendChild(text);
			text.setAttribute("class", "classLabel");
			text.setAttribute("id", "label" + i);
			text.innerHTML = data.bars[i] + "%";
		}

		var move = document.createElement("select");                  
		var but = document.getElementById("sel");
		but.appendChild(move);
		move.setAttribute("id", "moveselect");
	   
		//populating the dropdown boxes
		for (var i = 0; i < data.bars.length; i++)
		{
			var o = document.createElement("option");
			move.appendChild(o);
			o.setAttribute("id", "move" + i);
			o.setAttribute("value", i);
			o.innerHTML = "Progess Bar " + (1+i);
		}
	}
};
//passing the button value to the onclick event
button1.addEventListener('click', function () {
	moveBar(this.value);
});
button2.addEventListener('click', function () {
	moveBar(this.value);
});
button3.addEventListener('click', function () {
	moveBar(this.value);
});
button4.addEventListener('click', function () {
	moveBar(this.value);
});

//function for filling the progress bar
function moveBar(value)
{
    //change the bar value on the selected progress bar
	var v = parseInt(document.getElementById("moveselect").value);
	var a = document.getElementById("label"+v).innerHTML;
					
	value = parseInt(value) + parseInt(a);

    //if value is greater than limit, change the color to red            
	if (value >= limit)
	{
		document.getElementById("btn"+v).style.backgroundColor = "red";
		document.getElementById("btn"+v).style.width = "100%";
		document.getElementById("label"+v).innerHTML = value + "%";                   
	} 
	
	//if value is less than limit and greater than 100, increase the label but restrict the width to 100
	if (value <= limit && value > 100)
	{
		document.getElementById("btn"+v).style.backgroundColor = "lightblue";
		document.getElementById("btn"+v).style.width = "100%";
		document.getElementById("label"+v).innerHTML = value + "%";
	} 

	//if value is less than 100 and greater than 0, increase the label and width accordingly
	if (value <= 100 && value > 0)
	{
		document.getElementById("btn"+v).style.backgroundColor = "lightblue";
		document.getElementById("btn"+v).style.width = value + "%";
		document.getElementById("label"+v).innerHTML = value + "%";
	} 

	//if value is less than 0, set value and width to 0
	  else if (value <= 0)
	{
		document.getElementById("btn"+v).style.width = "0%";
		document.getElementById("label"+v).innerHTML = "0%";
	} 
}

//ajax call for getting values from server
xhttp.open("GET", "//pb-api.herokuapp.com/bars");
xhttp.send();