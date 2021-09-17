function realNumberToTime(number) {
  const initialHour = number / 60;

  let hourManipulator = parseFloat(initialHour).toFixed(0);

  const minuteManipulator = number % 60;
  let pluralDeterminerHours = ' hour';
  let pluralDeterminerMinutes = ' minute ';

  if (number < 60) {
    hourManipulator = 0;
    pluralDeterminerHours = ' hours';
  }

  if (hourManipulator > 1) {
    pluralDeterminerHours = ' hours ';
  } else if (pluralDeterminerHours === 0 && pluralDeterminerHours === 1) {
    pluralDeterminerHours = ' hour ';
  }
  if (minuteManipulator > 1) {
    pluralDeterminerMinutes = ' minutes ';
  } else if (minuteManipulator === 0) {
    pluralDeterminerMinutes = ' minutes';
  }

  console.log(`${hourManipulator + pluralDeterminerHours}, ${minuteManipulator}${pluralDeterminerMinutes}.`);
}
realNumberToTime(55);
