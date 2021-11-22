function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Modifica il codice solo sotto questa riga
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
  console.log("Woof!");
}




// Modifica il codice solo sopra questa riga

let beagle = new Dog();