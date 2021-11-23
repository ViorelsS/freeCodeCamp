// La variabile globale
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Modifica il codice solo sotto questa riga
  const newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Modifica il codice solo sopra questa riga
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});