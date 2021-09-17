function countVowels(toBeSearched) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let charFoundHolder = '';

  for (let i = 0; i < toBeSearched.length; i += 1) {
    toBeSearched = toBeSearched.toLowerCase(); toBeSearched;
    if (vowels.includes(toBeSearched[i])) {
      charFoundHolder += toBeSearched[i];
    }
  }

  const stringFixer = charFoundHolder;
  const finalVowels = stringFixer.split('');

  const outputSet = new Set(finalVowels);
  const finalResults = [...outputSet].join(', ');
  console.log(`Vowels: ${finalResults}.`);
}

countVowels('umuziacademy');
