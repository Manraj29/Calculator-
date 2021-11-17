// Use insert() function to insert the number in textview.  
function insert(num, curop) {
	document.getElementById(curop).innerHTML = document.getElementById(curop).innerHTML + num;
	document.getElementById('previous-operand').innerHTML = "";
}

// Use equal() function to return the result based on passed values.  
function equal(curop, preop, query, hist) {
	var exp = document.getElementById(curop).innerHTML;
	if (exp != " ") {
		document.getElementById(preop).innerHTML = document.getElementById(curop).innerHTML;
		document.getElementById(curop).innerHTML = eval(exp);
		addToHistory(eval(exp), preop, query, hist);
	}
}

// For backspace
function backspace(curop, preop) {
	document.getElementById(preop).innerHTML = "";
	var exp = document.getElementById(curop).innerHTML;
	document.getElementById(curop).innerHTML = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}

//Clear all
function clearall(curop, preop) {
	document.getElementById(curop).innerHTML = '';
	document.getElementById(preop).innerHTML = '';
}

//change Theme
function changetheme() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	var chngoutput = document.getElementById('chnge-output');
	chngoutput.classList.toggle("dark-output");
	if (document.getElementById('lighttheme').style.display == "block") {
		document.getElementById('lighttheme').style.display = "none";
		document.getElementById('darktheme').style.display = "block";

	} else {
		document.getElementById('lighttheme').style.display = "block";
		document.getElementById('darktheme').style.display = "none";

	}
}

//Opening Navbar
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

//Closing Navbar
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";
}


//Adding Hisory of calculator
let history = [''];
let data = [''];
var arr = [];

// preop previous operand
// hist  sci history (main ans)
// query sci query (question)
// value expression is also answer
function addToHistory(value, preop, query, hist) {
	var total = '';
	arr = [];

	history.push(value);
	data.push(document.getElementById(preop).innerHTML);
	for (var i = 0; i < history.length; i++) {
		arr.push(data[i] + " = " + history[i] + " ");
		// window.alert(arr[i]);
	}
	document.getElementById(hist).innerHTML = " ";
	document.getElementById(query).innerHTML = " ";

	for (var j = arr.length - 1; j > 0; j--) {
		document.getElementById(hist).innerHTML += "" + arr[j] + "<hr>";
	}
}



//Clearing History
function clearhistory(query, hist) {

	while (history.length > 1) {
		arr.pop();
		history.pop();
		data.pop();
	}
	document.getElementById(hist).innerHTML = " ";
	document.getElementById(query).innerHTML = " ";

}


//Show History mobile view with cookies
function showhistory() {
	if (localStorage.getItem('currentCalculator') == 'standard') {
		if (document.getElementById('operation-history').style.display == "block") {
			document.getElementById('operation-history').style.display = "none";
		} else {
			document.getElementById('operation-history').style.display = "block";
		}
		var element = document.getElementById('operation-history');
		element.classList.toggle("display-operation-history");
	} 
	else if (localStorage.getItem('currentCalculator') == 'programmer') {
		if (document.getElementById('pro-operation-history').style.display == "block") {
			document.getElementById('pro-operation-history').style.display = "none";
		} else {
			document.getElementById('pro-operation-history').style.display = "block";
		}
		var element = document.getElementById('pro-operation-history');
		element.classList.toggle("pro-display-operation-history");
	}
	else if (localStorage.getItem('currentCalculator') == 'scientific') {
		if (document.getElementById('sci-operation-history').style.display == "block") {
			document.getElementById('sci-operation-history').style.display = "none";
		} else {
			document.getElementById('sci-operation-history').style.display = "block";
		}	
	}

}

var hexad = document.getElementsByName('hexad');
var binar = document.getElementsByName('binar');
var octa = document.getElementsByName('octa');		
// var elems3 = document.getElementsByName('hexad');

for(var i = 0; i < hexad.length; i++) {
	hexad[i].disabled = true;
}

//Programmer Calc

function noconvert(value) {
	if (value == 'decimal') {
		for(var i = 0; i < 10; i++) {
			hexad[i].disabled = true;
			octa[i].disabled = false;
			binar[i].disabled = false;
		}
	}
	else if (value == 'binary') {
		for(var i = 0; i < 10; i++) {
			hexad[i].disabled = true;
			binar[i].disabled = true;
			octa[i].disabled = true;
		}
	}
	else if (value == 'octal') {
		for(var i = 0; i < 10; i++) {
			octa[i].disabled = true;
			hexad[i].disabled = true;
		}
	}
	else if (value == "hexadec") {
		for(var i = 0; i < 20; i++) {
			hexad[i].disabled = false;
			octa[i].disabled = false;
			binar[i].disabled = false;

		}
	}
}




