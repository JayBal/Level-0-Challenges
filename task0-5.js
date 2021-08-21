function areaOfATriangle(a, b, c){

  var semiPerimeter =  (a + b + c) / 2;

  var finalArea = Math.sqrt(semiPerimeter * ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));

  //return finalArea;
  console.log(finalArea);
  }

areaOfATriangle(6,7,8);

