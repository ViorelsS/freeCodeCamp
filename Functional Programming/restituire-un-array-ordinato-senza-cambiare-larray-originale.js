const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Modifica il codice solo sotto questa riga
  let newArr=[];
 return newArr.concat(arr).slice(0, arr.length).sort(function(a,b){
   return a-b;
 });

  // Modifica il codice solo sopra questa riga
}

nonMutatingSort(globalArray);