// tabs è un array contenente il titolo di ogni sito aperto all'interno della finestra
const Window = function(tabs) {
  this.tabs = tabs; // Memorizziamo l'array all'interno dell'oggetto
};

// Quando unisci due finestre in una finestra
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Quando apri una nuova scheda alla fine
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Apriamo una nuova scheda per adesso
  return this;
};

// Quando chiudi una scheda
Window.prototype.tabClose = function(index) {

  // Modifica il codice solo sotto questa riga

  const tabsBeforeIndex = this.tabs.slice(0, index); // Ottieni le schede prima della scheda
  const tabsAfterIndex = this.tabs.slice(index+1); // Ottieni le schede dopo la scheda

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Uniscili assieme

  // Modifica il codice solo sopra questa riga

  return this;
 };

// Creiamo tre finestre del browser
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // La tua mailbox, drive e altri siti di lavoro
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // I social
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Siti di intrattenimento

// Ora esegui l'apertura, la chiusura della scheda e altre operazioni
const finalTabs = socialWindow
  .tabOpen() // Apri una nuova scheda per i meme di gatti
  .join(videoWindow.tabClose(2)) // Chiudi la terza scheda in videoWindow e unisci le finestre
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);