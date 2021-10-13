// Use insert() function to insert the number in textview.  
function insert(num) {  
  document.getElementById('current-operand').innerHTML = document.getElementById('current-operand').innerHTML+num;
  document.getElementById('previous-operand').innerHTML = "";

}  

// Use equal() function to return the result based on passed values.  
function equal()  {  
  var exp = document.getElementById('current-operand').innerHTML;  
  if(exp != " ")  {  
    document.getElementById('previous-operand').innerHTML = document.getElementById('current-operand').innerHTML; 
    document.getElementById('current-operand').innerHTML = eval(exp);
    addToHistory(eval(exp));
  }  
}  

// For backspace
function backspace() {  
  document.getElementById('previous-operand').innerHTML = "";
  var exp = document.getElementById('current-operand').innerHTML;  
  document.getElementById('current-operand').innerHTML = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  

//Clear all
function clearall() {
  document.getElementById('current-operand').innerHTML = ''; 
  document.getElementById('previous-operand').innerHTML = ''; 
}
//change Theme
function changetheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var chngoutput = document.getElementById('chnge-output');
  chngoutput.classList.toggle("dark-output");
  if(document.getElementById('lighttheme').style.display == "block"){
    document.getElementById('lighttheme').style.display = "none";
    document.getElementById('darktheme').style.display = "block";

  } else{
    document.getElementById('lighttheme').style.display = "block";
    document.getElementById('darktheme').style.display = "none";

  }
}

//Opening Navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "0px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

//Closing Navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


//Adding Hisory of calculator
let history = [''];
let data = [''];
var arr = [];

function addToHistory(value) {
  var total = '';
  arr = [];

  history.push(value); 
  data.push(document.getElementById('previous-operand').innerHTML);
  for(var i = 0; i <history.length; i++){
    arr.push(data[i] + " = " + history[i] + " ");
    // window.alert(arr[i]);
  }
  document.getElementById('history').innerHTML = " ";
  document.getElementById('query').innerHTML = " ";

  for (var j=arr.length-1; j > 0; j--){
    // document.getElementById('query').innerHTML += "<br>" + history[j] + "=";
    // document.getElementById('history').innerHTML += "<br>" + data[j] + "<hr>";
    document.getElementById('history').innerHTML += "" + arr[j] + "<hr>";

  } 
}

//Clearing History
function clearhistory() {

  while(history.length > 1) {
    arr.pop();
    history.pop();
    data.pop();
  }
  // window.alert(history.length);
  document.getElementById('history').innerHTML = " ";
  document.getElementById('query').innerHTML = " ";

}

function showhistory() {
  if(document.getElementById('operation-history').style.display == "block"){
    document.getElementById('operation-history').style.display = "none";
  } else{
    document.getElementById('operation-history').style.display = "block";
  }
  var element = document.getElementById('operation-history');
  element.classList.toggle("display-operation-history");
}