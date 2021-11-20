function checkObj(obj, checkProp) {
  // Modifica il codice solo sotto questa riga
    if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Modifica il codice solo sopra questa riga
}
