function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Modifica il codice solo sotto questa riga
    newArr.push([...arr]);
    // Modifica il codice solo sopra questa riga
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));