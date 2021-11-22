// Modifica il codice solo sotto questa riga
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Modifica il codice solo sopra questa riga
bicycle.setGear(3);
console.log(bicycle.gear);