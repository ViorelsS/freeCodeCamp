// Funzione che restituisce una stringa che rappresenta una tazza di tè verde
const prepareTea = () => 'greenTea';

/*
Data la funzione (che rappresenta il tipo di tè) e
il numero di tazze che servono,
la funzione seguente restituisce un array di stringhe
(rappresentante ciascuna una tazza di un tipo specifico di tè).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Modifica il codice solo sotto questa riga
const tea4TeamFCC = getTea(40);
// Modifica il codice solo sopra questa riga