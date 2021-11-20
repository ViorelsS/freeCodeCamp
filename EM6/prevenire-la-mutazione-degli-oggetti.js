function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Modifica il codice solo sotto questa riga
Object.freeze(MATH_CONSTANTS);

  // Modifica il codice solo sopra questa riga
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();