function myLocalScope() {
  // Modifica il codice solo sotto questa riga
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Esegui e controlla la console
// myVar non è definita al di fuori di myLocalScope
console.log('outside myLocalScope', myVar);