function countOnline(usersObj) {
  // Modifica il codice solo sotto questa riga
    let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Modifica il codice solo sopra questa riga
}