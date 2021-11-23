// Modifica il codice solo sotto questa riga
function urlSlug(title) {
  return title
    .toLowerCase()
    .split(" ")
    .filter(substr => substr !== "")
    .join("-");

}
// Modifica il codice solo sopra questa riga