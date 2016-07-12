// This SandwichMaker IIFE augments the original one
var sandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var meatPrice = {
  	"Ham": 1.50,
  	"Turkey": 1.50,
  	"Bacon": 1.20,
  	"Bald Eagle": 20.00
  }

  // Augment the original object with another method
  maker.getMeatPrice = function(meat) {
    return meatPrice[meat];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(sandwichMaker);