//Scientific calc
function scientificfun(op) {
	var x = document.getElementById('sci-current-operand');
	var y = document.getElementById('sci-previous-operand');
	var ansop;
	if (op == 'square') {
		ansop = Math.pow(x.innerHTML, 2);
		y.innerHTML = x.innerHTML + "^2";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if (op == 'cube') {
		ansop = Math.pow(x.innerHTML, 3);
		y.innerHTML = x.innerHTML + "^3";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == 'sqrt') {
		ansop = Math.sqrt(x.innerHTML);
		y.innerHTML = "√" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == 'log') {
		ansop = Math.log(x.innerHTML);
		y.innerHTML = "log" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == '1byx') {
		ansop = 1 / x.innerHTML;
		y.innerHTML = "1/" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == 'abs') {
		ansop = Math.abs(x.innerHTML);
		y.innerHTML = "|" + x.innerHTML + "|";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if(op == 'factorial') {
		ansop = 1;
		for(var i = 1; i <= x.innerHTML; i++) {
			ansop *= i;
		}
		y.innerHTML = x.innerHTML + "!";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	// else if(op == "xraisey") {
	// 	ansop = Math.pow(x.innerHTML, y.innerHTML);
	// 	y.innerHTML = x.innerHTML + "^" + y.innerHTML;
	// 	x.innerHTML = ansop;
	// }
	else if(op == '10raisex'){
		ansop = Math.pow(10, x.innerHTML);
		y.innerHTML = "10^" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else {
		alert("Error");
	}
	// y.innerHTML += "=" + x.innerHTML;

}


//dates calc
function dropdowndate(value) {
	if (value == "difference") {
		document.getElementById('id-date-cal').style.display = "none";
		document.getElementById('id-dates-diff').style.display = "block";
	}
	else if (value == "calculations") {
		document.getElementById('id-date-cal').style.display = "block";
		document.getElementById('id-dates-diff').style.display = "none";
	}
}

function dateDiff() {
	var d = new Date(document.getElementById('date-from').value);
    var d2 = new Date(document.getElementById('date-to').value);
	// alert(d);
    var result = document.getElementById('result');
	document.getElementById("diff-dates").style.display = "block";
	document.getElementById('diff-dates').innerHTML = "Difference of " + Math.ceil(Math.abs(d2 - d) / (1000 * 60 * 60 * 24)) + " days";
}

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function subdates() {
	var d = new Date(document.getElementById('date-cal-from').value);
	var no = document.getElementById('opdate').value;
	// alert(no);
	d.setDate(d.getDate() - no);
	document.getElementById("cal-dates").style.display = "block";
	document.getElementById("cal-dates").innerHTML = "Date: <br>" + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "<br>Day: " + weekday[d.getDay()];
}

function adddates() {
	var d = new Date(document.getElementById('date-cal-from').value);
	var no = parseInt(document.getElementById('opdate').value);
	// alert(no);
	d.setDate(d.getDate() + no);
	document.getElementById("cal-dates").style.display = "block";
	document.getElementById("cal-dates").innerHTML = "Date: <br>" + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "<br>Day: " + weekday[d.getDay()];
}

function cleardates(from){
	document.getElementById(from).value = null;
    document.getElementById('date-to').value = null;
	document.getElementById("cal-dates").innerHTML = "";
	document.getElementById("diff-dates").innerHTML = ""
	document.getElementById("opdate").value = ""
	var op = document.getElementsByName("opr");
	for (var i = 0; i < op.length; i++) {
		op[i].checked = false;
	}
}

//Currency Converter
const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});
 
function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value; 
	document.getElementById('con-from-to').innerHTML = "Conversion from " + from_currency + " to " + to_currency;
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`) //all the exchange rates from the from_currency currency
	.then(res => res.json())
	.then(res => {
	const rate = res.rates[to_currency]; //get the rate of the to_currency currency
	rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}` //display the rate
	to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2); //have 2 digits after decimal and display the result
	})
}
calculate();

//Navbar Elements

function showProgrammer() {
	document.getElementById('standard').style.display = "none";
	document.getElementById('Scientific').style.display = "none";
	document.getElementById('Date-Difference').style.display = "none";
	document.getElementById('Programmer').style.display = "block";
	document.getElementById('currency-con').style.display = "none";
	document.getElementById('show-history-btn').style.display = "block";

	localStorage.setItem('currentCalculator', 'programmer');
	document.getElementById('calc-type').innerHTML = "Programmer";
	closeNav();
}

function showStandard() {
	document.getElementById('standard').style.display = "block";
	document.getElementById('Programmer').style.display = "none";
	document.getElementById('Scientific').style.display = "none";
	document.getElementById('Date-Difference').style.display = "none";
	document.getElementById('currency-con').style.display = "none";
	document.getElementById('show-history-btn').style.display = "block";

	localStorage.setItem('currentCalculator', 'standard');
	document.getElementById('calc-type').innerHTML = "Standard";
	closeNav();
}

function showScientific() {
	document.getElementById('Scientific').style.display = "block";
	document.getElementById('standard').style.display = "none";
	document.getElementById('Date-Difference').style.display = "none";
	document.getElementById('Programmer').style.display = "none";
	localStorage.setItem('currentCalculator', 'scientific');
	document.getElementById('currency-con').style.display = "none";
	document.getElementById('show-history-btn').style.display = "block";

	document.getElementById('calc-type').innerHTML = "Scientific";
	closeNav();
}

function showDateDiff() {
	document.getElementById('Scientific').style.display = "none";
	document.getElementById('Date-Difference').style.display = "block";
	document.getElementById('standard').style.display = "none";
	document.getElementById('Programmer').style.display = "none";
	document.getElementById('currency-con').style.display = "none";
	document.getElementById('show-history-btn').style.visibility = "none";

	localStorage.setItem('currentCalculator', 'dateDiff');
	document.getElementById('calc-type').innerHTML = "Date Calculation";
	closeNav();
}

function showCurrencyCon() {
	document.getElementById('Scientific').style.display = "none";
	document.getElementById('currency-con').style.display = "block";
	document.getElementById('Date-Difference').style.display = "none";
	document.getElementById('standard').style.display = "none";
	document.getElementById('Programmer').style.display = "none";
	document.getElementById('show-history-btn').style.visibility = "none";
	localStorage.setItem('currentCalculator', 'dateDiff');
	document.getElementById('calc-type').innerHTML = "Currency Con";
	closeNav();
}

