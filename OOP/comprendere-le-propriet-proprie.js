function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Modifica il codice solo sotto questa riga

for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}