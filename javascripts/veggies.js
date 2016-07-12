var sandwichMaker = (function (maker) {
	// Private variable to store the different veggie prices
	var veggiePrice = {
		"Tomato": 0.60,
		"Lettuce": 0.60,
		"Avocado": 1.20,
		"Jalapenos": 0.50
	};

	//getting veggies
	maker.getVeggiePrice = function (veggie) {
		return veggiePrice[veggie];
	}

	// Return the new, augmented object with the new method on it
  return maker;
})(sandwichMaker);