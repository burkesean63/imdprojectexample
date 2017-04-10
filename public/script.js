/*  Project:  INFO301 
    Author:
    Date:
    Purpose:
*/
 
      var products = ["Gloves ($299)","Bats ($249)","Hitting Instruction ($100)","Pitching Instuction ($100)"];
// Created an array of table elements 
var labels = document.getElementsByTagName("label")
// function to generate list from array 
function processProducts() {
    for (var i = 0; i < 5; i++) {
      labels[i].innerHTML=products[i]; // tells the function to use the array
    }
}
if (window.addEventListener){
    window.addEventListener("load", processProducts, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", processProducts);
  }
  
   
// function to add values of selected check boxes and display total
  function calcTotal()
{
  var itemTotal = 0;
var salesTaxRate = .06; // the sales tax 
var items = document.getElementsByTagName("input");
for (var i=0; i<5; i++) { 
    if (items[i].checked) {
      itemTotal += (items[i].value * 1);
    }
}
itemTotal *= 1+ salesTaxRate;        
document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2);
}
  //add event listener with alternative  
var submitButton = document.getElementById("sButton");
if (submitButton.addEventListener){
  submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent) {
  submitButton.attachEvent("onclick", calcTotal);
  
}

    


