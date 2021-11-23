function add(x) {
  // Modifica il codice solo sotto questa riga
  return function curried(y){
    return function curried(z){
      return x+y+z;
    }
  }

  // Modifica il codice solo sopra questa riga
}

add(10)(20)(30);