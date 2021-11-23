function alphabeticalOrder(arr) {
  // Modifica il codice solo sotto questa riga

  return arr.sort(function(a,b){
    return a === b ? 0: a < b ? -1:1;
  });
  // Modifica il codice solo sopra questa riga
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);