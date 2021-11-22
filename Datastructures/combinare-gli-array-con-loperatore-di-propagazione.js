function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=["learning", ...fragment, "is", "fun"];// Modifica questa riga
  return sentence;
}

console.log(spreadOut());