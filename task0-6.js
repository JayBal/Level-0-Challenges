function maximum() {
  var maxNumber = arguments[0];
  for (var x = 0; x < arguments.length; x++) {
    if (arguments[x] > maxNumber) {
      maxNumber = arguments[x];
    }
  }
  return maxNumber;
}

maximum(1, 8, 3, 4, 8, 8, 1);
