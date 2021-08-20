function realNumberToTime(number) {
  var initialHour;

  initialHour = number / 60;

  hourManipulator = parseFloat(initialHour).toFixed(0); // I came up with this idea just so I can eleminate decimals
  //hourManipulator = initialHour; : This uncommented will produce 1.18 with 71 as the given number.
  minuteManipulator = number % 60;
  final = parseFloat(hourManipulator) + parseFloat(minuteManipulator);

  var pluralDeterminerHours = " hour";
  var pluralDeterminerMinutes = " minute ";

  if (number < 60) {
    hourManipulator = 0;
    pluralDeterminerHours = " hours";
  }

  if (hourManipulator > 1) {
    pluralDeterminerHours = " hours ";
  } else if (pluralDeterminerHours == 0 && pluralDeterminerHours == 1) {
    pluralDeterminerHours = " hour ";
  }
  if (minuteManipulator > 1) {
    pluralDeterminerMinutes = " minutes ";
  } else if (minuteManipulator == 0) {
    pluralDeterminerMinutes = " minutes";
  }

  console.log(
    hourManipulator +
      pluralDeterminerHours +
      ", " +
      minuteManipulator +
      pluralDeterminerMinutes +
      "."
  );
}
realNumberToTime(55);
