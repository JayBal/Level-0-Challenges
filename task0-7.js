function celsiusToFahrenheit(celsiusValue) {
  const fahrenheit = (celsiusValue * 9) / 5 + 32;

  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheitValue) {
  const celSius = ((fahrenheitValue - 32) * 5) / 9;
  return celSius;
}

console.log(celsiusToFahrenheit(8));
console.log(fahrenheitToCelsius(56));
