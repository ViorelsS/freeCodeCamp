// Dichiara la variabile myGlobal sotto questa riga
const myGlobal = 10;

function fun1() {
  // Assegna 5 a oopsGlobal qui
  oopsGlobal = 5;
}

// Modifica il codice solo sopra questa riga

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}