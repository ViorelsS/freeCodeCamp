// Modifica il codice solo sotto questa riga
class Thermostat {
  constructor(fahr) {
    this.fahr = fahr;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahr - 32);
  }
  
  set temperature(cels) {
    this.fahr = (cels * 9.0) / 5 + 32;
  }
}
// Modifica il codice solo sopra questa riga

const thermos = new Thermostat(76); // Impostazione in scala Fahrenheit
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius