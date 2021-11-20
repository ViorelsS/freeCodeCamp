let count = 0;

function cc(card) {
  // Modifica il codice solo sotto questa riga
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if(count>0){
    return count + " " + "Bet";
  }else {
    return count + " " + "Hold";
  }

  
  // Modifica il codice solo sopra questa riga
}

cc(2); cc(3); cc(7); cc('K'); cc('A');