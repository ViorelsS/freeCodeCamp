let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Modifica il codice solo sotto questa riga
  userObj.data.friends.push(friend);

  return userObj.data.friends;
  // Modifica il codice solo sopra questa riga
}

console.log(addFriend(user, 'Pete'));