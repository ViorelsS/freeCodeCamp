// Setup
function abTest(a, b) {
  // Modifica il codice solo sotto questa riga
if(a<0 || b<0){
  return undefined;
}


  // Modifica il codice solo sopra questa riga

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);