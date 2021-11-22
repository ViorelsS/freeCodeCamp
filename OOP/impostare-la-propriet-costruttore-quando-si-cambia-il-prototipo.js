function Dog(name) {
  this.name = name;
}

// Modifica il codice solo sotto questa riga
Dog.prototype = {
  constructor : Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};