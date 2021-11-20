// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Modifica il codice solo sotto questa riga
  for(let i=0; i<contacts.length; i++){
    if(contacts[i].firstName === name){
      if(!contacts[i].hasOwnProperty(prop)){
        return "No such property";
      }else{
        return contacts[i][prop];
      }
    }
  }

  return "No such contact";
  // Modifica il codice solo sopra questa riga
}

lookUpProfile("Akira", "likes");