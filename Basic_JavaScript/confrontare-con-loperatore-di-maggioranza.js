function testGreaterThan(val) {
  if (val>100) {  // Modifica questa riga
    return "Over 100";
  }

  if (val>10) {  // Modifica questa riga
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);