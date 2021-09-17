function commonCharacterFinder(inputOne, inputTwo) {
  let charFoundHolder = '';
  if (inputOne.length > inputTwo.length) {
    for (let i = 0; i < inputOne.length; i += 1) {
      if (inputOne.includes(inputTwo[i])) {
        charFoundHolder += inputTwo[i];
      }
    }
  } else {
    for (let i = 0; i < inputTwo.length; i += 1) {
      if (inputOne.includes(inputTwo[i])) {
        charFoundHolder += `${inputTwo[i]}`;
      }
    }
  }
  const outputSet = new Set(charFoundHolder);
  const finalResults = [...outputSet].join(', ');

  console.log(`Common letters: ${finalResults}.`);
}

commonCharacterFinder('computers', 'house');
