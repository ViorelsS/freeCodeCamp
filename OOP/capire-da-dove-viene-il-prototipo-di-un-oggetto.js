function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Modifica il codice solo sotto questa riga
Dog.prototype.isPrototypeOf(beagle);