// Funzione che restituisce una stringa che rappresenta una tazza di tè verde
const prepareGreenTea = () => 'greenTea';

// Funzione che restituisce una stringa che rappresenta una tazza di tè nero
const prepareBlackTea = () => 'blackTea';

/*
Data la funzione (che rappresenta il tipo di tè) e
il numero di tazze che servono,
la funzione seguente restituisce un array di stringhe
(rappresentante ciascuna una tazza di un tipo specifico di tè).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Modifica il codice solo sotto questa riga
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Modifica il codice solo sopra questa riga

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);