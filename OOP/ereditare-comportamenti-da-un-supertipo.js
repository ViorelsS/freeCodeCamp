function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Modifica il codice solo sotto questa riga

let duck = Object.create(Animal.prototype); // Modifica questa riga
let beagle=Object.create(Animal.prototype); // Modifica questa riga