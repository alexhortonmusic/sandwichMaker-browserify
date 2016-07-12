gvar sandwichMaker = (function (maker) {
	// Private variable to store the different cheese prices
	var cheesePrice = {
		"American": 0.50,
		"Cheddar": 0.50,
		"Pepperjack": 0.60,
		"Feta": 1.00
	};

	//getting cheeses
	maker.getCheesePrice = function (cheese) {
		return cheesePrice[cheese];
	}

	// Return the new, augmented object with the new method on it
  return maker;
})(sandwichMaker);