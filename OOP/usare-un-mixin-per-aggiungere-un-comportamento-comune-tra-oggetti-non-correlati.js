let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Modifica il codice solo sotto questa riga
let glideMixin = function(obj) {
  obj.glide = function(){
    
  }
}

glideMixin(bird);
glideMixin(boat);