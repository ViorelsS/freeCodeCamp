let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Modifica il codice solo sotto questa riga
  return Object.keys(obj);
  // Modifica il codice solo sopra questa riga
}

console.log(getArrayOfUsers(users));