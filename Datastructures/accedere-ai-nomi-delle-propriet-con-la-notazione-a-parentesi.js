let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Modifica il codice solo sotto questa riga
  return foods[scannedItem];
  // Modifica il codice solo sopra questa riga
}

console.log(checkInventory("apples"));