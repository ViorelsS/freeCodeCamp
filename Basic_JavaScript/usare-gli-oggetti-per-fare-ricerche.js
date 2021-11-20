// Setup
function phoneticLookup(val) {
  let result = "";

  // Modifica il codice solo sotto questa riga
  const lookup = {
    "alpha":"Adams",
    "bravo" : "Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }

result = lookup[val];
  // Modifica il codice solo sopra questa riga
  return result;
}

phoneticLookup("charlie");