function commonCharacterFinder(inputOne, inputTwo) {
  let charFoundHolder = '';
  const longInput = inputOne.length;
  const shortInput = inputTwo.length;
  const lengthDeterminer = Math.max(longInput, shortInput);

  for (let i = 0; i < lengthDeterminer; i += 1) {
    if (inputOne.includes(inputTwo[i])) {
      charFoundHolder += inputTwo[i];
    }
  }
  const outputSet = new Set(charFoundHolder);
  const finalResults = [...outputSet].join(', ');
  console.log(`Common letters: ${finalResults}`);
}

commonCharacterFinder('computers', 'house');
