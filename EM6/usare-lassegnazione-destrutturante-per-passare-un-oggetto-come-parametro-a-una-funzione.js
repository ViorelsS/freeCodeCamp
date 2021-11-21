const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Modifica il codice solo sotto questa riga
//const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({max, min})=>(max + min)/2.0;
//const half = ({ max, min }) => (max + min) / 2.0;
// Modifica il codice solo sopra questa riga