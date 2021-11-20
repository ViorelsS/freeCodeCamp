function sum(arr, n) {
  // Modifica il codice solo sotto questa riga
  if(n<=0){
    return 0;
  }else if(n===2){
    return arr[0]+arr[1];
  }else{
    return sum(arr, n-1) + arr[n-1];
  }
  // Modifica il codice solo sopra questa riga
}