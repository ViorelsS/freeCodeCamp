function testGreaterOrEqual(val) {
  if (val>=20) {  // Modifica questa riga
    return "20 or Over";
  }

  if (val>=10) {  // Modifica questa riga
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);