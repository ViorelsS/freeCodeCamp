function Dog(name) {
  this.name = name;
}

// Modifica il codice solo sotto questa riga
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
    return true;
  }else{
    return false;
  }
}