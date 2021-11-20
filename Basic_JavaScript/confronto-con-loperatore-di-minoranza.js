function testLessThan(val) {
  if (val<25) {  // Modifica questa riga
    return "Under 25";
  }

  if (val<55) {  // Modifica questa riga
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);