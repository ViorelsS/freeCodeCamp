const squareList = arr => {
  // Modifica il codice solo sotto questa riga
  
  return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));
  // Modifica il codice solo sopra questa riga
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);