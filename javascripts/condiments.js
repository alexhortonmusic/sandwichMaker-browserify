var sandwichMaker = (function (maker) {
	// Private variable to store the different meat prices
	var condimentPrice = {
		"Mayo": 0.25,
		"Gravel": 0.10,
		"Rubber": 0.50,
		"Scorpions": 0.75
	};

	//getting condiments
	maker.getCondimentPrice = function (condiment) {
		return condimentPrice[condiment];
	}

	// Return the new, augmented object with the new method on it
  return maker;
})(sandwichMaker);