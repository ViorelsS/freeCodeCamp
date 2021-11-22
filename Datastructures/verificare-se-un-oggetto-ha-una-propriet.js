let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Modifica il codice solo sotto questa riga
  return userObj.hasOwnProperty("Alan") && userObj.hasOwnProperty("Jeff") && userObj.hasOwnProperty("Sarah") &&userObj.hasOwnProperty("Ryan");
  // Modifica il codice solo sopra questa riga
}

console.log(isEveryoneHere(users));