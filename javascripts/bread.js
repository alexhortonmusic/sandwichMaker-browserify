var sandwichMaker = (function (maker) {
	// Private variable to store the different bread prices
	var breadPrice = {
		"White": 2.00,
		"Wheat": 2.00,
		"Rye": 2.00,
		"Wrap": 2.50
	};

	//getting breads
	maker.getBreadPrice = function (bread) {
		return breadPrice[bread];
	}

	// Return the new, augmented object with the new method on it
  return maker;
})(sandwichMaker);