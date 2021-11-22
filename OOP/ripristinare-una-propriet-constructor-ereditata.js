function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Modifica il codice solo sotto questa riga



let duck = new Bird();
Bird.prototype.constructor = Bird;
let beagle = new Dog(); 
Dog.prototype.constructor = Dog;