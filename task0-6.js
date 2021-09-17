function maximum() {
  let maxNumber = arguments[0];
  for (let x = 0; x < arguments.length; x += 1) {
    if (arguments[x] > maxNumber) {
      maxNumber = arguments[x];
    }
  }
  return maxNumber;
}

maximum(1, 8, 3, 4, 8, 8, 1);
