// La variabile globale
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Modifica il codice sotto questa riga
function add (bookList, bookName) {
  let newBooks = [...bookList];
  newBooks.push(bookName);
  return newBooks;

  // Modifica il codice sopra questa riga
}

// Modifica il codice sotto questa riga

function remove (bookList,bookName) {
  let newBooks = [...bookList];

  if (newBooks.indexOf(bookName) >= 0) {

    newBooks.splice(newBooks.indexOf(bookName), 1);
    return newBooks;

    // Modifica il codice sopra questa riga
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);