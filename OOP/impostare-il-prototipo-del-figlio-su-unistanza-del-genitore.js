function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Modifica il codice solo sotto questa riga

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();