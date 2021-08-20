function areaOfATriangle(a, b, c){

    var semiPerimeter =  (3 + 4 + 5) / 2;

    var finalArea = Math.sqrt(semiPerimeter * ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));

    return finalArea;
    }

areaOfATriangle(3,4,5);

