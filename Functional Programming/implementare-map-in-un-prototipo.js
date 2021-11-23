// La variabile globale
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Modifica il codice solo sotto questa riga
   for (let i=0;i<this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Modifica il codice solo sopra questa riga
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});