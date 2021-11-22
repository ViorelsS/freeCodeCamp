function popShift(arr) {
  let popped= arr.pop(); // Modifica questa riga
  let shifted = arr.shift(); // Modifica questa riga
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));