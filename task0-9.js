
function countVowels(toBeSearched) 
  var vowels = ["a", "e", "i", "o", "u"];

  var charFoundHolder = " ";
  for (let i = 0; i < vowels.length; i++) {
    toBeSearched = toBeSearched.toLowerCase();
    if (vowels.includes(toBeSearched[i])) {
      charFoundHolder += toBeSearched[i] + " ";
    }
  }

  //The following segments converts from one type to another to manipulate the final string format
  var stringFixer = charFoundHolder;
  var finalVowels = stringFixer.split("");

  var outputSet = new Set(finalVowels);
  var finalResults = [...outputSet].join(", "); // Implemeted to clean up the final string format
  console.log("Vowels:" + finalResults);
}

countVowels("Umuzi");
