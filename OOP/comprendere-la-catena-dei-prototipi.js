function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // restituisce true

// Correggi il codice qui sotto in modo che valga true
Object.prototype.isPrototypeOf(Dog.prototype);