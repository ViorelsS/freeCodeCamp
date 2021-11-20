function nextInLine(arr, item) {
  // Modifica il codice solo sotto questa riga
  arr.push(item);
  let removed = arr.shift();

  return removed;
  // Modifica il codice solo sopra questa riga
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Visualizza codice
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));