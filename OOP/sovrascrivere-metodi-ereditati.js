function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Modifica il codice solo sotto questa riga

Penguin.prototype.fly = function(){
  return"Alas, this is a flightless bird.";
}


// Modifica il codice solo sopra questa riga

let penguin = new Penguin();
console.log(penguin.fly());