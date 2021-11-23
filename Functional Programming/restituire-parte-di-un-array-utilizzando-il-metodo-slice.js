function sliceArray(anim, beginSlice, endSlice) {
  // Modifica il codice solo sotto questa riga
  let newArr = [...anim];
  return newArr.slice(beginSlice,endSlice);

  // Modifica il codice solo sopra questa riga
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);