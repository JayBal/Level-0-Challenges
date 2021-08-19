function commonCharacterFinder(inputOne, inputTwo) {
  var charFoundHolder = " ";
  if (inputOne.length > inputTwo.length) {
    for (let i = 0; i < inputOne.length; i++) {
      if (inputOne.includes(inputTwo[i])) {
        charFoundHolder += inputTwo[i] + ",";
      }
    }
  } else {
    for (let i = 0; i < inputTwo.length; i++) {
      if (inputOne.includes(inputTwo[i])) {
        charFoundHolder += inputTwo[i] + " ";
      }
    }
  }
  console.log("Common letters:" + charFoundHolder);
}

commonCharacterFinder("computers", "house");
