const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Modifica il codice solo sotto questa riga
  const [,,...arr] = list; // Modifica questa riga
  // Modifica il codice solo sopra questa riga
  return arr;
}
const arr = removeFirstTwo(source);