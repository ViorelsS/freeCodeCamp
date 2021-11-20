// Modifica il codice solo sotto questa riga
function countdown(n){
  if(n<1){
    return [];
  }else{
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}
// Modifica il codice solo sopra questa riga