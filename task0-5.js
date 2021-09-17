function areaOfATriangle(a, b, c) {
  const semiPerimeter = (a + b + c) / 2;

  const finalArea = Math.sqrt(semiPerimeter * ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
  return finalArea;
}
areaOfATriangle(6, 7, 8);

