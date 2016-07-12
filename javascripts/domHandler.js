// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
// Variable to hold topping that the user selects
var selectedTopping;
// Select elements
var breadChooser = document.getElementById('breadChooser');
var meatChooser = document.getElementById('meatChooser');
var cheeseChooser = document.getElementById('cheeseChooser');
var condimentsChooser = document.getElementById('condimentsChooser');
var veggiesChooser = document.getElementById('veggiesChooser');
var finalSandwich = document.getElementById('finalSandwich');


 
//-----EVENT LISTENERS------//  

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var toppingPrice = sandwichMaker.getBreadPrice(selectedTopping);
	// Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += sandwichMaker.addTopping(toppingPrice);
  finalSandwich.innerHTML = finalSandwichPrice; 
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var toppingPrice = sandwichMaker.getMeatPrice(selectedTopping);
	// Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += sandwichMaker.addTopping(toppingPrice);
  finalSandwich.innerHTML = finalSandwichPrice; 
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var toppingPrice = sandwichMaker.getCheesePrice(selectedTopping);
	// Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += sandwichMaker.addTopping(toppingPrice);
  finalSandwich.innerHTML = finalSandwichPrice; 
});

condimentsChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var toppingPrice = sandwichMaker.getCondimentPrice(selectedTopping);
	// Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += sandwichMaker.addTopping(toppingPrice);
  finalSandwich.innerHTML = finalSandwichPrice; 
});

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var toppingPrice = sandwichMaker.getVeggiePrice(selectedTopping);
	// Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += sandwichMaker.addTopping(toppingPrice);
  finalSandwich.innerHTML = finalSandwichPrice; 
});


