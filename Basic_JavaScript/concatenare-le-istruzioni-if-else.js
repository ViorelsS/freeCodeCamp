function testSize(num) {
  // Modifica il codice solo sotto questa riga
  if(num<5){
    return "Tiny";
  }else if(num<10){
    return "Small";
  }else if(num<15){
    return "Medium";
  }else if(num<20){
    return "Large";
  }else{
    return "Huge";
  }
  // Modifica il codice solo sopra questa riga
}

testSize(7);