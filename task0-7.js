function celsiusToFahrenheit(celsiusValue) {
  var farHren = (celsiusValue * 9) / 5 + 32;

  return farHren;
}

function fahrenheitToCelsius(fahrenheitValue) {
  var celSius = ((fahrenheitValue - 32) * 5) / 9;
  return celSius;
}

console.log(celsiusToFahrenheit(8));
console.log(fahrenheitToCelsius(56));
